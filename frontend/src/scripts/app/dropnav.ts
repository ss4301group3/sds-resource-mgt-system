import { makeButtonWithId, makeDivWithId } from "../utils/html";
import { getFrontPage } from "../pages/frontPage";

export function getDropnav(): HTMLDivElement {
    let dropnav: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppDropnav");

    if(!dropnav) {
        dropnav = makeDivWithId("AppDropnav");
    }

    return dropnav;
}

export function showFrontPage(): void {
    getDropnav().appendChild(getFrontPage());
    showDropnav();
}

export function showDropnav(): void {
    const effectedElems: HTMLCollectionOf<Element> = getEffectedElems();

    for(let i: number = 0; i < effectedElems.length; i++)
        effectedElems[i].classList.add("dropnav-active");
}
export function hideDropnav(): void {
    const effectedElems: HTMLCollectionOf<Element> = getEffectedElems();

    for(let i: number = 0; i < effectedElems.length; i++)
        effectedElems[i].classList.remove("dropnav-active");}

export function getEffectedElems(): HTMLCollectionOf<Element> {
    return document.getElementsByClassName("dropnav-effectee");
}
export function haveDropnavEffect(elem: HTMLElement): void {
    elem.classList.add("dropnav-effectee");
}