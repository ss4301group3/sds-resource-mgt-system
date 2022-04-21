
import { AGREEMENT_NOTE, AGREEMENT_TERMS, DEPARTMENT_NAME } from "../../../config";
import { DivContainingItemsList, LoanBoxItemsList } from "../../abstractions/loanFormComponents";
import { getOrCreate, ifClicked, ifEmpty } from "../../utils/html";
import { noSpaces } from "../../utils/strings";

import "../../../stylesheets/components/pages/FormPage.scss";
import { Pages } from "../Pages";
import { Resource } from "../../abstractions/dto/Item";

let closeForm: Function = () => {};
let submitForm: Function = () => {};

let borrowerName: string | null = null;
let borrowerEmail: string | null = null;

let ItemsList: LoanBoxItemsList;

export class FormPage {
    static init(): void {
        if(borrowerName) this.setBorrowerName(borrowerName);
        if(borrowerEmail) this.setBorrowerEmail(borrowerEmail);
    }

    static get(): HTMLDivElement {
        const boxContainer = getOrCreate("DIV", "AppLoanBoxContainer", "dropnav-effectee page-inactive") as HTMLDivElement;
    
        ifEmpty(boxContainer).appendByGetters([getLoanForm]);
    
        return boxContainer;
    }
    
    static setActionForCloseButton(fn: Function) { closeForm = fn; }
    static setActionForSubmitButton(fn: Function) { submitForm = fn; }

    static setBorrowerName(name: string): void {
        borrowerName = name;

        const inputField = (<HTMLInputElement|null>document.getElementById("LoanBoxBorrowerNameInput"));

        if(inputField) {
            inputField.disabled = true;
            inputField.value = borrowerName;
        }
    }

    static setBorrowerEmail(email: string): void {
        borrowerEmail = email;

        const inputField = (<HTMLInputElement|null>document.getElementById("LoanBoxEmailInput"));

        if(inputField) {
            inputField.disabled = true;
            inputField.value = borrowerEmail;
        }
    }

    static addItem(resource: Resource, amount: number): void {
        ItemsList.addItem(resource, amount);
    }

    static peekItem(resource: Resource) {
        return ItemsList.peekItem(resource);
    }
}

function getLoanForm(): HTMLDivElement {
    const loanBox = getOrCreate("DIV", "AppLoanBox") as HTMLDivElement;
    
    ifEmpty(loanBox).appendByGetters([
        getCloseBtn,

        getDeptHeading, getFormHeading,
    
        getBorrowerNameBox, getSupervisorNameBox, getEmailBox,
        getStartDateBox, getEndDateBox,

        getItemsListBox,

        getAgreementListBox,

        getSubmitButton
    ]);

    return loanBox;
}

function getCloseBtn(): HTMLButtonElement {
    const closeBtn = getOrCreate("BUTTON", "LoanBoxCloneBtn", "btn") as HTMLButtonElement;
    
    ifEmpty(closeBtn).appendByGetters([getCloseBtnIcon]);
    
    ifClicked(closeBtn).trigger(() => closeForm() as EventListener);

    return closeBtn;
}
function getCloseBtnIcon(): HTMLElement {
    return getOrCreate("I", "LoanBoxCloseBtnIcon", "material-icons icon", "close") as HTMLElement;
}

function getDeptHeading(): HTMLHeadElement {
    return getOrCreate("H2","LoanBoxDeptHeading", null, DEPARTMENT_NAME) as HTMLHeadingElement;
}
function getFormHeading(): HTMLHeadElement {
    return getOrCreate("H2","LoanBoxformHeading", null, "Agreement to Borrow Equipment Release of Liability") as HTMLHeadingElement;
}

const getBorrowerNameBox =   (): HTMLDivElement => getInputBoxFor("Borrower Name").ofType("text");
const getSupervisorNameBox = (): HTMLDivElement => getInputBoxFor("Supervisor Name").ofType("text");
const getEmailBox =          (): HTMLDivElement => getInputBoxFor("Email").ofType("email");
const getStartDateBox =      (): HTMLDivElement => getInputBoxFor("Start date", "start_date").ofType("date", "date-box");
const getEndDateBox =        (): HTMLDivElement => getInputBoxFor("End date", "end_date").ofType("date", "date-box");

function getItemsListBox(): HTMLDivElement {
    const box = getOrCreate("DIV", "LoanBoxItemsListBox", "select-box") as HTMLDivElement;

    ifEmpty(box).appendByGetters([getItemsListHeading, getItemsList, getAddItemButton]);

    return box;
}

function getItemsListHeading(): HTMLHeadingElement {
    return getOrCreate("H3", "LoanBoxItemsHeading", null, "List of Item(s) borrowed:") as HTMLHeadingElement;
}

function getItemsList(): DivContainingItemsList {
    let listDiv = <DivContainingItemsList> document.querySelector("#LoanBoxItemsList");

    if(!listDiv) {

        const itemsList: LoanBoxItemsList = ItemsList = new LoanBoxItemsList("LoanBoxItemsList");
        listDiv = itemsList.initAndGetOwnElem();
    }

    return listDiv;
}

function getAddItemButton(): HTMLButtonElement {
    const button = getOrCreate("BUTTON", "LoanBoxItemsListAddItem", "addMore", null, null, "button") as HTMLButtonElement;
    
    ifEmpty(button).appendByGetters([getAddItemIcon]);
    
    ifClicked(button).trigger(() => Pages.displayRecent("Resources"));

    return button;
}

function getAddItemIcon(): HTMLElement {
    return getOrCreate("I", "LoanBoxItemsListAddItemIcon", "material-icons", "add") as HTMLElement;
}

function getAgreementListBox(): HTMLDivElement {
    const box: HTMLDivElement = getOrCreate("DIV", "Agreement") as HTMLDivElement;
    
    ifEmpty(box).appendByGetters(getAgreementText());

    return box;
}
function getAgreementText() {
    let terms: Array<() => HTMLElement> = [ () => getOrCreate("H3",null, null, AGREEMENT_NOTE) ];

    for (let i = 0; i < AGREEMENT_TERMS.length; i++)
        terms.push(() => getOrCreate("P",null, null, AGREEMENT_TERMS[i]));

    return terms;
}

function getSubmitButton(): HTMLButtonElement {
    return getOrCreate("BUTTON", "LoanBoxSubmitBtn", "submit-btn", "SUBMIT", null, "submit") as HTMLButtonElement;
}

function getInputInputFor(fieldName: string, nameProp?: string | null) {
    return { ofType:(type:string) => {
        return getOrCreate("INPUT", `LoanBox${noSpaces(fieldName)}Input`, null, null, null, type, nameProp, true);
    }}
}
function getInputLabelFor(fieldName: string) {
    return getOrCreate("LABEL", `LoanBox${noSpaces(fieldName)}Label`, null, fieldName);
}
function getInputBoxFor(fieldName: string, nameProp?: string) {
    return {
        ofType:(type: string, boxClass?: string) => {
            const box: HTMLDivElement = getOrCreate("DIV", `LoanBox${noSpaces(fieldName)}`, boxClass?boxClass:"user-box") as HTMLDivElement;
            const getters = [
                () => getInputInputFor(fieldName, nameProp ? nameProp :  null).ofType(type),
                () => getInputLabelFor(fieldName)
            ];
            if(type == "date") getters.reverse();
            ifEmpty(box).appendByGetters(getters);
            return box;
        }
    };
}