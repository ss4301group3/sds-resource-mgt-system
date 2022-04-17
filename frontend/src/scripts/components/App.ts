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

export let AppUser: User;

export class App {
    static init() {
        APP_CONTAINER.appendChild(getAppElem());

        Loader.init();
        Navbar.init();
        Dropnav.init();
    }

    static handleSignedInUser(account: AccountInfo): void {
        AppUser = new User(account);

        Loader.clearThenHide(false);
        Loader.display(`Welcome, ${account.name}`, 3000);
        Loader.appendSignOutButtonWithUsername(account.username);

        Pages.display("Home Page");

        Navbar.setAuthButtonAction(`Sign Out (${AppUser.getEmail()})`, false, true);
    }
    static handleNoSignedInUser(): void {
        Loader.clearThenHide(true);
        Loader.display("No account signed-in", 2000);

        Pages.display("Front Page"); console.log("nsi")

        Navbar.setAuthButtonAction("Sign In", true, true);
    }
    static handleSigningIn(): void {
        Loader.clearThenHide(true);
        Loader.display("Signing-in", 60000);

        Navbar.setAuthButtonAction("Signing In", true, false);
    }
    static handleCancelSignIn(message?: string): void {
        Loader.clearThenHide(true);
        Loader.display(message, 2000);

        Pages.display("Front Page"); console.log("csi")

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