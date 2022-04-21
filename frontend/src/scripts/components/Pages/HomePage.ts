import { DEPARTMENT_NAME, ROLE_DESCRIPTIONS } from "../../../config";
import { ElemGetter, getOrCreate, newElem, on } from "../../utils/html";
import { AppUser } from "../App";
import { Sidenav } from "../App/Sidenav";

import "../../../stylesheets/components/pages/HomePage.scss"

export class HomePage {
    static getContent(): HTMLDivElement {
        const content = document.createElement("DIV") as HTMLDivElement;

        on(content).appendByGetters(getContent());

        return content;
    }

    static getTitle() {
        return "Home Page";
    }

    static getRemarks() {
        return newElem("DIV", DEPARTMENT_NAME + " - Resource Management System");
    }

    static setupSidenav(): void {
        Sidenav.clear();
    }
}

function getContent(): Array<ElemGetter> {
    let getters: Array<ElemGetter> = [
        getWelcomeMessage,
        getRolesHeading,
        getRolesInfo,
        getNavigationInstructions,
        getUnsignedInUserInfo
    ];

    if(!AppUser || !AppUser.hasAnyPrivilege())
        getters = getters.filter(notRolesRelated);

    if(AppUser)
        getters = getters.filter(notUnsignedInUserRelated);

    return getters;

    function notRolesRelated(getter: ElemGetter) {
        return getter != getRolesHeading && getter != getRolesInfo;
    }
    function notUnsignedInUserRelated(getter: ElemGetter) {
        return getter != getUnsignedInUserInfo;
    }
};

function getWelcomeMessage(): HTMLElement {
    return getOrCreate("H3", null, null, `Welcome${AppUser ? ", "+AppUser.getName() : "!"}`) as HTMLElement;
}

function getRolesHeading(): HTMLElement {
    return getOrCreate("H4", null, null, "These roles are assigned to your account:");
}

function getRolesInfo(): HTMLElement {
        const rolesList = getOrCreate("UL");
        
        Object.entries(ROLE_DESCRIPTIONS).forEach(([key, value]) =>{
            if(AppUser && AppUser.getRoles().includes(key))
                rolesList.appendChild(getOrCreate("LI", null, null, value));
        });

        return rolesList
}

function getNavigationInstructions(): HTMLElement {
    return getOrCreate("P", null, null, "Access app features via top & side navigation options.") as HTMLElement;
}

function getUnsignedInUserInfo(): HTMLElement {
    const container = document.createElement("DIV");
    const list = document.createElement("UL");
    on(list).appendByGetters([
        () => newElem("LI", "Resource categories can be browsed freely;") as HTMLElement,
        () => newElem("LI", "Sign-in confirmation with a valid UBD webmail only required to loan resources.") as HTMLElement
    ])
    on(container).appendByGetters([
        () => newElem("P", "Notice:") as HTMLElement,
        () => list
    ])
    return container;
}