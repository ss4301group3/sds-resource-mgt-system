import { BasicPage, BasicPageContainer, DropPageContainer, Page } from "../abstractions/pages";
import { noSpaces } from "../utils/strings";
import { Dropnav } from "../components/App/Dropnav";
import { Loader } from "../components/App/Loader";
import { Navbar } from "../components/App/Navbar";
import { signIn } from "./Auth";
import { FrontPage } from "./Pages/FrontPage";
import { HomePage } from "./Pages/HomePage";
import { LoanPage } from "./Pages/LoanPage";
import { ResourcesPage } from "./Pages/ResourcesPage";

const basicPages = new BasicPageContainer;
const dropPages = new DropPageContainer;

const pages: {[key:string]: Page} = { };

let currentPage: string = "Front Page";

export class Pages {
    static init(): void {
        initializePages();
        initializeLinks();
    }

    static refresh(): void {
        this.display(currentPage);
    }
    static display(pageidentifier: string): void {
        const pageKey = noSpaces(currentPage = pageidentifier);

        if(typeof pages[pageKey] === typeof BasicPage)
            Navbar.setCurrent(pageKey);

        pages[pageKey].display();
    }
}

function initializePages(): void {
    FrontPage.init(); pages.FrontPage = dropPages.addPage(FrontPage.get);
    LoanPage.init(); pages.LoanPage = dropPages.addPage(LoanPage.get);
    pages.HomePage = basicPages.addPage(HomePage.getContent, HomePage.getTitle, HomePage.getRemarks);
    pages.Resources = basicPages.addPage(ResourcesPage.getContent, ResourcesPage.getTitle, ResourcesPage.getRemarks);
}

function initializeLinks(): void {
    FrontPage.setActionForLoanButton(() => { pages.LoanPage.display(); Loader.hide(); });
    FrontPage.setActionForAdminButton(() => { signIn("adminButton") });

    LoanPage.setActionForCloseButton(() => { pages.FrontPage.display(); Loader.display(); });
}