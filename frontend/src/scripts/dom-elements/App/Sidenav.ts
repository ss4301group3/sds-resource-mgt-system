import { getOrCreate } from "../../utils/html";
import "../../../stylesheets/components/App/Sidenav.scss";

export class Sidenav {
    static get(): HTMLDivElement {
        return getOrCreate("DIV", "AppSidenav") as HTMLDivElement;
    }
    
    static getToggle(): HTMLDivElement {
        return getOrCreate("DIV", "AppSidenavToggle", "dropnav-effectee dropnav-active", ">") as HTMLDivElement;
    }
}