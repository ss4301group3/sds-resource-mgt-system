export function isDefinedAndKnown(varToBeChecked: any) {
    if(typeof varToBeChecked !== typeof undefined) {
        if(typeof varToBeChecked !== null)
            return true;
    }
    return false;
}
export function isEmptyString(stringToBeChecked: string) {
    return isDefinedAndKnown(stringToBeChecked) && (stringToBeChecked.length == 0);
}
export function isNonEmptyString(stringToBeChecked: string) {
    return isDefinedAndKnown(stringToBeChecked) && (stringToBeChecked.length > 0);
}