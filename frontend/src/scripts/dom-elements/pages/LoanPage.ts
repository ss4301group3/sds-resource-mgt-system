
import { AGREEMENT_NOTE, AGREEMENT_TERMS, DEPARTMENT_NAME } from "../../../config";
import { DivContainingItemsList, LoanBoxItemsList } from "../../abstractions/LoanForm";
import { getOrCreate, ifClicked, ifEmpty } from "../../utils/html";
import { noSpaces } from "../../utils/strings";

import "../../../stylesheets/components/pages/LoanPage.scss";

let closeForm: Function = () => {};
let submitForm: Function = () => {};

export class LoanPage {

    static get(): HTMLDivElement {
        const boxContainer = getOrCreate("DIV", "AppLoanBoxContainer", "dropnav-effectee page-inactive") as HTMLDivElement;
    
        ifEmpty(boxContainer).appendByGetters([getLoanForm]);
    
        return boxContainer;
    }
    
    static setActionForCloseButton(fn: Function) { closeForm = fn; }
    static setActionForSubmitButton(fn: Function) { submitForm = fn; }
}

export function setBorrowerName(name: string) {
    (<HTMLInputElement>getOrCreate("INPUT", "LoanBoxBorrowerNameInput")).disabled = true;
    (<HTMLInputElement>getOrCreate("INPUT", "LoanBoxBorrowerNameInput")).value = name;
}
export function setBorrowerEmail(email: string) {
    (<HTMLInputElement>getOrCreate("INPUT", "LoanBoxEmailInput")).disabled = true;
    (<HTMLInputElement>getOrCreate("INPUT", "LoanBoxEmailInput")).value = email;
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

    return closeBtn;
}
function getCloseBtnIcon(): HTMLElement {
    const icon = getOrCreate("I", "LoanBoxCloseBtnIcon", "material-icons icon", "close") as HTMLElement;
    
    ifClicked(icon).trigger(() => closeForm() as EventListener);

    return icon;
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
        const itemsData = {
            "0": "Laptop",
            "1": "Computer"
        }

        const itemsList: LoanBoxItemsList = new LoanBoxItemsList("LoanBoxItemsList", itemsData);
        listDiv = itemsList.initAndGetOwnElem();
    }

    return listDiv;
}

function getAddItemButton(): HTMLButtonElement {
    const button = getOrCreate("BUTTON", "LoanBoxItemsListAddItem", "addMore", null, null, "button") as HTMLButtonElement;
    
    ifEmpty(button).appendByGetters([getAddItemIcon]);

    return button;
}

function getAddItemIcon(): HTMLElement {
    const icon = getOrCreate("I", "LoanBoxItemsListAddItemIcon", "material-icons", "add") as HTMLElement;
    
    ifClicked(icon).trigger(() => getItemsList().itemsList.addItem());

    return icon;
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