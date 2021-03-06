import Logo from '../../../assets/logo.png'
import { DEFAULT_SIGN_IN, DEPARTMENT_NAME, HOMEPAGE_URL } from '../../../config';
import { getOrCreate, ifClicked, ifEmpty, on } from '../../utils/html'
import "../../../stylesheets/components/App/Navbar.scss";
import { Auth } from '../Auth';
import { noSpaces } from '../../utils/strings';

    
const signInAction = () => Auth.signIn(DEFAULT_SIGN_IN);
const signOutAction = () => Auth.signOut();

export class Navbar {
    static init() {
        on(getNavs()).removeChildren();
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
        const authElem = getAuth(), authButtonDiv = getDivContainingAuthButton();
        
        const intended = shouldSignIn ? signInAction : signOutAction;
        const unintended = !shouldSignIn ? signInAction : signOutAction;
    
        ifClicked(authButtonDiv).ignore(unintended);
    
        if(isClickable) {
            authButtonDiv.classList.remove("unclickable");
            ifClicked(authButtonDiv).trigger(intended);
        }
        else {
            authButtonDiv.classList.add("unclickable");
            ifClicked(authButtonDiv).ignore(intended);
        }

        if(authButtonDiv.firstChild) (<HTMLElement>authButtonDiv.firstChild).innerHTML = description;
    }
    
    static addNavLink(label: string, pageGetter: EventListener | EventListenerObject): void {
        const identifier = noSpaces(label);
    
        const navLink = getOrCreate("DIV", `AppNavbarNav${identifier}`,'nav') as HTMLDivElement;
    
        ifClicked(navLink).trigger(pageGetter);
        navLink.appendChild(this.getNavLinkAnchor(label));

        getNavs().appendChild(navLink);
    }

    private static getNavLinkAnchor(label: string) {
        const text = label.includes(" Page") ? label.substring(0, label.indexOf(" Page")) : label;
        const anchor = getOrCreate("A", `AppNavbarNavAnchor${noSpaces(text)}`, "anchor", text) as HTMLAnchorElement;
    
        anchor.href = "javascript:void(0)";
    
        return anchor;
    }

    static setCurrent(label: string): void {
        const identifier = label.split(" ").join("");
        
        const navs = getNavs().children;

        for(let i = 0; i < navs.length; i++) {
            if(navs[i].id == `AppNavbarNav${identifier}`)
                navs[i].classList.add("current");
            else
                navs[i].classList.remove("current");
        }
    }

    static hideNavFor(label: string): void {
        const identifier = label.split(" ").join("");

        document.getElementById(`AppNavbarNav${identifier}`)?.classList.add("hidden");
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

    auth.appendChild(getDivContainingAuthButton());
    auth.appendChild(getEmptyDiv());

    return auth;
}
function getDivContainingAuthButton(): HTMLDivElement {
    const div = getOrCreate("DIV","AppNavbarAuthDiv") as HTMLDivElement;

    div.appendChild(getOrCreate("BUTTON", "AppNavbarAuthButton") as HTMLButtonElement);

    return div;
}

function getEmptyDiv(): HTMLDivElement {
    return getOrCreate("DIV","AppNavbarAuthEmptyDiv") as HTMLDivElement;
}
