import { AccountInfo } from "@azure/msal-browser";
import { ROLE_DESCRIPTIONS } from "../../../config";
import { ElemGetter, getOrCreate, on } from "../../utils/html";
import { App, AppUser } from "../App";

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
        return "";
    }
}

function getContent(): Array<ElemGetter> {
    const getters: Array<ElemGetter> = [
        getWelcomeMessage,
        getRolesHeading,
        getRolesInfo,
        getNavigationInstructions
    ];

    if(!AppUser.hasAnyPrivilege())
        return getters.filter(notRolesRelated);

    return getters;

    function notRolesRelated(getter: ElemGetter) {
        return getter != getRolesHeading && getter != getRolesInfo;
    }
};

function getWelcomeMessage(): HTMLElement {
    return getOrCreate("H3", null, null, `Welcome, ${AppUser.getName()}`) as HTMLElement;
}

function getRolesHeading(): HTMLElement {
    return getOrCreate("H4", null, null, "These roles are assigned to your account:");
}

function getRolesInfo(): HTMLElement {
        const rolesList = getOrCreate("UL");
        
        Object.entries(ROLE_DESCRIPTIONS).forEach(([key, value]) =>{
            if(AppUser.getRoles().includes(key))
                rolesList.appendChild(getOrCreate("LI", null, null, value));
        });

        return rolesList
}

function getNavigationInstructions(): HTMLElement {
    return getOrCreate("P", null, null, "Access app features via top & side navigation options.") as HTMLElement;
}