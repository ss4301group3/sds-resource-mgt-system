import { makeDivWithId, makeH3WithId, makePWithId, removeChildren } from "../utils/html";

import "../../stylesheets/components/app/mainContainer.scss";

export function getMainContainer(): HTMLDivElement {
    let container: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppMainContainer");
    
    if(!container) {
        container = makeDivWithId("AppMainContainer");
        container.appendChild(getPageTitle());
        container.appendChild(getPageRemarks());
        container.appendChild(getPageContent());
    }

    return container;
}

export function getPageTitle(): HTMLHeadingElement {
    let title: HTMLHeadingElement = <HTMLHeadingElement> document.querySelector("#AppPageTitle");

    if(!title) title = makeH3WithId("AppPageTitle");

    return title;
}
export function setPageTitle(title: string): void {
    getPageTitle().innerHTML = title;
}
export function clearPageTitle(): void { removeChildren(getPageTitle() ); }

export function getPageRemarks(): HTMLParagraphElement {
    let remarks: HTMLParagraphElement = <HTMLParagraphElement> document.querySelector("#AppPageRemarks");

    if(!remarks) remarks = makePWithId("AppPageRemarks");

    return remarks;
}
export function clearPageRemarks(): void { removeChildren(getPageRemarks() ); }

export function getPageContent(): HTMLDivElement {
    let content: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppPageContent");

    if(!content) content = makeDivWithId("AppPageContent");

    return content;
}
export function addPageContent(newContent: HTMLElement): void {
    getPageContent().appendChild(newContent);
}