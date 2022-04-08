import { AuthModule } from "./auth/AuthModule";
import { FetchManager } from "./auth/FetchManager";
import { UIManager } from "./auth/UIManager";
import { GRAPH_CONFIG } from "./auth/Constants";

//check if browser is Internet Explorer; to login via redirect (as opposed to popup) later on  if so.
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;

const authModule: AuthModule = new AuthModule();
const networkModule: FetchManager = new FetchManager();

window.addEventListener("load", async () => {
    authModule.loadAuthModule();
});

/**
 * Called to prompt user for signin, method either loginRedirect or loginPopup
 * @param method
 */
 export function signIn(method: string): void {
    const signInType = isIE ? "loginRedirect" : method;
    authModule.login(signInType);
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
        UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_ME_ENDPT);
    }
}

/**
 * Called to fetch info on whether user belongs to UBD Staff Group
 */
export async function getIsStaff(): Promise<void> {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_ISSTAFF_ENDPT, token);
        UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_ISSTAFF_ENDPT);
    }
}

/**
 * Called to fetch info on whether user belongs to UBD Sudent Group
 */
export async function getIsStudent(): Promise<void> {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_ISSTUDENT_ENDPT, token);
        UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_ISSTUDENT_ENDPT);
    }
}

/**
 * Called to attempt silent single sign-on
 */
 export function attemptSsoSilent(): void {
    authModule.attemptSsoSilent();
}
