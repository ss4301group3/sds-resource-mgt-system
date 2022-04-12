import { AuthModule } from "./auth/AuthModule";
import { FetchManager } from "./auth/FetchManager";
import { GRAPH_CONFIG } from "./auth/Constants";
import { User } from "../user";

//check if browser is Internet Explorer; to login via redirect (as opposed to popup) later on  if so.
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;

const authModule: AuthModule = new AuthModule();
const networkModule: FetchManager = new FetchManager();

export function init(): void {
    window.addEventListener("load", async () => {
        authModule.loadAuthModule();
    });
}

/**
 * Called to prompt user for signin, method either loginRedirect or loginPopup
 * @param method
 */
 export function signIn(method: string): void | User {
    const adminSignIn = method == "adminSignin";
    const useRedirect = isIE || (adminSignIn && window.innerWidth < 860);
    const signInType = useRedirect ? "loginRedirect" : method;
    return authModule.login(signInType);
}

/**
 * Called when user clicks "Sign Out"
 */
export function signOut(): void {
    authModule.logout();
}

/**
 * Called to fetch user profile
 */
 export async function getProfile(): Promise<void> {
    const token = isIE ? await authModule.getProfileTokenRedirect() : await authModule.getProfileTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_ME_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_ME_ENDPT);
    }
}

/**
 * Called to fetch info on whether user belongs to UBD Staff Group
 */
export async function getIsStaff(): Promise<void> {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    }
}

/**
 * Called to fetch info on whether user belongs to UBD Sudent Group
 */
export async function getIsStudent(): Promise<void> {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT);
    }
}

/**
 * Called to attempt silent single sign-on
 */
 export function attemptSsoSilent(): void {
    authModule.attemptSsoSilent();
}
