import { getOrCreate, ifClicked, newElem } from "../utils/html";

export class LoanBoxItem{
    elem: HTMLDivElement;
    select: HTMLSelectElement;
    input: HTMLInputElement;
    constructor(itemId: number, text: string) {
        this.elem = document.createElement("div");
        this.select = document.createElement("select");

        const cancel = Object.assign(document.createElement("button"), {
            classList: "cancel-item"
        });
        cancel.appendChild(getOrCreate("i", null, "material-icons icon", "cancel"));
        ifClicked(cancel).trigger(() => this.elem.parentElement?.removeChild(this.elem));

        const type = "number", name = "", required = true;
        this.input = getOrCreate("INPUT", null, null, null, null,
            type, name, required) as HTMLInputElement;
        
        this.select.appendChild(newOption(itemId.toString(), text));
        this.select.disabled = true;

        this.elem.appendChild(this.select);
        this.elem.appendChild(this.input);
        this.elem.appendChild(cancel);
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
    items: Array<LoanBoxItem>

    constructor(id: string, itemsData: {[key:string]: string}) {
        this.id = id;
        this.items = new Array<LoanBoxItem>();
    }

    initAndGetOwnElem(): DivContainingItemsList {
        let elem = Object.assign(document.createElement("div"), {
            id: this.id,
            itemsList: this
        }) as DivContainingItemsList
        return elem;
    }

    addItem(itemId: number, text: string): void {
        const item = new LoanBoxItem(itemId, text);
        this.items.push(item);
        this.getElem().appendChild(item.elem);
    }
}