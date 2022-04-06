import { makeDivWithId, makeH2WithId, makePWithId } from "../utils/html";
import { getMainContainer } from "./page/main-container";
import { getNavbar, getNavbarFiller } from "./page/navbar";
import { getSidenav, getSidenavToggle } from "./page/sidenav";

export function setAsAppContainer(container: HTMLElement): void {
    let app = document.querySelector("#App");

    if(!app) app = initApp();

    container.appendChild(app);
}

function initApp(): HTMLDivElement {
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