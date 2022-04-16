import { APP_CONTAINER } from "../../config";
import { getOrCreate, on } from "../utils/html";
import { Dropnav } from "./App/Dropnav";
import { Loader } from "./App/Loader";
import { Navbar} from "./App/Navbar";
import "../../stylesheets/components/App.scss";
import { Sidenav } from "./App/Sidenav";
import { MainContainer } from "./App/MainContainer";

export class App {
    static init() {
        APP_CONTAINER.appendChild(getAppElem());

        Loader.init();
        Navbar.init();
        Dropnav.init();
    }
    static handleSignedInUser(account: any): void {
        console.log("Welcome", account);
        //Handle on both the frontpage (welcome & append signout)
        //as well as maincontentpage (welcome)
        //also according to privilege granted
    }
    static handleSigningIn(): void {}
    static handleCancelSignIn(message?: string): void {}
    static handleSignOut(): void {}
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