import { APP_CONTAINER } from "../../config";
import { getOrCreate, on } from "../utils/html";
import { Dropnav } from "./App/Dropnav";
import { Loader } from "./App/Loader";
import { Navbar} from "./App/Navbar";
import "../../stylesheets/components/App.scss";
import { Sidenav } from "./App/Sidenav";
import { MainContainer } from "./App/MainContainer";
import { AccountInfo } from "@azure/msal-browser";
import { User } from "../abstractions/appUser";
import { Pages } from "./Pages";
import { FrontPage } from "./Pages/FrontPage";
import { FormPage } from "./Pages/FormPage";

export let AppUser: User;

export class App {
    static init() {
        APP_CONTAINER.appendChild(getAppElem());

        Loader.init();
        Navbar.init();
        Dropnav.init();
    }

    static handleSignedInUser(account: AccountInfo): void {
        AppUser = new User(account); const displayName = AppUser.getName();

        Loader.clearThenHide(false);
        Loader.display(`Welcome, ${account.name}`, 3000);
        Loader.appendSignOutButtonWithUsername(account.username);

        if(AppUser.hasAnyPrivilege()) Pages.display("Home Page");

        Pages.cleanNavs();
        Pages.refresh();

        FormPage.setBorrowerEmail(AppUser.getEmail());
        if(displayName) FormPage.setBorrowerName(displayName);

        Navbar.setAuthButtonAction(`Sign Out<span class="user-email"> (${AppUser.getEmail()})</span>`, false, true);
    }
    static handleNoSignedInUser(): void {
        Loader.clearThenHide(true);
        Loader.display("No account signed-in", 1500);
        Pages.refresh();

        Navbar.setAuthButtonAction("Sign In", true, true);
    }
    static handleSigningIn(): void {
        Loader.clearThenHide(true);
        Loader.display("Signing-in", 3600000);
        FrontPage.deactivate();

        Navbar.setAuthButtonAction("Signing In", true, false);
    }
    static handleCancelSignIn(message?: string): void {
        Loader.clearThenHide(true);
        Loader.display(message, 1500);
        Pages.refresh();

        Navbar.setAuthButtonAction("Sign In", true, true);
    }
    static handleSignOut(): void {
        Navbar.setAuthButtonAction("Signing Out", false, true);
    }
}

function getAppElem(): HTMLDivElement {
    const app = getOrCreate("DIV", "App");

    on(app).appendByGetters([
        Navbar.getFiller,
        Dropnav.getBackground,
        Dropnav.get,
        Navbar.get,

        Sidenav.get,
        Sidenav.getToggle,

        MainContainer.get
    ]);

    return app as HTMLDivElement;
}