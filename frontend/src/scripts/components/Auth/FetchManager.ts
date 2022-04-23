import { GRAPH_CONFIG } from "./Constants";
import { UserInfo, MembershipInfo, DepartmentInfo } from "./GraphResponseTypes";

/**
 * Class that handles Bearer requests for data using Fetch.
 */
export abstract class FetchManager {
    abstract callEndpointWithToken(endpoint: string, accessToken?: string): Promise<UserInfo | MembershipInfo | DepartmentInfo>
}

export class PublicFetchManager extends FetchManager {

    /**
     * Makes an request to the given endpoint.
     * @param endpoint 
     */
    async callEndpointWithToken(endpoint: string): Promise<UserInfo | MembershipInfo | DepartmentInfo> {
        const headers = new Headers();

        const options = {
            method: "GET",
            headers: headers
        };

        console.log('request made at: ' + new Date().toString());

        const response = await fetch(endpoint, options);
        return (await response.json()) as UserInfo | MembershipInfo | DepartmentInfo;
    }
}

export class ProtectedFetchManager extends FetchManager {
    /**
     * Makes an Authorization "Bearer"  request with the given accessToken to the given endpoint.
     * @param endpoint 
     * @param accessToken 
     */
    async callEndpointWithToken(endpoint: string, accessToken: string): Promise<UserInfo | MembershipInfo | DepartmentInfo> {
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;

        headers.append("Authorization", bearer);

        const options = {
            method: "GET",
            headers: headers
        };

        console.log('request made at: ' + new Date().toString());

        const response = await fetch(endpoint, options);
        return (await response.json()) as UserInfo | MembershipInfo | DepartmentInfo;
    }
}

export class GraphFetchManager extends FetchManager {

    private requireCLHeader: string[] = [ GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT, GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT ];

    /**
     * Makes an Authorization "Bearer"  request with the given accessToken to the given endpoint.
     * @param endpoint 
     * @param accessToken 
     */
    async callEndpointWithToken(endpoint: string, accessToken: string): Promise<UserInfo | MembershipInfo | DepartmentInfo> {
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;

        headers.append("Authorization", bearer);
        
        if(this.requireCLHeader.includes(endpoint))
            headers.append("ConsistencyLevel", "Eventual");

        const options = {
            method: "GET",
            headers: headers
        };

        console.log('request made at: ' + new Date().toString());

        const response = await fetch(endpoint, options);
        return (await response.json()) as UserInfo | MembershipInfo | DepartmentInfo;
    }
}
