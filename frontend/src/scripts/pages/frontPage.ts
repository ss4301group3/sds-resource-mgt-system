import { makeButtonWithId, makeDivWithId } from "../utils/html";

import "../../stylesheets/components/pages/frontPage.scss";
import { haveDropnavEffect } from "../app/dropnav";

export function getFrontPage(): HTMLDivElement {
    let buttonBox: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppButtonBox");
    
    if(!buttonBox) {
        buttonBox = makeDivWithId("AppButtonBox");
        buttonBox.appendChild(getAdminButton());
        buttonBox.appendChild(getSeparator());
        buttonBox.appendChild(getLoanButton());
        haveDropnavEffect(buttonBox);
    }

    return buttonBox;
}

function getAdminButton(): HTMLButtonElement {
    let adminButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppFrontNavAdmin");

    if(!adminButton) {
        adminButton = makeButtonWithId("AppFrontNavAdmin");
        adminButton.innerText = "ADMIN";
        haveDropnavEffect(adminButton);
    }

    return adminButton;
}

function getSeparator(): HTMLDivElement {
    let separator: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppButtonBoxSeparator");
    
    if(!separator) {
        separator = makeDivWithId("AppButtonBoxSeparator");
        haveDropnavEffect(separator);
    }

    return separator;
}

function getLoanButton(): HTMLButtonElement {
    let loanButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppFrontNavLoan");

    if(!loanButton) {
        loanButton = makeButtonWithId("AppFrontNavLoan");}
        loanButton.innerText = "LOAN RESOURCES";
        haveDropnavEffect(loanButton);

    return loanButton;
}