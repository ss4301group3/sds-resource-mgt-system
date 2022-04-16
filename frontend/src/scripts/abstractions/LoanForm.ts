import { getOrCreate } from "../utils/html";

export class LoanBoxItem{
    elem: HTMLDivElement;
    select: HTMLSelectElement;
    input: HTMLInputElement;
    constructor(itemsData: {[key:string]: string}) {
        this.elem = document.createElement("div");
        this.select = document.createElement("select");

        const type = "number", name = "", required = true;
        this.input = getOrCreate("INPUT", null, null, null, null,
            type, name, required) as HTMLInputElement;
        
        this.select.appendChild(newOption("", ">--Select an item--<"));
        
        Object.entries(itemsData).forEach(([key, value]) => {
            this.select.appendChild(newOption(key, value));
        });

        this.elem.appendChild(this.select);
        this.elem.appendChild(this.input);
    }
}

function newOption(value: string, text: string): HTMLElement {
    const option = document.createElement("OPTION");

    option.setAttribute("value", value);
    option.innerText = text;

    return option;
}

export abstract class DivContainingItemsList extends HTMLDivElement {
    abstract itemsList: LoanBoxItemsList;
}

export class LoanBoxItemsList{
    id: string;
    getElem(): DivContainingItemsList {
        return <DivContainingItemsList> document.getElementById(this.id);
    }
    itemsData: {[key:string]: string};
    items: Array<LoanBoxItem>

    constructor(id: string, itemsData: {[key:string]: string}) {
        this.id = id;
        this.itemsData = itemsData;
        this.items = new Array<LoanBoxItem>();
    }

    initAndGetOwnElem(): DivContainingItemsList {
        let elem = Object.assign(document.createElement("div"), {
            id: this.id,
            itemsList: this
        }) as DivContainingItemsList
        return elem;
    }

    addItem(): void {
        const item = new LoanBoxItem(this.itemsData);
        this.items.push(item);
        this.getElem().appendChild(item.elem);
    }
}