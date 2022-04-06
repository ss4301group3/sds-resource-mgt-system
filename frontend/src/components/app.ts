import { makeDivWithId } from "../utils/html";
import { getMainContainer } from "./app/main-container";
import { getNavbar, getNavbarFiller } from "./app/navbar";
import { getSidenav, getSidenavToggle } from "./app/sidenav";

import "../stylesheets/components/app.scss";
import "../stylesheets/components/app/message-box.scss";

let appContainer: HTMLElement;

export function setAsAppContainer(container?: HTMLElement): void {
    if(!container) container = appContainer;
    appContainer = container;
}

export function showApp(): void {
    let app = document.querySelector("#App");

    if(!app) app = init();

    appContainer.appendChild(app);
}

export function hideApp(): void {
    let app = document.querySelector("#App");

    if(app) app.parentNode?.removeChild(app);
}

function init(): HTMLDivElement {
    const app = makeDivWithId("App");

    app.appendChild(getNavbarFiller());
    app.appendChild(getNavbar());

    app.appendChild(getSidenav());
    app.appendChild(getSidenavToggle());

    app.appendChild(getMainContainer());

    return app;
}

export function showPage(pageName: string): void {

}

export function showCustomInterface(interfaceHTML: string): void {
    
}


interface RenderOption {
    render(page: Page): void;
}
class DefaultRenderOption implements RenderOption {
    render(page: Page): void {
    }
}

class PageData {
    #label: string;
    #remarks: string;

    #route: { [key: string]: string };
    #section: string;
}

class Page {
    #data: PageData;
    #content: PageContent;
}

class PageContent {}