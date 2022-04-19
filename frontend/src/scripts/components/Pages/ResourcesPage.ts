
import { ElemGetter, ifClicked, newElem, on } from "../../utils/html";
import { Data } from "../Data";
import { Category} from "../../abstractions/dto/Category"
import { FormPage } from "./FormPage";
import { MessageBox } from "../App/MessageBox";
import { Pages } from "../Pages";
import { Dto } from "../../abstractions/dto";

import "../../../stylesheets/components/pages/ResourcesPage.scss";

export class ResourcesPage {

    static getContent(category?: Dto): HTMLDivElement {
        const content = document.createElement("DIV") as HTMLDivElement;
        
        on(content).appendByGetters(getContent(category));

        return content;
    }

    static getTitle(category?: Dto) {
        return "Resources";
    }

    static getRemarks(category?: Dto): HTMLElement {
        let cat = category as Category;

        const mainPageLabel = "Main Page";

        const directoryList = document.createElement("DIV");
        const leadingLabel = cat ? cat.getLabel() : mainPageLabel;

        directoryList.appendChild(newElem("SPAN", leadingLabel))

        while(cat && cat.getParentId() != null) {
            cat = Data.getParent(cat);

            const catLink = newElem("A", cat.getLabel()) as HTMLAnchorElement;
            catLink.href = "javascript:void(0)";

            ifClicked(catLink).trigger(() => {
                Pages.display("Resources", cat);
            });

            directoryList.insertBefore(newElem("SPAN", " > "), directoryList.firstChild);
            directoryList.insertBefore(catLink, directoryList.firstChild);
        }

        if(cat) {
            const mainLink = newElem("A", mainPageLabel) as HTMLAnchorElement;
            mainLink.href = "javascript:void(0)";

            ifClicked(mainLink).trigger(() => {
                Pages.display("Resources");
            });

            directoryList.insertBefore(newElem("SPAN", " > "), directoryList.firstChild);
            directoryList.insertBefore(mainLink, directoryList.firstChild);
        }

        return directoryList;
    }
}

function getContent(category?: Dto): Array<ElemGetter> {

    let getters: Array<ElemGetter> = [
        getCategoriesHeading,
        () => getCategories(category),
        getResourcesHeading,
        () => getResources(category)
    ];

    const hasSubcategories = Object.keys(Data.getCategories(category)).length > 0;
    const hasResources = Object.keys(Data.getResources(category)).length > 0;

    if(!hasSubcategories)
        getters = getters.filter(notCategoriesRelated);

    if(!hasResources)
        getters = getters.filter(notResourcesRelated);

    function notCategoriesRelated(getter: ElemGetter) {
        return getter != (() => getCategories(category)) && getter != getCategoriesHeading;
    }
    function notResourcesRelated(getter: ElemGetter) {
        return getter != (() => getResources(category)) && getter != getResourcesHeading;
    }

    return getters;
};

function getCategoriesHeading(): HTMLElement { return newElem("H3", "Categories"); }
function getCategories(category?: Dto): HTMLElement {
    
    const categories = Data.getCategories(category);

    const container = Object.assign(document.createElement("DIV"), {
        id: "ContentCategoriesContainer"
    });

    Object.entries(categories).forEach(([id, category]) => {

        const item = Object.assign(document.createElement("BUTTON"), {
            id: `ContentCategoriesItem${category.getId()}`,
            innerHTML: category.getLabel()
        });

        ifClicked(item).trigger(() => {
            Pages.display("Resources", category);
        });

        container.appendChild(item);
    });

    return container;
}

function getResourcesHeading(): HTMLElement { return newElem("H3", "Resources"); }
function getResources(category?: Dto): HTMLElement {

    const resources = Data.getResources(category);

    const container = Object.assign(document.createElement("DIV"), {
        id: "ContentResourcesContainer"
    });

    Object.entries(resources).forEach(([id, resource]) => {
        const label = resource.getLabel();

        const item = Object.assign(document.createElement("BUTTON"), {
            id: `ContentResourcesItem${resource.getId().toString()}`,
            innerHTML: label
        });

        ifClicked(item).trigger(() => {
            FormPage.addItem(resource, 1);

            const currentAmount = FormPage.peekItem(resource)[1];

            MessageBox.writeMessage(
                `MessageBoxAddResMsg${resource.getId()}`,
                `+ ${label} ; Total - ${currentAmount} [<span class="link">Form Page</span>]`, true, 5000
            );
        });

        container.appendChild(item);
    });

    return container;
}