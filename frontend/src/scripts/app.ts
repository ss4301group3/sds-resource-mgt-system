import { makeDivWithId } from "./utils/html";
import { getMainContainer } from "./app/mainContainer";
import { getNavbar, getNavbarFiller } from "./app/navbar";
import { getSidenav, getSidenavToggle } from "./app/sidenav";
import { removeLoader } from "./app/dropnav";
import { pages } from "./utils/pages";

import "../stylesheets/components/app.scss";
import "../stylesheets/components/app/messageBox.scss";

let appContainer: HTMLElement;

export function init(): void {
    removeLoader();
    showApp();
    pages.frontPage.show();
}

export function setAsAppContainer(container?: HTMLElement): void {
    if(!container) container = appContainer;
    appContainer = container;
}

export function showApp(): void {
    let app = document.querySelector("#App");

    if(!app) app = getApp();

    appContainer.appendChild(app);
}

export function hideApp(): void {
    let app = document.querySelector("#App");

    if(app) app.parentNode?.removeChild(app);
}

function getApp(): HTMLDivElement {
    const app = makeDivWithId("App");

    app.appendChild(getNavbarFiller());
    app.appendChild(getNavbar());

    app.appendChild(getSidenav());
    app.appendChild(getSidenavToggle());

    app.appendChild(getMainContainer());

    return app;
}