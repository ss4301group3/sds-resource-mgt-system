import { makeButtonWithId, makeDivWithId } from "../../utils/html";

export function getFrontPage(): HTMLDivElement {
    let buttonBox: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppButtonBox");
    
    if(!buttonBox) {
        buttonBox = makeDivWithId("AppButtonBox");
        buttonBox.appendChild(getAdminButton());
        buttonBox.appendChild(getLoanButton());
    }

    return buttonBox;
}

function getAdminButton(): HTMLButtonElement {
    let adminButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppFrontNavAdmin");

    if(!adminButton) {
        adminButton = makeButtonWithId("AppFrontNavAdmin");
        adminButton.innerText = "Admin";
    }

    return adminButton;
}

function getLoanButton(): HTMLButtonElement {
    let loanButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#AppFrontNavLoan");

    if(!loanButton) {
        loanButton = makeButtonWithId("AppFrontNavLoan");}
        loanButton.innerText = "Loan Resources";

    return loanButton;
}