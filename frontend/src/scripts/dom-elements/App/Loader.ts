import { getOrCreate, ifClicked, on } from "../../utils/html";

export class Loader {
    static init(): void {
        createLoaderIfNoneExist();
        this.display("Checking for any logged-in account");
    }
    
    private static get(): HTMLElement | null {
        return document.getElementById("LoaderContainer");
    }

    static hide(): void {
        this.get()?.classList.add("loader-inactive");
    }

    static display(optionalHTMLText?: string): void {
        this.get()?.classList.remove("loader-inactive");

        const textContainer = document.getElementById("Loader");

        if(optionalHTMLText && textContainer) (<HTMLElement> textContainer).innerHTML = optionalHTMLText;
    }

    static appendSignOutButton(): void {
        this.get()?.appendChild(this.getSignOutAnchor());
    }
    
    private static getSignOutAnchor(): HTMLAnchorElement {

        const anchor = getOrCreate("A", "LoaderSignOut") as HTMLAnchorElement;

        anchor.href = "javascript:void(0)";
        anchor.innerHTML = "<br>(Sign-out)";
        ifClicked(anchor).trigger(()=>{});
    
        return anchor;
    }
}

function createLoaderIfNoneExist(): void {
    const app = document.getElementById("App");
    const loader = document.getElementById("LoaderContainer");

    if(app && !loader) {
        app?.appendChild(getCreatedLoader());
    }
}

function getCreatedLoader(): HTMLDivElement {
    const container = getOrCreate("DIV","LoaderContainer") as HTMLDivElement;
    const content = getOrCreate("Span", "Loader", "dropnav-effectee dropnav-active") as HTMLElement;

    container.appendChild(content);

    return container;
}