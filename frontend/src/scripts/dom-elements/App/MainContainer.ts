import { getOrCreate, ifEmpty, on } from "../../utils/html";
import "../../../stylesheets/components/App/MainContainer.scss";

export class MainContainer {
    static get(): HTMLDivElement {
        const container = getOrCreate("DIV", "AppContainer") as HTMLDivElement;

        ifEmpty(container).appendByGetters([
            getTitle,
            getRemarks,
            getContent
        ]);

        return container;
    }

    static setTitle(title: string): void {
        getTitle().innerText = title;
    }

    static setRemarks(remarks: string): void {
        getRemarks().innerHTML = remarks;
    }

    static addContent(newContent: HTMLElement): void {
        getContent().appendChild(newContent);
    }

    static replaceContent(newContent: HTMLElement): void {
        on(getContent()).removeChildren();

        this.addContent(newContent)
    }
}

function getTitle(): HTMLHeadingElement { return getOrCreate("H2", "AppPageTitle") as HTMLHeadingElement; }
function getRemarks(): HTMLHeadingElement { return getOrCreate("P", "AppPageRemarks") as HTMLParagraphElement; }
function getContent(): HTMLDivElement { return getOrCreate("DIV", "AppPageContent") as HTMLDivElement; }