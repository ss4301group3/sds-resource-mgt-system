import { ElemGetter, getOrCreate, ifClicked, ifEmpty } from "../../utils/html";
import "../../../stylesheets/components/pages/FrontPage.scss"

let openFormAction: Function = () => {};
let adminSignInAction: Function = () => {};

export class FrontPage {
    static init(): void {}
    static hideAdminRoute(): void {
        getSeparator().style.display = "none"
        getAdminButton().style.display = "none"
        getLoanButton().style.marginLeft = "0px";
        getLoanButton().style.top = "0px";
    }
    
    static setActionForAdminButton(fn: Function) { adminSignInAction = fn; }
    static setActionForLoanButton(fn: Function) { openFormAction = fn; }

    static deactivate() {
        this.get().classList.add("page-inactive");
    }

    static get(): HTMLDivElement {
        const boxContainer = getOrCreate("DIV", "AppButtonBoxContainer", "dropnav-effectee page-inactive") as HTMLDivElement;
    
        ifEmpty(boxContainer).appendByGetters([getButtonBox]);
        
        return boxContainer;
    }
}

function getButtonBox(): HTMLDivElement {
    const buttonBox = getOrCreate("DIV", "AppButtonBox") as HTMLDivElement;
    
    ifEmpty(buttonBox).appendByGetters([
        getAdminButton,
        getSeparator,
        getLoanButton
    ]);

    return buttonBox;
}

function getAdminButton(): HTMLButtonElement {
    const adminButton = getOrCreate("BUTTON", "AppFrontNavAdmin", null, "ADMIN") as HTMLButtonElement;

    ifClicked(adminButton).trigger(() => adminSignInAction() as EventListener);

    return adminButton;
}

function getSeparator(): HTMLDivElement {
    return getOrCreate("DIV", "AppButtonBoxSeparator") as HTMLDivElement;
}

function getLoanButton(): HTMLButtonElement {
    const loanButton = getOrCreate("BUTTON", "AppFrontNavLoan", null, "LOAN RESOURCES") as HTMLButtonElement;

    ifClicked(loanButton).trigger(() => openFormAction() as EventListener);

    return loanButton;
}