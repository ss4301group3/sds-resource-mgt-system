import { PublicClientApplication, SilentRequest, SsoSilentRequest, AuthenticationResult, Configuration, LogLevel, AccountInfo, InteractionRequiredAuthError, RedirectRequest, PopupRequest, EndSessionRequest } from "@azure/msal-browser";
import { App } from "../../components/App";

export let signInAttemptExecuted: boolean = false;

/**
 * Configuration class for @azure/msal-browser: 
 * https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_config_configuration_.html
 */
const MSAL_CONFIG: Configuration = {
    auth: {
        clientId: "77d7a34b-9853-4113-9d57-3136eb0149e4",
        authority: "https://login.microsoftonline.com/3f46b7a8-385a-4569-9af5-c43dd63dad93",
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {	
                    return;	
                }	
                switch (level) {	
                    case LogLevel.Error:	
                        console.error(message);	
                        return;	
                    case LogLevel.Info:	
                        console.info(message);	
                        return;	
                    case LogLevel.Verbose:	
                        console.debug(message);	
                        return;	
                    case LogLevel.Warning:	
                        console.warn(message);	
                        return;	
                }
            }
        }
    }
};

/**
 * AuthModule for application - handles authentication in app.
 */
export class AuthModule {

    private myMSALObj: PublicClientApplication; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/classes/_src_app_publicclientapplication_.publicclientapplication.html
    private account: AccountInfo | null; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-common/modules/_src_account_accountinfo_.html
    private loginRedirectRequest: RedirectRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_redirectrequest_.html
    private loginRequest: PopupRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_popuprequest_.html
    private profileRedirectRequest: RedirectRequest;
    private profileRequest: PopupRequest;
    private backendRedirectRequest: RedirectRequest;
    private backendRequest: PopupRequest;
    private groupsRedirectRequest: RedirectRequest;
    private groupsRequest: PopupRequest;
    private silentProfileRequest: SilentRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_silentrequest_.html
    private silentBackendRequest: SilentRequest;
    private silentGroupsRequest: SilentRequest;
    private silentLoginRequest: SsoSilentRequest;

    constructor() {
        this.myMSALObj = new PublicClientApplication(MSAL_CONFIG);
        this.account = null;

        this.loginRequest = {
            scopes: ["User.Read", "api://sdsrms/access_as_user"]
        };

        this.loginRedirectRequest = {
            ...this.loginRequest,
            redirectStartPage: window.location.href
        };

        this.profileRequest = {
            scopes: ["User.Read"]
        };

        this.profileRedirectRequest = {
            ...this.profileRequest,
            redirectStartPage: window.location.href
        };

        // Add here scopes for access token to be used at MS Graph API endpoints.
        this.backendRequest = {
            scopes: ["api://sdsrms/access_as_user"]
        };

        this.backendRedirectRequest = {
            ...this.backendRequest,
            redirectStartPage: window.location.href
        };

        this.groupsRequest = {
            scopes: ["User.Read"]
        };

        this.groupsRedirectRequest = {
            ...this.groupsRequest,
            redirectStartPage: window.location.href
        };

        this.silentProfileRequest = {
            scopes: ["openid", "profile", "User.Read"],
            forceRefresh: false
        };

        this.silentBackendRequest = {
            scopes: ["api://sdsrms/access_as_user"],
            forceRefresh: false
        };

        this.silentGroupsRequest = {
            scopes: ["openid", "profile", "Mail.Read"],
            forceRefresh: false
        };

        this.silentLoginRequest = {
            domainHint: "3f46b7a8-385a-4569-9af5-c43dd63dad93",
        }
    }

    /**
     * Calls getAllAccounts and determines the correct account to sign into, currently defaults to first account found in cache.
     * TODO: Add account chooser code
     * 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    private getAccount(): AccountInfo | null {
        // need to call getAccount here?
        const currentAccounts = this.myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            console.log("No accounts detected");
            return null;
        }

        if (currentAccounts.length > 1) {
            // Add choose account code here
            console.log("Multiple accounts detected, need to add choose account code.");
            return currentAccounts[0];
        } else if (currentAccounts.length === 1) {
            return currentAccounts[0];
        }

        return null;
    }

    /**
     * Checks whether we are in the middle of a redirect and handles state accordingly. Only required for redirect flows.
     * 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#redirect-apis
     */
    loadAuthModule(): void {
        this.myMSALObj.handleRedirectPromise().then((resp: AuthenticationResult | null) => {
            this.handleResponse(resp);
        }).catch(console.error);
    }

    /**
     * Handles the response from a popup or redirect. If response is null, will check if we have any accounts and attempt to sign in.
     * @param response 
     */
    handleResponse(response: AuthenticationResult | null) {
        if (response !== null) {
            this.account = response.account;
        } else {
            this.account = this.getAccount();
            if(!this.account) this.attemptSsoSilent();
        }

        if (this.account) {
            App.handleSignedInUser(this.account);
        }
    }

    /**
     * Calls ssoSilent to attempt silent flow. If it fails due to interaction required error, it will prompt the user to login using popup.
     * @param request 
     */
    attemptSsoSilent() {
        this.myMSALObj.ssoSilent(this.silentLoginRequest).then(() => {
            this.account = this.getAccount();
            if (this.account) {
                App.handleSignedInUser(this.account);
            } else {
                console.log("No account!");
                App.handleNoSignedInUser();
            }
            signInAttemptExecuted = true;
        }).catch(error => {
            if (error instanceof InteractionRequiredAuthError) {
                App.handleCancelSignIn("No signed-in account retrieved");
            }
            else if (error.message.includes("AADSTS50199")) {
                App.handleCancelSignIn("Due to security reasons, manual sign-in required");
            }
            else if (error.message.includes("endpoints_resolution_error")) {
                App.handleCancelSignIn("Unable to establish connection<br><br>Please check network");
            }
            else if (error.message.includes("monitor_window_timeout")) {
                App.handleCancelSignIn("Timeout error<br><br>Please check network");
            }
            else {
                App.handleCancelSignIn("Unable to get signed-in account");
                console.error("Silent Error: " + error);
            }
            signInAttemptExecuted = true;
        })
    }

    /**
     * Calls loginPopup or loginRedirect based on given signInType.
     * @param signInType 
     */
    login(signInType: string): void {
        App.handleSigningIn();
        if (signInType === "loginPopup") {
            this.myMSALObj.loginPopup(this.loginRequest).then((resp: AuthenticationResult) => {
                this.handleResponse(resp);
            }).catch( error => {
                if(error.message.includes("user_cancelled")) {
                    App.handleCancelSignIn("Sign-in cancelled");
                }
                else if(error.message.includes("endpoints_resolution_error")) {
                    App.handleCancelSignIn("Unable to establish connection<br><br>Please check network");
                }
                else if(error.message.includes("popup_window_error: Error opening popup window")) {
                    App.handleCancelSignIn("Unable to open pop-up window<br><br>Please check/enable the option");
                }
                else {
                    console.log(error);
                    App.handleCancelSignIn();
                }
            });
        } else if (signInType === "loginRedirect") {
            this.myMSALObj.loginRedirect(this.loginRedirectRequest);
        }
    }

    /**
     * Logs out of current account.
     */
    logout(): void {
        let account: AccountInfo | undefined;
        if (this.account) {
            account = this.account
        }
        const logOutRequest: EndSessionRequest = {
            account
        };

        App.handleSignOut();
        
        this.myMSALObj.logoutRedirect(logOutRequest);
    }

    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive redirect.
     */
    async getProfileTokenRedirect(): Promise<string|null> {
        if (this.account) {
            this.silentProfileRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentProfileRequest, this.profileRedirectRequest);
    }

    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive popup.
     */
    async getProfileTokenPopup(): Promise<string|null> {
        if (this.account) {
            this.silentProfileRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentProfileRequest, this.profileRequest);
    }

    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive redirect.
     */
    async getBackendTokenRedirect(): Promise<string|null> {
        if (this.account) {
            this.silentBackendRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentBackendRequest, this.backendRedirectRequest);
    }

    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive popup.
     */
    async getBackendTokenPopup(): Promise<string|null> {
        if (this.account) {
            this.silentBackendRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentBackendRequest, this.backendRequest);
    }

    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive redirect.
     */
    async getGroupsTokenRedirect(): Promise<string|null> {
        if (this.account) {
            this.silentGroupsRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentGroupsRequest, this.groupsRedirectRequest);
    }

    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive popup.
     */
    async getGroupsTokenPopup(): Promise<string|null> {
        if (this.account) {
            this.silentGroupsRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentGroupsRequest, this.groupsRequest);
    }

    /**
     * Gets a token silently, or falls back to interactive popup.
     */
    private async getTokenPopup(silentRequest: SilentRequest, interactiveRequest: PopupRequest): Promise<string|null> {
        try {
            const response: AuthenticationResult = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                return this.myMSALObj.acquireTokenPopup(interactiveRequest).then((resp) => {
                    return resp.accessToken;
                }).catch((err) => {
                    console.error(err);
                    return null;
                });
            } else {
                console.error(e);
            }
        }

        return null;
    }

    /**
     * Gets a token silently, or falls back to interactive redirect.
     */
    private async getTokenRedirect(silentRequest: SilentRequest, interactiveRequest: RedirectRequest): Promise<string|null> {
        try {
            const response = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                this.myMSALObj.acquireTokenRedirect(interactiveRequest).catch(console.error);
            } else {
                console.error(e);
            }
        }

        return null;
    }
}
