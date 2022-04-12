import { ROLE_DESCRIPTIONS } from "../../config";
import { addPageContent, clearPageContent, setPageRemarks, setPageTitle } from "../app/mainContainer";
import { addNavbarLink, clearNavbarNavs } from "../app/navbar";
import { User } from "../user";
import { makeLiWithText, makePWithText } from "../utils/html";
import { pages } from "../utils/pages";

export function renderAdminHomePage(currentUser: User): void {
    console.error("Show admin page called [NOT ERROR: I just need info of situations in which the calls are made]");
    setNavbarFor(currentUser);
    setPageTitle("Admin Homepage");
    setPageRemarks(`You have ${currentUser.getRoles().length} privileged roles`);

    let pageContent: HTMLUListElement = document.createElement("ul");
    Object.entries(ROLE_DESCRIPTIONS).forEach(([key, value]) =>{
        if(currentUser.getRoles().includes(key))
            pageContent.appendChild(makeLiWithText(value));
    });

    clearPageContent()
    addPageContent(pageContent);
    addPageContent(makePWithText("Please use the navigation bar or side-navigation to access app features"));
}

function setNavbarFor(user: User): void {
    clearNavbarNavs();
    addNavbarLink("Form (just testing)", pages.loanForm.show);
}