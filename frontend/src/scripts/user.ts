import { DepartmentInfo, MembershipInfo, UserInfo } from "./utils/auth/GraphReponseTypes"
import { AccountInfo } from "@azure/msal-browser";
import { isDefinedAndKnown } from "./utils/var";
import { ROLE_NAMES } from "../config";

type IdTokenClaims = { roles: Array<string>; }
type MemberInfoValue = { "@odata.count": number; }

export class User {
    #id: number;
    #oid: string; // Unique forever E.g. 82e75c7e-523b-4a71-9f7c-0d141d107b19
    #name: string; // Full name
    #email: string; // Extracted from Graph - Profile endpoint
    #emailAlt: string; // Extracted preferred_username property from signed-in account; fallback
    #faculty: string; // Extracted from Graph - Profile
    #isStudent: boolean; // Extracted from Graph - Groups endpoint
    #isStaff: boolean; // Extracted from Graph - Groups endpoint
    #roles: Array<string>; // Azure app roles for access control

    assignProfile(userInfo: UserInfo) {
        if(isDefinedAndKnown(userInfo.displayName)) this.#name = <string> userInfo.displayName;
        if(isDefinedAndKnown(userInfo.mail)) this.#email = <string> userInfo.mail;
    }

    assignFaculty(departmentInfo: DepartmentInfo) {
        if(isDefinedAndKnown(departmentInfo.value)) this.#faculty = <string> departmentInfo.value;
    }

    assignIsStudent(memberInfo: MembershipInfo) {
        if(isDefinedAndKnown(memberInfo["@odata.count"])) {
            this.#isStudent = memberInfo["@odata.count"] == 1 ? true : false;
        }
    }

    assignIsStaff(memberInfo: MembershipInfo) {
        if(isDefinedAndKnown(memberInfo["@odata.count"])) {
            this.#isStaff = memberInfo["@odata.count"] == 1 ? true : false;
        }
    }

    constructor(accountInfo: AccountInfo) {
        const hasName: boolean = isDefinedAndKnown(accountInfo.name);
        const hasIdToken: boolean = isDefinedAndKnown(accountInfo.idTokenClaims);
        const hasRoles: boolean = hasIdToken ? Object.keys((<IdTokenClaims>accountInfo.idTokenClaims)).includes("roles") : false;

        this.#oid = accountInfo.localAccountId;
        this.#email = accountInfo.username;
        
        if(hasName) this.#name = <string> accountInfo.name;
        this.#roles = hasRoles ? (<IdTokenClaims> accountInfo.idTokenClaims).roles : [];
    }

    getRoles = (): string[] => this.#roles? this.#roles : [];
    getName = (): string => this.#name;
    getEmail = (): string => this.#email;
    isStaff = (): boolean => this.#isStaff;
    isRespA = (): boolean => this.#roles.includes(ROLE_NAMES[0]);
    isRespB = (): boolean => this.#roles.includes(ROLE_NAMES[1]);
    isAppAdmin = (): boolean => this.#roles.includes(ROLE_NAMES[2]);
    hasAnyPrivilege = (): boolean => ( this.#roles.length > 0 || this.isStaff());
}