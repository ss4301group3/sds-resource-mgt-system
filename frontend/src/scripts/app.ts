import { makeDivWithId } from "./utils/html";
import { getMainContainer } from "./app/mainContainer";
import { getNavbar, getNavbarFiller } from "./app/navbar";
import { getSidenav, getSidenavToggle } from "./app/sidenav";
import { pages } from "./utils/pages";
import { signOut } from "./utils/auth";
import { hideLoader } from "./app/loader";

import "../stylesheets/components/app.scss";
import "../stylesheets/components/app/messageBox.scss";
import { getDropnav } from "./app/dropnav";

let appContainer: HTMLElement;

export function init(): void {
    showApp();
}

export function setAsAppContainer(container?: HTMLElement): void {
    if(!container) container = appContainer;
    appContainer = container;
}

export function showApp(): void {
    const app = getApp();

    appContainer.appendChild(app);
}

export function hideApp(): void {
    let app = document.querySelector("#App");

    if(app) app.parentNode?.removeChild(app);
}

function getApp(): HTMLDivElement {
    let app = <HTMLDivElement> document.querySelector("#App");

    if(!app) app = makeDivWithId("App");

    app.appendChild(getNavbarFiller());
    app.appendChild(getDropnav());
    app.appendChild(getNavbar());

    app.appendChild(getSidenav());
    app.appendChild(getSidenavToggle());

    app.appendChild(getMainContainer());

    return app;
}