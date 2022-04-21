import { Dto } from "./dto";

export type SearchObject = {
    input: HTMLInputElement,
    remarks: HTMLParagraphElement,
    listdiv: SearchDiv | null
}

export abstract class SearchDiv extends HTMLDivElement{
    static convertToSearchDiv(elem: HTMLDivElement, searchObject: SearchObject): void {
        const sdiv = elem as SearchDiv

        sdiv.searchObject = searchObject;
        sdiv.searchRemarks = searchObject.remarks;

        sdiv.ul = <HTMLUListElement>sdiv.firstChild;

        sdiv.clear = () => { sdiv.ul.innerHTML = ""; };

        sdiv.reset = () => {
            sdiv.clear();

        }
    }
    abstract searchObject: SearchObject;
    abstract searchRemarks: HTMLParagraphElement;
    abstract ul: HTMLUListElement;
    abstract clear: () => void;
    abstract reset: () => void;
    abstract closeObj: (dto: Dto) => void;
    abstract openObj: (dto: Dto) => void;
    abstract showObj: (dto: Dto) => void;
    abstract newObj: (dto: Dto) => void;
}