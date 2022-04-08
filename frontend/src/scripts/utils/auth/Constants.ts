// Add here the endpoints for MS Graph API services you would like to use.
export const GRAPH_CONFIG = {
    GRAPH_ME_ENDPT: "https://graph.microsoft.com/v1.0/me",
    GRAPH_MAIL_ENDPT: "https://graph.microsoft.com/v1.0/me/messages",
    GRAPH_GROUPS_ENDPT: "https://graph.microsoft.com/v1.0/me/transitiveMemberOf/microsoft.graph.group?$count=true&$filter=id eq 'ff037dbb-28b3-47d5-a710-86d3e4ae4135'",
    GRAPH_ISSTUDENT_ENDPT: "https://graph.microsoft.com/v1.0/me/transitiveMemberOf/microsoft.graph.group?$count=true&$filter=id eq 'ff037dbb-28b3-47d5-a710-86d3e4ae4135'",
    GRAPH_ISSTAFF_ENDPT: "https://graph.microsoft.com/v1.0/me/transitiveMemberOf/microsoft.graph.group?$count=true&$filter=id eq '25d38ff4-6d95-4344-a853-a580bd00e8ea'"
};//note must also set consistencylevel to eventual in http header for the last 2 endpts to return count