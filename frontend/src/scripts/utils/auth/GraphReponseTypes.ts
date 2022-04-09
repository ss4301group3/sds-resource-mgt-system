
/**
 * Graph data about the user.
 */
 export type UserInfo = {
    businessPhones?: Array<string>,
    displayName?: string,
    givenName?: string,
    id?: string,
    jobTitle?: string,
    mail?: string,
    mobilePhone?: string,
    officeLocation?: string,
    preferredLanguage?: string,
    surname?: string,
    userPrincipalName?: string
};


/**
 * Count of groups with id that match specified id (0 or 1 only), fetched from MS Graph
 */
 export type MembershipInfo = {
    "@odata.count"?: number
};


/**
 * Count of groups that match with specified id (0 or 1 only), fetched from MS Graph
 */
 export type DepartmentInfo = {
    "value"?: string
};