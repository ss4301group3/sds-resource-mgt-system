import { BasicPageContainer, DropPageContainer, Page } from "../abstractions/pages";
import { Dropnav } from "./App/Dropnav";
import { Loader } from "./App/Loader";
import { signIn } from "./Auth";
import { FrontPage } from "./Pages/FrontPage";
import { LoanPage } from "./Pages/LoanPage";

const basicPages = new BasicPageContainer;
const dropPages = new DropPageContainer;

const pages: {[key:string]: Page} = { };

export class Pages {
    static init(): void {
        initializePages();
        initializeLinks();

        pages.frontPage.display();
    }
}

function initializePages(): void {
    FrontPage.init(); pages.frontPage = dropPages.addPage(FrontPage.get);
    LoanPage.init(); pages.loanPage = dropPages.addPage(LoanPage.get);
}

function initializeLinks(): void {
    FrontPage.setActionForLoanButton(() => { pages.loanPage.display(); Loader.hide(); });
    FrontPage.setActionForAdminButton(() => { signIn("adminSignin") });


    LoanPage.setActionForCloseButton(() => { pages.frontPage.display(); Loader.display(); });
}