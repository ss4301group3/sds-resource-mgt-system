
import { AuthModule } from "./Auth/AuthModule";
import { BACKEND_PROTECTED_CONFIG, BACKEND_PUBLIC_CONFIG, GRAPH_CONFIG } from "./Auth/Constants";
import { FetchManager, GraphFetchManager, ProtectedFetchManager, PublicFetchManager } from "./Auth/FetchManager";

const authModule: AuthModule = new AuthModule();

const graphFetchModule: FetchManager = new GraphFetchManager();
const publicFetchModule: FetchManager = new PublicFetchManager();
const protectedFetchModule: FetchManager = new ProtectedFetchManager();

export class Auth {
    static init(): void {
        window.addEventListener("load", async () => {
            authModule.loadAuthModule();
        });
    }

    static signIn = signIn;
    static signOut = signOut;
}

const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;

/**
 * Called to prompt user for signin, method either loginRedirect or loginPopup
 * @param method
 */
 export function signIn(method: string): void {
    const adminSignIn = method == "adminButton";

    const useRedirect = isIE || (adminSignIn && window.innerWidth < 860 || method == "loginRedirect");

    const signInType = useRedirect ? "loginRedirect" : "loginPopup";

    authModule.login(signInType);
}

/**
 * Called when user clicks "Sign Out"
 */
export function signOut(): void {
    authModule.logout();
}

/**
 * Called to fetch categories info
 */
export async function fetchInwardCategories(): Promise<any> {
    const backendResponse = await publicFetchModule.callEndpointWithToken(BACKEND_PUBLIC_CONFIG.CATEGORIES_ENDPT);
    //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    console.log(backendResponse);
    return backendResponse;
}

/**
 * Called to fetch categories info
 */
export async function fetchInwardConsumablesPublic(): Promise<any> {
    const backendResponse = await publicFetchModule.callEndpointWithToken(BACKEND_PUBLIC_CONFIG.CONSUMABLES_ENDPT);
    //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    console.log(backendResponse);
    return backendResponse;
}

/**
 * Called to fetch categories info
 */
export async function fetchInwardNonConsumablesPublic(): Promise<any> {
    const backendResponse = await publicFetchModule.callEndpointWithToken(BACKEND_PUBLIC_CONFIG.NONCONSUMABLES_ENDPT);
    //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    console.log(backendResponse);
    return backendResponse;
}

/**
 * Called to fetch categories info (if it were protected)
 */
export async function getCategoriesIfItWereProtected(): Promise<void> {
    const token = isIE ? await authModule.getBackendTokenRedirect() : await authModule.getBackendTokenPopup();
    if (token && token.length > 0) {
        const backendResponse = await graphFetchModule.callEndpointWithToken(BACKEND_PROTECTED_CONFIG.CATEGORIES_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    }
}

/**
 * Called to fetch info on whether user belongs to UBD Staff Group
 */
export async function getIsStaff(): Promise<void> {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await graphFetchModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    }
}

/**
 * Called to fetch info on whether user belongs to UBD Sudent Group
 */
export async function getIsStudent(): Promise<void> {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await graphFetchModule.callEndpointWithToken(GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT);
    }
}

/**
 * Called to attempt silent single sign-on
 */
 export function attemptSsoSilent(): void {
    authModule.attemptSsoSilent();
}