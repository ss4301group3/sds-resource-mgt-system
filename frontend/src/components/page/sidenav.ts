import { makeDivWithId, makeDivWithIdAndText } from "../../utils/html"

export function getSidenav(): HTMLDivElement {
    let sidenav: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppSidenav");

    if(!sidenav) {
        sidenav = makeDivWithId("AppSidenav");
    };

    return sidenav;
}
export function getSidenavToggle(): HTMLDivElement {
    let toggle: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppSidenavToggle");

    if(!toggle) {
        toggle = makeDivWithIdAndText("AppSidenavToggle", ">");
    };

    return toggle;
}