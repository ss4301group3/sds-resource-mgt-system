import Logo from '../../../assets/logo.png'
import { DEPARTMENT_NAME, HOMEPAGE_URL } from '../../../config';
import { getOrCreate, ifClicked, ifEmpty, on } from '../../utils/html'
import "../../../stylesheets/components/App/Navbar.scss";

export class Navbar {
    static init() {
        on(getNavs()).removeChildren();
        
        this.setAuthButtonAction("Sign In", true, true);
    }

    static get(): HTMLDivElement {
        const navbar = getOrCreate("DIV", "AppNavbar", "dropnav-effectee dropnav-active") as HTMLDivElement;
    
        on(navbar).appendByGetters([
            getLogo,
            getNavs,
            getAuth
        ]);
    
        return navbar;
    }
    static getFiller(): HTMLDivElement {
        return getOrCreate("DIV", "AppNavbarFiller") as HTMLDivElement;
    }

    static setAuthButtonAction(description: string, shouldSignIn: boolean, isClickable: boolean): void {
        const authElem = getAuth(), authButton = getAuthButton();
    
        const signIn = () => {};
        const signOut = () => {};

        const unintended = shouldSignIn ? signOut : signIn;
        const intended = shouldSignIn ? signIn : signOut;
    
        ifClicked(authElem).ignore(unintended);
    
        if(!isClickable) {
            authElem.classList.add("unclickable");
            ifClicked(authElem).ignore(intended);
        }
        else {
            authElem.classList.remove("unclickable");
            ifClicked(authElem).trigger(intended);
        }
    
        authButton.innerText = description;
    }
    
    static addNavLink(label: string, pageGetter: EventListener | EventListenerObject): void {
        const identifier = label.split(" ").join("");
    
        const navLink = getOrCreate("DIV", `AppNavbarNav${identifier}`,'nav') as HTMLDivElement;
    
        ifClicked(navLink).trigger(pageGetter);
        navLink.appendChild(this.getNavLinkAnchor(label));
    }

    private static getNavLinkAnchor(label: string) {
        const anchor = getOrCreate("A", null, "anchor", label) as HTMLAnchorElement;
    
        anchor.href = "javascript:void(0)";
    
        return anchor;
    }
}

function getLogo(): HTMLDivElement {
    const logo = getOrCreate("DIV", "AppNavbarLogo") as HTMLDivElement;

    ifEmpty(logo).appendByGetters([getLogoAnchor]);
    
    return logo;
}
function getLogoAnchor(): HTMLAnchorElement {
    const logoAnchor = getOrCreate("A") as HTMLAnchorElement;

    logoAnchor.href = HOMEPAGE_URL;
    logoAnchor.appendChild(getLogoImage());

    return logoAnchor;
}
function getLogoImage(): HTMLImageElement {
    const logoImg: HTMLImageElement = new Image();

    logoImg.src = Logo;
    logoImg.alt = DEPARTMENT_NAME;

    return logoImg;
}

function getNavs(): HTMLDivElement {
    return getOrCreate("DIV", "AppNavbarNavs") as HTMLDivElement;
}

function getAuth(): HTMLDivElement {
    const auth = getOrCreate("DIV", "AppNavbarAuth") as HTMLDivElement;

    auth.appendChild(getAuthButton());

    return auth;
}
function getAuthButton(): HTMLButtonElement {
    return getOrCreate("BUTTON", "AppNavbarAuthButton") as HTMLButtonElement;
}
