import { signOut } from "../utils/auth";
import { makeAWithIdAndHrefAndText } from "../utils/html";
import { hideDropnavPages, pages } from "../utils/pages";
import { hideDropnav } from "./dropnav";

export function hideLoader(): void {
    let loader: HTMLElement = <HTMLElement> document.querySelector('#LoaderContainer')

    if(loader) loader.classList.add("page-inactive")
}

export function unhideLoader(innerHTML?: string): void {
    let loaderContainer: HTMLElement = <HTMLElement> document.querySelector('#LoaderContainer');
    let loader: HTMLElement = <HTMLElement> document.querySelector('#Loader')

    if(innerHTML) loader.innerHTML = innerHTML;
    if(loaderContainer) loaderContainer.classList.remove("page-inactive")
}

export function appendSignOutOnLoader(): void {
    let loaderContainer: HTMLElement = <HTMLElement> document.querySelector('#LoaderContainer');

    if(loaderContainer) loaderContainer.appendChild(getLoaderSignOutAnchor());
}

export function removeSignOutOnLoader(): void {
    let loaderContainer: HTMLElement = <HTMLElement> document.querySelector('#LoaderContainer');
    let anchor: HTMLAnchorElement = <HTMLAnchorElement> document.querySelector("#LoaderSignOut");

    if(loaderContainer && anchor) loaderContainer.removeChild(anchor);
}

function getLoaderSignOutAnchor(): HTMLAnchorElement {
    let anchor: HTMLAnchorElement = <HTMLAnchorElement> document.querySelector("#LoaderSignOut");

    if(!anchor) {
        anchor = makeAWithIdAndHrefAndText("LoaderSignOut", "javascript:void(0)", "<br>(Sign-out)");
        anchor.addEventListener("click", () => {
            removeSignOutOnLoader();
            hideDropnavPages();
            signOut();
        }, { capture: true });
    }

    return anchor;
}