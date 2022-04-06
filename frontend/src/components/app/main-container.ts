import { makeDivWithId, makeH3WithId, makePWithId } from "../../utils/html";

import "../../stylesheets/components/app/main-container.scss";

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

export function getPageRemarks(): HTMLParagraphElement {
    let remarks: HTMLParagraphElement = <HTMLParagraphElement> document.querySelector("#AppPageRemarks");

    if(!remarks) remarks = makePWithId("AppPageRemarks");

    return remarks;
}

export function getPageContent(): HTMLDivElement {
    let content: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppPageContent");

    if(!content) content = makeDivWithId("AppPageContent");

    return content;
}