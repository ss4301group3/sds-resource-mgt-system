import { makeButtonWithId, makeDivWithId } from "../utils/html";
import { getFrontPage } from "../pages/frontPage";

import "../../stylesheets/components/app/dropnav.scss";
import { pages } from "../utils/pages";

export function getDropnav(): HTMLDivElement {
    let dropnav: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppDropnav");

    if(!dropnav) {
        dropnav = makeDivWithId("AppDropnav");
    }

    return dropnav;
}

export function showDropnav(): void {
    const effectedElems: HTMLCollectionOf<Element> = getEffectedElems();

    for(let i: number = 0; i < effectedElems.length; i++)
        effectedElems[i].classList.add("dropnav-active");
}
export function hideDropnav(): void {
    const effectedElems: HTMLCollectionOf<Element> = getEffectedElems();

    for(let i: number = 0; i < effectedElems.length; i++)
        effectedElems[i].classList.remove("dropnav-active");
    
    pages.frontPage.hide();
}
    
    

export function getEffectedElems(): HTMLCollectionOf<Element> {
    return document.getElementsByClassName("dropnav-effectee");
}
export function haveDropnavEffect(elem: HTMLElement): void {
    elem.classList.add("dropnav-effectee");
}

export function removeLoader(): void {
    let loader: HTMLElement = <HTMLElement> document.querySelector('#Preloaded')

    if(loader) loader.parentElement?.removeChild(loader);
}