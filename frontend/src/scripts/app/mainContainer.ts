import { makeDivWithId, makeH2Withid, makeH3WithId, makePWithId, removeChildren } from "../utils/html";

import "../../stylesheets/components/app/mainContainer.scss";
import { User } from "../user";
import { hideDropnav, showDropnav } from "./dropnav";

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

    if(!title) title = makeH2Withid("AppPageTitle");

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
export function setPageRemarks(title: string): void {
    getPageRemarks().innerHTML = title;
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
export function clearPageContent(): void { removeChildren(getPageContent() ); }

export function showMainContainer(): void {
    //may not need to do anything after all
    //hideDropnav();
    //hideSidenav();
}

export function hideMainContainer(): void {
    //showDropnav();
    //showSidenav();
}