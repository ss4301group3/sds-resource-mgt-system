import { makeAWithClassAndHrefAndText, makeButtonWithId, makeDivWithId, makeDivWithIdAndClass, makeDivWithIdAndClassAndText, removeChildren} from "../utils/html";
import { DEPARTMENT_NAME, HOMEPAGE_URL } from "../../config";

import LOGO from '../../assets/logo.png';

import "../../stylesheets/components/app/navbar.scss";
import { signOut } from "../utils/auth";
import { removeSignOutOnLoader } from "./loader";

export function getNavbarFiller(): HTMLDivElement {
    let filler: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbarFiller");

    if(!filler) filler = makeDivWithId("AppNavbarFiller");
    
    return filler;
}

export function getNavbar(): HTMLDivElement {
    let navbar: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbar");

    if(!navbar) {
        navbar = makeDivWithIdAndClass("AppNavbar","dropnav-effectee dropnav-active");
        navbar.appendChild(getNavbarLogo());
        navbar.appendChild(getNavbarNavs());
        navbar.appendChild(getNavbarAuth());
    }

    return navbar;
}

function getNavbarLogo(): HTMLDivElement {
    let logo: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbarLogo");

    if(!logo) {
        logo = makeDivWithId("AppNavbarLogo");
        logo.appendChild(getNavbarLogoAnchor());
    }

    return logo;
}

function getNavbarLogoAnchor(): HTMLAnchorElement {
    const logoLink: HTMLAnchorElement = document.createElement("a");

    logoLink.href = HOMEPAGE_URL;
    logoLink.appendChild(getNavbarLogoImage());

    return logoLink;
}

function getNavbarLogoImage(): HTMLImageElement {
    const logoImg: HTMLImageElement = new Image();

    logoImg.src = LOGO;
    logoImg.alt = DEPARTMENT_NAME;

    return logoImg;
}

export function getNavbarNavs(): HTMLDivElement {
    let navs: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbarNavs");

    if(!navs) navs = makeDivWithId("AppNavbarNavs");

    return navs;
}
export function clearNavbarNavs(): void {
    removeChildren(getNavbarNavs());
}
export function addNavbarLink(label: string, functionOnClick: Function): void {
    const navLink = makeDivWithIdAndClass(
        `AppNavbarNav${label.split(" ").join("")}`,
        'nav',
    );
    navLink.addEventListener("click", () => {
        functionOnClick()
    },{ capture: true });
    navLink.appendChild(makeAWithClassAndHrefAndText("anchor", "javascript:void(0)", label));
    getNavbarNavs().appendChild(navLink);
}

export function getNavbarAuth(): HTMLDivElement {
    let auth: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbarAuth");

    if(!auth) {
        auth = makeDivWithId("AppNavbarAuth");
        auth.addEventListener("click", () => {
            signOut();
            removeSignOutOnLoader();
        }, { capture : true });
        auth.appendChild(getNavbarAuthButton());
    }

    return auth;
}

export function getNavbarAuthButton(): HTMLButtonElement {
    let authBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppNavbarAuthButton");

    if(!authBtn) {
        authBtn = makeButtonWithId("AppNavbarAuthButton");
        authBtn.innerText = "Sign Out";
    }

    return authBtn;
}