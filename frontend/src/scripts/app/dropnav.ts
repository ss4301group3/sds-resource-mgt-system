import { makeButtonWithId, makeDivWithId, makeDivWithIdAndClass } from "../utils/html";

import "../../stylesheets/components/app/dropnav.scss";
import { pages } from "../utils/pages";
import { hideLoader } from "./loader";

export function getDropnav(): HTMLDivElement {
    let dropnav: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppDropnav");

    if(!dropnav) {
        dropnav = makeDivWithIdAndClass("AppDropnav","dropnav-effectee dropnav-active");
    }

    return dropnav;
}
export function getDropnavBg(): HTMLDivElement {
    let dropnavBg: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppDropnavBg");

    if(!dropnavBg) {
        dropnavBg = makeDivWithIdAndClass("AppDropnavBg","dropnav-effectee dropnav-active");
    }

    return dropnavBg;
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
    
    hideLoader();
    pages.frontPage.hide();
    pages.loanForm.hide();
}
    
    

export function getEffectedElems(): HTMLCollectionOf<Element> {
    return document.getElementsByClassName("dropnav-effectee");
}
export function haveDropnavEffect(elem: HTMLElement): void {
    elem.classList.add("dropnav-effectee");
}