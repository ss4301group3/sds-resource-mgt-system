
import { ROLE_DESCRIPTIONS } from "../../../config";
import { ElemGetter, getOrCreate, ifClicked, newElem, on } from "../../utils/html";
import { App, AppUser } from "../App";
import { Data } from "../Data";
import { Category } from "../../abstractions/dto"
import { FormPage } from "./FormPage";

export class ResourcesPage {
    static getContent(): HTMLDivElement {
        const content = document.createElement("DIV") as HTMLDivElement;

        on(content).appendByGetters(getContent());

        return content;
    }

    static getTitle() {
        return "Resources";
    }

    static getRemarks() {
        return "Main Page";
    }
}

function getContent(): Array<ElemGetter> {
    let getters: Array<ElemGetter> = [
        getCategoriesHeading,
        getCategories,
        getResourcesHeading,
        getResources
    ];

    if(Object.keys(Data.getCategories()).length == 0)
        getters = getters.filter(notCategoriesRelated);

    if(Object.keys(Data.getResources()).length == 0)
        getters = getters.filter(notResourcesRelated);

    function notCategoriesRelated(getter: ElemGetter) {
        return getter != getCategories && getter != getCategoriesHeading;
    }
    function notResourcesRelated(getter: ElemGetter) {
        return getter != getResources && getter != getResourcesHeading;
    }

    return getters;
};

function getCategoriesHeading(): HTMLElement { return newElem("H3", "Categories"); }
function getCategories(): HTMLElement {
    const container = Object.assign(document.createElement("DIV"), {
        id: "ContentCategoriesContainer"
    });
    const categories = Data.getCategories();

    Object.entries(categories).forEach(([id, category]) => {
        const item = Object.assign(document.createElement("BUTTON"), {
            id: `ContentCategoriesItem${category.getId().toString()}`,
            innerHTML: category.getLabel()
        });
        ifClicked(item).trigger(() => {});
        container.appendChild(item);
    });
    return container;
}

function getResourcesHeading(): HTMLElement { return newElem("H3", "Resources"); }
function getResources(): HTMLElement {
    const container = Object.assign(document.createElement("DIV"), {
        id: "ContentResourcesContainer"
    });
    const resources = Data.getResources();

    Object.entries(resources).forEach(([id, resource]) => {
        const item = Object.assign(document.createElement("BUTTON"), {
            id: `ContentResourcesItem${resource.getId().toString()}`,
            innerHTML: resource.getLabel()
        });
        ifClicked(item).trigger(() => FormPage.addItem(resource, 1));
        container.appendChild(item);
    });
    return container;
}