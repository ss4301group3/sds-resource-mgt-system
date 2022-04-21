import { BasicPage, BasicPageContainer, DropPageContainer, Page } from "../abstractions/pages";
import { noSpaces } from "../utils/strings";
import { Loader } from "../components/App/Loader";
import { Navbar } from "../components/App/Navbar";
import { signIn } from "./Auth";
import { FrontPage } from "./Pages/FrontPage";
import { HomePage } from "./Pages/HomePage";
import { FormPage } from "./Pages/FormPage";
import { ResourcesPage } from "./Pages/ResourcesPage";
import { AppUser } from "./App";
import { Dto } from "../abstractions/dto";
import { ReservationsPage } from "./Pages/ReservationsPage";

const basicPages = new BasicPageContainer;
const dropPages = new DropPageContainer;

const pages: {[key:string]: Page} = { };

let currentMainPage: string = "Front Page";

export class Pages {
    static init(): void {
        initializePages();
        initializeLinks();
    }

    static refresh(): void {
        this.display(currentMainPage);
    }

    static displayRecent(pageidentifier: string) {
        const pageKey = noSpaces(currentMainPage = pageidentifier);

        if(typeof pages[pageKey] === typeof BasicPage)
            Navbar.setCurrent(pageKey);

        pages[pageKey].displayRecent();
    }

    static displayPrevious() {
        this.displayRecent(currentMainPage);
    }

    static display(pageidentifier: string, dto?: Dto): void {
        const pageKey = noSpaces(currentMainPage = pageidentifier);
        if(typeof pages[pageKey] === typeof BasicPage)
            Navbar.setCurrent(pageKey);

        pages[pageKey].display(dto);
    }
    static cleanNavs(): void {
        if(!AppUser.hasAnyPrivilege()) {
            Navbar.hideNavFor("Home Page");
            FrontPage.hideAdminRoute();
        }
        Navbar.addNavLink("Form Page", () => { pages.FormPage.display(); Loader.hide(); });
        FrontPage.setActionForAdminButton(() => Pages.display("Home Page"));
    }
}
function initializePages(): void {
    FrontPage.init(); pages.FrontPage = dropPages.addPage(FrontPage.get);
    FormPage.init(); pages.FormPage = dropPages.addPage(FormPage.get);
    pages.HomePage = basicPages.addPage(HomePage.getContent, HomePage.getTitle, HomePage.getRemarks, HomePage.setupSidenav);
    pages.Resources = basicPages.addPage(ResourcesPage.getContent, ResourcesPage.getTitle, ResourcesPage.getRemarks, ResourcesPage.setupSidenav);
    pages.Reservations = basicPages.addPage(ReservationsPage.getContent, ReservationsPage.getTitle, ReservationsPage.getRemarks, ReservationsPage.setupSidenav);
}

function initializeLinks(): void {
    FrontPage.setActionForLoanButton(() => { pages.FormPage.display(); Loader.hide(); });
    FrontPage.setActionForAdminButton(() => { signIn("adminButton") });

    FormPage.setActionForCloseButton(() => { pages.FrontPage.display(); Loader.display(); });
    Navbar.addNavLink("Form Page", () => { pages.FormPage.display(); Loader.hide(); });
}