import { getOrCreate, ifClicked, on } from "../../utils/html";

let to: NodeJS.Timeout | null;
let to2: NodeJS.Timeout | null;
let currentMessage: string = "Checking for any logged-in account";
let hidden: boolean = false;

export class Loader {
    static init(): void {
        createLoaderIfNoneExist();
        this.display(currentMessage);
    }
    
    private static get(): HTMLElement | null {
        return document.getElementById("LoaderContainer");
    }

    static hide(): void {
        hidden = true;
        this.get()?.classList.add("loader-inactive");
    }

    static display(optionalHTMLText?: string, duration?: number): void {
        this.get()?.classList.remove("loader-inactive");
        if(!duration) hidden = false;

        const textContainer = document.getElementById("Loader");

        if(optionalHTMLText && textContainer) {
            (<HTMLElement> textContainer).innerHTML = optionalHTMLText+"<br>";

            if(!duration) currentMessage = optionalHTMLText;
            else {
                const messageToDisplayAfterTimeout = currentMessage ? currentMessage+"<br>" : "";
                if(to) clearTimeout(to);

                to = setTimeout(function() {
                    if(to2) clearTimeout(to2);

                    to2 = setTimeout(function() {
                        (<HTMLElement> document.getElementById("Loader")).innerHTML = messageToDisplayAfterTimeout;
                    }, 500);

                    if(hidden) Loader.hide();
                }, duration);
            }
        }
    }

    static clearThenHide(hide:boolean) {
        const textContainer = document.getElementById("Loader");

        currentMessage = "";
        hidden = hide;
        
        if(textContainer)
            on(textContainer).removeChildren();
    }

    static appendSignOutButtonWithUsername(username: string): void {
        this.get()?.appendChild(this.getSignOutAnchor(username));
    }
    
    private static getSignOutAnchor(username: string): HTMLAnchorElement {

        const anchor = getOrCreate("A", "LoaderSignOut") as HTMLAnchorElement;

        anchor.href = "javascript:void(0)";
        anchor.innerHTML = `(Sign-out - ${username})`;
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