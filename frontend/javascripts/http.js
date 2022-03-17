var httpHandler = {
    auth:{
        init() {
            this.msalClient = new msal.PublicClientApplication(this.configs.msal)
            this.selectAccount();
        },
        msalClient: null,
        username: "",
        configs: {
            msal: {
                auth: {
                    clientId: "77d7a34b-9853-4113-9d57-3136eb0149e4",
                    authority: "https://login.microsoftonline.com/3f46b7a8-385a-4569-9af5-c43dd63dad93",
                    redirectUri: "http://localhost:8080",
                },
                cache: {
                    cacheLocation: "localStorage",
                    storeAuthStateInCookie: false, // Set this to "true" if having issues on IE11 or Edge
                },
            },
            loginRequest: {
                //Scopes areprompted upon login. Keep as small as possible otherwise it'll be a lot to read by the user
                scopes: ["User.Read","access_as_user"]
            }
        },
        getAccount() {return this.msalClient.getAccountByUsername(this.username);},
        selectAccount() {
            const currentAccounts = this.msalClient.getAllAccounts();

            if (currentAccounts === null) {
                return;
            } else if (currentAccounts.length > 1) {
                // Add choose account code here
                console.warn("Multiple accounts detected.");
            } else if (currentAccounts.length === 1) {
                httpHandler.auth.username = currentAccounts[0].username;
                //DOM_HANDLER.signInBtn.rewrite("Out", false);
                //DATA_HANDLER.user.confirmSignedIn();
                if (!(typeof uiHandler === typeof undefined)) {uiHandler.messageBox.welcome(currentAccounts[0].displayName)}
                else window.addEventListener('load', function() {
                    uiHandler.messageBox.welcome(currentAccounts[0].name);
                    httpHandler.fetch.api('persons/me')
                    .then(response => {
                        //renders the response as message; for testing only
                        uiHandler.messageBox.write("p",`Roles: ${response}`,null,true);
                        console.log(response);
                    })
                })
            }
        },
        handleResponse(response) {
            if (response !== null) {
                httpHandler.auth.username = response.account.username;
                //DOM_HANDLER.signInBtn.rewrite("Out", false);
                //DATA_HANDLER.user.confirmSignedIn();
            } else {
                this.selectAccount();
            }
        },
        signIn: async function() {
            //DOM_HANDLER.signInBtn.rewrite("In", true);
            await this.msalClient.loginPopup(this.configs.loginRequest)
                .then(this.handleResponse)
                .catch(error => {
                    let message = error;
                    if (error.message.includes("interaction_in_progress")) {
                        message = "Sign-in interaction already in progress. Please sign-in through the already existing pop-up or browser tab.";
                    }
                    else {
                        if (error.message.includes("user_cancelled")) message = "Sign-in process cancelled";
                        else if (error.message.includes("CompactToken parsing failed")) message += " Please try signing-out and back in again.";
                        //DOM_HANDLER.signInBtn.rewrite("In", false);
                    }
                    //DOM_HANDLER.messageBox.writeAuthErr(message);
                    console.log(message);
                });
        },
        signOut() {
            //DOM_HANDLER.signInBtn.rewrite("Out", true);
            const logoutRequest = {
                account: this.msalClient.getAccountByUsername(this.username)
            };
        
            this.msalClient.logout(logoutRequest);
        },
        async getAccessTokenByScopes(requiredScopes) {
            let accessToken = null;
            try {
                const tokenRequest = {account: this.getAccount()};
                if (requiredScopes) tokenRequest["scopes"] = requiredScopes;
                else tokenRequest["scopes"] = ['api://sdsrms/access_as_user'];
                if (tokenRequest.account) {
                    const token = await this.msalClient.acquireTokenSilent(tokenRequest);
                    //if (scopeSetting =="user data") DATA_HANDLER.user.roles = token.idTokenClaims.roles;
                    accessToken = token.accessToken
                };
            } catch (error) {
                console.log(error);
            }
            return accessToken;
        }
    },
    fetch: {
        api: async function(routeToFetch, requiredScopes) {
            console.log("fetching from", routeToFetch)
            //DOM_HANDLER.messageBox.writeFetchMsg(routeToFetch);
            let fetchedResponse;
            try {
                const httpRequestOptions = {method:'GET'};
                const accessToken = await httpHandler.auth.getAccessTokenByScopes(requiredScopes);
                if (accessToken) httpRequestOptions['headers'] = {'Authorization': `Bearer ${accessToken}`}
                const payload = await fetch(`http://localhost:8080/api/${routeToFetch}`, httpRequestOptions);
                if (payload.ok) fetchedResponse =  await payload.json();
                else throw Error(`Failed to fetch from ${routeToFetch} endpoint (${payload.status}: ${payload.statusText})`);
                
            } catch (error) {
                errorHandler.handle(error);
                //DOM_HANDLER.messageBox.writeFetchErr(routeToFetch,error);
            }
            //DOM_HANDLER.messageBox.eraseFetchMsg(routeToFetch);
            return fetchedResponse;
        },
        user: async function() {
            await this.api("users/me",["User.Read"])
            .then(userObject => {
                if (typeof userObject === typeof undefined) throw Error("Failed to fetch user data");
                if (typeof dataHandler === typeof undefined) throw ReferenceError("Data handler object not yet defined at this point");
                else dataHandler.user = userObject;            
            })
            .catch(error => {errorHandler.handle(error)});
        }
    }
}

//fallback if actual error and exception handlers not yet declared
if (typeof errorHandler === typeof undefined) var errorHandler = {
    handle(err) {console.log(err)}
}
if (typeof exceptionHandler === typeof undefined) var exceptionHandler = {
    handle(exceptionName) {console.log("Exception:",exceptionName)}
}
httpHandler.auth.init();
//httpHandler.auth.signIn();
//httpHandler.fetch.user();