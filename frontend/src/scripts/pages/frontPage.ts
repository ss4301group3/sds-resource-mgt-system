import { makeButtonWithId, makeDivWithId, makeDivWithIdAndClass } from "../utils/html";
import { haveDropnavEffect, hideDropnav } from "../app/dropnav";

import "../../stylesheets/components/pages/frontPage.scss";
import { pages } from "../utils/pages";
import { signIn } from "../utils/auth";
import { hideLoader } from "../app/loader";

export function getFrontPage(): HTMLDivElement {

    let boxContainer: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppButtonBoxContainer");

    if(!boxContainer) {
        boxContainer = makeDivWithIdAndClass("AppButtonBoxContainer", "page-inactive");
        boxContainer.appendChild(getButtonBox());
        haveDropnavEffect(boxContainer);
    }

    return boxContainer;
}

function getButtonBox(): HTMLDivElement {
    let buttonBox: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppButtonBox");
    
    if(!buttonBox) {
        buttonBox = makeDivWithId("AppButtonBox");
        buttonBox.appendChild(getAdminButton());
        buttonBox.appendChild(getSeparator());
        buttonBox.appendChild(getLoanButton());
    }

    return buttonBox;
}

function getAdminButton(): HTMLButtonElement {
    let adminButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppFrontNavAdmin");

    if(!adminButton) {
        adminButton = makeButtonWithId("AppFrontNavAdmin");
        adminButton.innerText = "ADMIN";
        adminButton.addEventListener("click", () => {
            if(signIn("loginPopup")) {
                hideDropnav();
                hideLoader();
            }
        }, {capture:false})
    }

    return adminButton;
}

function getSeparator(): HTMLDivElement {
    let separator: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppButtonBoxSeparator");
    
    if(!separator) {
        separator = makeDivWithId("AppButtonBoxSeparator");
    }

    return separator;
}

function getLoanButton(): HTMLButtonElement {
    let loanButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppFrontNavLoan");

    if(!loanButton) {
        loanButton = makeButtonWithId("AppFrontNavLoan");}
        loanButton.innerText = "LOAN RESOURCES";
        loanButton.addEventListener("click", () => {
            hideLoader();
            pages.loanForm.show();
        }, {capture:false})

    return loanButton;
}