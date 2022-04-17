import { AccountInfo } from "@azure/msal-browser";
import { ROLE_NAMES } from "../../config";
import { UserInfo, MembershipInfo, DepartmentInfo } from "../components/Auth/GraphResponseTypes";

type IdTokenClaims = { roles: Array<string>; }
type MemberInfoValue = { "@odata.count": number; }

export class User {
    #id: number | null = null;
    #oid: string; // Unique forever E.g. 82e75c7e-523b-4a71-9f7c-0d141d107b19
    #name: string | null = null; // Full name
    #email: string; // Extracted from Graph - Profile endpoint
    #faculty: string | null = null; // Extracted from Graph - Profile
    #isStudent: boolean = false; // Extracted from Graph - Groups endpoint
    #isStaff: boolean = false; // Extracted from Graph - Groups endpoint
    #roles: Array<string>; // Azure app roles for access control

    assignProfile(userInfo: UserInfo) {
        if(userInfo.displayName) this.#name = userInfo.displayName;
        if(userInfo.mail) this.#email = userInfo.mail;
    }

    assignFaculty(departmentInfo: DepartmentInfo) {
        if(departmentInfo.value) this.#faculty = <string> departmentInfo.value;
    }

    assignIsStudent(memberInfo: MembershipInfo) {
        if(memberInfo["@odata.count"]) {
            this.#isStudent = memberInfo["@odata.count"] == 1 ? true : false;
        }
    }

    assignIsStaff(memberInfo: MembershipInfo) {
        if(memberInfo["@odata.count"]) {
            this.#isStaff = memberInfo["@odata.count"] == 1 ? true : false;
        }
    }

    constructor(accountInfo: AccountInfo) {
        const hasIdToken: boolean = typeof accountInfo.idTokenClaims !== typeof undefined;
        const hasRoles: boolean = hasIdToken ? Object.keys((<IdTokenClaims>accountInfo.idTokenClaims)).includes("roles") : false;

        this.#oid = accountInfo.localAccountId;
        this.#email = accountInfo.username;
        
        if(accountInfo.name) this.#name = accountInfo.name;
        this.#roles = hasRoles ? (<IdTokenClaims> accountInfo.idTokenClaims).roles : [];
    }

    getRoles = (): string[] => this.#roles? this.#roles : [];
    getName = (): string | null => this.#name;
    getEmail = (): string => this.#email;
    isStaff = (): boolean => this.#isStaff;
    isRespA = (): boolean => this.#roles.includes(ROLE_NAMES[0]);
    isRespB = (): boolean => this.#roles.includes(ROLE_NAMES[1]);
    isAppAdmin = (): boolean => this.#roles.includes(ROLE_NAMES[2]);
    hasAnyPrivilege = (): boolean => ( this.#roles.length > 0 || this.isStaff());
}