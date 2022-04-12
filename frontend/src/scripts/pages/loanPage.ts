import { AGREEMENT_TERMS, DEPARTMENT_NAME } from "../../config";
import { haveDropnavEffect } from "../app/dropnav";
import { makeButtonWithClass, makeButtonWithId, makeButtonWithIdAndClass, makeButtonWithTypeAndIdAndClass, makeButtonWithTypeAndIdAndClassAndText, makeDivWithId, makeDivWithIdAndClass, makeH2WithIdAndText, makeH3WithIdAndText, makeH3WithText, makeInputWithIdAndTypeAndNameAndRequired, makeInputWithTypeAndNameAndRequired, makeIWithIdAndClassAndText, makeLabelWithIdAndText, makeOptionWithValueAndText, makePWithText, makeSelectWithIdAndName } from "../utils/html";

import "../../stylesheets/components/pages/loanPage.scss";
import { pages } from "../utils/pages";
import { unhideLoader } from "../app/loader";

export function setBorrowerName(name: string) {
    (<HTMLInputElement>document.querySelector("#LoanBoxBorrowerNameInput")).disabled = true;
    (<HTMLInputElement>document.querySelector("#LoanBoxBorrowerNameInput")).value = name;
}
export function setBorrowerEmail(email: string) {
    (<HTMLInputElement>document.querySelector("#LoanBoxEmailInput")).disabled = true;
    (<HTMLInputElement>document.querySelector("#LoanBoxEmailInput")).value = email;
}

export function getLoanPage(): HTMLDivElement {
    let boxContainer: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppLoanBoxContainer");

    if(!boxContainer) {
        boxContainer = makeDivWithIdAndClass("AppLoanBoxContainer", "page-inactive");
        boxContainer.appendChild(getLoanForm());
        haveDropnavEffect(boxContainer);
    }
    return boxContainer;
}
function getLoanForm(): HTMLDivElement {
    let loanBox: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppLoanBox");
    
    if(!loanBox) loanBox = makeDivWithId("AppLoanBox");

    loanBox.appendChild(getCloseBtn());

    loanBox.appendChild(getDeptHeading());
    loanBox.appendChild(getFormHeading());
    
    loanBox.appendChild(getBorrowerNameBox());
    loanBox.appendChild(getSuperNameBox());
    loanBox.appendChild(getBorrowerMailBox());
    loanBox.appendChild(getStartDateBox());
    loanBox.appendChild(getEndDateBox());

    loanBox.appendChild(getItemsListBox());

    loanBox.appendChild(getAgreementListBox());

    loanBox.appendChild(getSubmitButton());

    return loanBox;
}

function getCloseBtn(): HTMLButtonElement {
    let closeBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#LoanBoxCloseBtn");
    
    if(!closeBtn) closeBtn = makeButtonWithIdAndClass("LoanBoxCloneBtn","btn");
    closeBtn.append(getCloseBtnIcon());

    return closeBtn;
}
function getCloseBtnIcon(): HTMLElement {
    let icon: HTMLElement = <HTMLElement> document.querySelector("#LoanBoxCloseBtnIcon");

    if(!icon) icon = makeIWithIdAndClassAndText("LoanBoxCloseBtnIcon", "material-icons icon", "close");
    
    icon.addEventListener("click", () => {
        pages.frontPage.show();
        unhideLoader();
    }, {capture: true});

    return icon;
}

function getDeptHeading(): HTMLHeadElement {
    let deptHeading: HTMLHeadingElement = <HTMLHeadingElement> document.querySelector("#LoanBoxDeptHeading");

    if(!deptHeading) deptHeading = makeH2WithIdAndText("LoanBoxDeptHeading", DEPARTMENT_NAME);

    return deptHeading;
}
function getFormHeading(): HTMLHeadElement {
    let formHeading: HTMLHeadingElement = <HTMLHeadingElement> document.querySelector("#LoanBoxformHeading");

    if(!formHeading) formHeading = makeH2WithIdAndText("LoanBoxformHeading", "Agreement to Borrow Equipment Release of Liability");

    return formHeading;
}

function getBorrowerNameBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#LoanBoxBorrowerName");

    if(!box) box = makeDivWithIdAndClass("LoanBoxBorrowerName", "user-box");

    box.appendChild(getInputWithIdAndTypeAndNameAndRequired("LoanBoxBorrowerNameInput", "text", "", true));
    box.appendChild(getLabelWithIdAndText("LoanBoxBorrowerNameLabel", "Borrower Name"));

    return box;
}
function getSuperNameBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#LoanBoxSuperName");

    if(!box) box = makeDivWithIdAndClass("LoanBoxSuperName", "user-box");

    box.appendChild(getInputWithIdAndTypeAndNameAndRequired("LoanBoxSuperNameInput", "text", "", true));
    box.appendChild(getLabelWithIdAndText("LoanBoxSuperNameLabel", "Supervisor Name"));

    return box;
}
function getBorrowerMailBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#LoanBoxEmail");

    if(!box) box = makeDivWithIdAndClass("LoanBoxEmail", "user-box");

    box.appendChild(getInputWithIdAndTypeAndNameAndRequired("LoanBoxEmailInput", "email", "", true));
    box.appendChild(getLabelWithIdAndText("LoanBoxEmailLabel", "Email"));

    return box;
}
function getStartDateBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#LoanBoxStartDate");

    if(!box) box = makeDivWithIdAndClass("LoanBoxStartDate", "date-box");

    box.appendChild(getLabelWithIdAndText("LoanBoxStartDateLabel", "Start Date"));
    box.appendChild(getInputWithIdAndTypeAndNameAndRequired("LoanBoxStartDateInput", "date", "start_date", true));

    return box;
}
function getEndDateBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#LoanBoxEndDate");

    if(!box) box = makeDivWithIdAndClass("LoanBoxEndDate", "date-box");

    box.appendChild(getLabelWithIdAndText("LoanBoxEndDateLabel", "End Date"));
    box.appendChild(getInputWithIdAndTypeAndNameAndRequired("LoanBoxEndDateInput", "date", "end_date", true));

    return box;
}

function getInputWithIdAndTypeAndNameAndRequired(id: string, type: string, name: string, required: boolean): HTMLInputElement {
    let input = <HTMLInputElement> document.querySelector(`#${id}`);

    if(!input) input = makeInputWithIdAndTypeAndNameAndRequired(id, type, name, required);

    return input;
}
function getLabelWithIdAndText(id: string, innerHTML: string): HTMLLabelElement {
    let label = <HTMLLabelElement> document.querySelector(`#${id}`);

    if(!label) label = makeLabelWithIdAndText(id, innerHTML);

    return label;
}

function getItemsListBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#LoanBoxItemsListBox");

    if(!box) box = makeDivWithIdAndClass("LoanBoxItemsListBox", "select-box");

    box.appendChild(getItemsListHeading());
    box.appendChild(getItemsList());
    box.appendChild(getAddItemButton());

    return box;
}

function getItemsListHeading(): HTMLHeadingElement {
    let heading = <HTMLHeadingElement> document.querySelector("#LoanBoxItemsHeading");

    if(!heading) heading = makeH3WithIdAndText("LoanBoxItemsHeading", "List of Item(s) borrowed:")

    return heading;
}

class LoanBoxItem{
    elem: HTMLDivElement;
    select: HTMLSelectElement;
    input: HTMLInputElement;
    constructor(itemsData: {[key:string]: string}) {
        this.elem = document.createElement("div");
        this.select = document.createElement("select");
        this.input = makeInputWithTypeAndNameAndRequired("number", "", true);
        
        this.select.appendChild(makeOptionWithValueAndText("", ">--Select an item--<"));
        Object.entries(itemsData).forEach(([key, value]) => {
            this.select.appendChild(makeOptionWithValueAndText(key, value));
        });

        this.elem.appendChild(this.select);
        this.elem.appendChild(this.input);
    }
}

class DivContainingItemsList extends HTMLDivElement {
    itemsList: LoanBoxItemsList;
}

class LoanBoxItemsList{
    id: string;
    getElem(): DivContainingItemsList {
        return <DivContainingItemsList> document.querySelector(`#${this.id}`);
    }
    itemsData: {[key:string]: string};
    items: Array<LoanBoxItem>

    constructor(id: string, itemsData: {[key:string]: string}) {
        this.id = id;
        this.itemsData = itemsData;
        this.items = new Array<LoanBoxItem>();
    }

    createElem(): DivContainingItemsList {
        let elem = Object.assign(document.createElement("div"), {
            id: this.id,
            itemsList: this
        })
        return elem;
    }

    addItem(): void {
        const item = new LoanBoxItem(this.itemsData);
        this.items.push(item);
        this.getElem().appendChild(item.elem);
    }
}

export function getItemsList(): DivContainingItemsList {
    let listDiv = <DivContainingItemsList> document.querySelector("#LoanBoxItemsList");

    if(!listDiv) {
        const itemsData = {
            "0": "Laptop",
            "1": "Computer"
        }

        const itemsList: LoanBoxItemsList = new LoanBoxItemsList("LoanBoxItemsList", itemsData);
        listDiv = itemsList.createElem();
    }

    return listDiv;
}

function getAddItemButton(): HTMLButtonElement {
    let button = <HTMLButtonElement> document.querySelector("#LoanBoxItemsListAddItem");

    if(!button) button = makeButtonWithTypeAndIdAndClass("button", "LoanBoxItemsListAddItem", "addMore");

    button.appendChild(getAddItemIcon());

    return button;
}
function getAddItemIcon(): HTMLElement {
    let icon = <HTMLElement> document.querySelector("#LoanBoxItemsListAddItemIcon");

    if(!icon) icon = makeIWithIdAndClassAndText("LoanBoxItemsListAddItemIcon","material-icons","add");
    
    icon.addEventListener("click", () => {
        getItemsList().itemsList.addItem();
    }, {capture: true});

    return icon;
}

function getAgreementListBox(): HTMLDivElement {
    let box = <HTMLDivElement> document.querySelector("#Agreement");

    if(!box) {
        box = makeDivWithId("Agreement");
        
        box.appendChild(makeH3WithText("By submitting this form, I understand that the following as my responsibility:"));

        for (let i = 0; i < AGREEMENT_TERMS.length; i++)
            box.appendChild(makePWithText(AGREEMENT_TERMS[i]));
    }

    return box;
}

function getSubmitButton(): HTMLButtonElement {
    let button = <HTMLButtonElement> document.querySelector('#LoanBoxSubmitBtn');

    if(!button) button = makeButtonWithTypeAndIdAndClassAndText("submit", "LoanBoxSubmitBtn", "submit-btn", "SUBMIT");

    return button;
}
/*

    loanBox.appendChild(getSubmitBtn());
</div>
<div>
    <button class="submit-btn" type="submit">Submit</button>
</div>
    `;
*/