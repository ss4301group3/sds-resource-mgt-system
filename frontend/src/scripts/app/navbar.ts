import { makeButtonWithId, makeDivWithId} from "../utils/html";
import { DEPARTMENT_NAME, HOMEPAGE_URL } from "../../config";

import LOGO from '../../assets/logo.png';

import "../../stylesheets/components/app/topnav.scss";

export function getNavbarFiller(): HTMLDivElement {
    let filler: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbarFiller");

    if(!filler) filler = makeDivWithId("AppNavbarFiller");
    
    return filler;
}

export function getNavbar(): HTMLDivElement {
    let navbar: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbar");

    if(!navbar) {
        navbar = makeDivWithId("AppNavbar");
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

export function getNavbarAuth(): HTMLDivElement {
    let auth: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppNavbarAuth");

    if(!auth) {
        auth = makeDivWithId("AppNavbarAuth");
        auth.appendChild(getNavbarAuthButton());
    }

    return auth;
}

export function getNavbarAuthButton(): HTMLButtonElement {
    let authBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppNavbarAuthButton");

    if(!authBtn) {
        authBtn = makeButtonWithId("AppNavbarAuthButton");
        authBtn.innerText = "Sign In";
    }

    return authBtn;
}