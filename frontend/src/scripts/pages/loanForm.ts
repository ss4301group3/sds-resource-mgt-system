import { DEPARTMENT_NAME } from "../../config";
import { haveDropnavEffect } from "../app/dropnav";
import { makeButtonWithClass, makeButtonWithId, makeDivWithId, makeDivWithIdAndClass, makeH2WithText } from "../utils/html";

export function getLoanForm(): HTMLDivElement {
    let loanBox: HTMLDivElement = <HTMLDivElement> document.querySelector("#AppLoanBox");
    
    if(!loanBox) {
        loanBox = makeDivWithId("AppLoanBox");
        loanBox.innerHTML = `
<button class="btn" onclick="closeForm()"><i class="material-icons icon">
    close
</i></button>
<h2>School of DIgital Science</h2>
<h2>Agreement to Borrow Equipment Release of Liability</h2>
<div class="user-box">
    <input type="text" name="" required="">
    <label>Student Name</label>
</div>
<div class="user-box">
    <input type="text" name="" required="">
    <label>Supervisor Name</label>
</div>
<div class="user-box">
    <input type="email" name="" required="">
    <label>Email</label>
</div>
<div class="date-box">
    <label>Start Date</label>
    <input type="date" name="start_date" required="">
</div>
<div class ="date-box">
    <label>End Date</label>
    <input type="date" name="end_date"  required="">
</div>
<div class="select-box">
    <h3>List of Item(s) borrowed:</h3>
    <select id="items" name="select_items">
        <option value="">--Select an Item--</option>
        <option value="laptop">Laptop</option>
        <option value="computer">Computer</option>
    </select>
    <input type="number" name="" required>
    <button type="button" class="addMore"><i class="material-icons">add</i></button>
</div>
<div class="user-box">
    <div class="agreement">
        <h3>By submitting this form, I understand that the following as my responsibility:
        </h3>
        <p>1. To pick up and return the Equipment at the end of my loan period unless agreed by both parties</p>
        <p>2. To inspect the equipment at check out</p>
        <p>3. Do not chnage the settings in the computer</p>
        <p>4. Report problems experienced during the loan to the technician or supervisor</p>
        <p>5. I am not allowed to repair without reporting the problems to the technician or supervisor</p>
        <p>6. Pay repair or replacement costs for damages/loss</p>
        <p>7. Sign out/turn off syncing for personal account in email, browsers and social media and collect all data and documents befroe returning</p>
        <p>8. Failure to comply with these borrowing policies and procedures may result in loss of privilege</p>
    </div>
</div>
<div>
    <button class="submit-btn" type="submit">Submit</button>
</div>
        `;
        haveDropnavEffect(loanBox);
    }

    return loanBox;
}

function getCloseBtn(): HTMLButtonElement {
    let closeBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#LoanBoxCloseBtn");
    
    if(!closeBtn) {
        closeBtn = makeButtonWithClass("close-btn"); 
        closeBtn.innerHTML = '<i class="material-icons icon">close</i>';
    }

    return closeBtn;
}

function getDepartmentHeader(): HTMLHeadElement {
    return makeH2WithText(DEPARTMENT_NAME);
}
function getFormHeader(): HTMLHeadElement {
    return makeH2WithText("Agreement to Borrow Equipment Release of Liability");
}

//function getInputBoxFor(fieldName: string, boxType: string): HTMLDivElement {
//
//    let div = makeDivWithIdAndClass(fieldName.split(" ").join(""), boxType);
//}