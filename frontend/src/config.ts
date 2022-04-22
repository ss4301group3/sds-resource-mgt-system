//Where clicking the navbar logo will redirect the user to
export const DEPARTMENT_NAME: string = "School of Digital Science";
export const HOMEPAGE_URL: string = "http://sds.ubd.edu.bn/";

//Default dom element to attach the app to;
export const APP_CONTAINER: HTMLElement = document.body;

export const DEFAULT_SIGN_IN: string = "loginPopup";

export const TIMEZONE_DIFF_GMT: number = +8;

//These will appear on the form
export const AGREEMENT_NOTE: string = "By submitting this form, I understand that the following as my responsibility:"
export const AGREEMENT_TERMS: string[] = [
    "1. To pick up and return the Equipment at the end of my loan period unless agreed by both parties",
    "2. To inspect the equipment at check out",
    "3. Do not chnage the settings in the computer",
    "4. Report problems experienced during the loan to the technician or supervisor",
    "5. I am not allowed to repair without reporting the problems to the technician or supervisor",
    "6. Pay repair or replacement costs for damages/loss",
    "7. Sign out/turn off syncing for personal account in email, browsers and social media and collect all data and documents befroe returning",
    "8. Failure to comply with these borrowing policies and procedures may result in loss of privilege"
]

//Do not change the role names; These are set up on Azure. Change there first in case these need to be changed
export const ROLE_NAMES: Array<string> = ["responderA", "responderB", "appAdmin"];
export const ROLE_DESCRIPTIONS: {[key:string]: string} = {
    "responderA": "Responder A: Able to respond to a loan request after Supervisor's agreement (if borrower a student)",
    "responderB": "Responder B: Second & final responder to loan requests (after first responder's approval)",
    "appAdmin": "App Admin: Able to make changes to app and/or resources configurations"
}