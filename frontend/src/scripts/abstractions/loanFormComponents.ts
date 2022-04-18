import { getOrCreate, on } from "../utils/html";
import { Resource } from "./dto";

export abstract class DivContainingItemsList extends HTMLDivElement {
    abstract itemsList: LoanBoxItemsList;
}

export class LoanBoxItemsList{
    id: string;
    getElem(): DivContainingItemsList {
        return <DivContainingItemsList> document.getElementById(this.id);
    }
    resources: {[id: number]: [Resource, number]}

    constructor(id: string, data?: {[id: number]: [Resource, number]}) {
        this.id = id;
        this.resources = data ? data : {};
    }

    initAndGetOwnElem(): DivContainingItemsList {
        let elem = Object.assign(document.createElement("div"), {
            id: this.id,
            itemsList: this
        }) as DivContainingItemsList
        return elem;
    }

    #render(data: {[id: number]: [Resource, number]}): void {
        on(this.getElem()).removeChildren();
        Object.entries(data).forEach(([id, itemInfo]) => {
            this.#renderItem(itemInfo[0], itemInfo[1]);
        });
    }

    #renderItem(resource: Resource, amount: number): void {
        const item = new LoanBoxItem(resource, amount);
        this.getElem().appendChild(item.elem);
    }

    addItem(resource: Resource, amount: number): void {
        if(this.resources[resource.getId()]) {
            this.resources[resource.getId()][1]++;
            this.#render(this.resources);
        }
        else {
            this.resources[resource.getId()] = [resource, amount];
            this.#renderItem(resource, amount);
        }
    }

    editItem(resource: Resource, amount: number): void {
        this.resources[resource.getId()][1] = amount;
        if(amount <= 0) this.removeItem(resource);
        this.#render(this.resources);
    }

    removeItem(resource: Resource): void {
        delete this.resources[resource.getId()];
    }

    peekItem(resource: Resource): [any, number] {
        if(this.resources[resource.getId()]) {
            return this.resources[resource.getId()];
        }
        return [null, 0];
    }
}

export class LoanBoxItem{
    elem: HTMLDivElement;
    select: HTMLSelectElement;
    input: HTMLInputElement;
    constructor(resource: Resource, amount: number) {
        this.elem = document.createElement("div");
        this.select = document.createElement("select");

        /*
        const cancel = Object.assign(document.createElement("button"), {
            classList: "cancel-item"
        });
        cancel.appendChild(getOrCreate("i", null, "material-icons icon", "cancel"));
        ifClicked(cancel).trigger(() => {
            const parentElement = <DivContainingItemsList | null> this.elem.parentElement;
            parentElement?.itemsList.removeItem(resource);
            parentElement?.removeChild(this.elem);
        });
        */

        const type = "number", name = "", required = true;
        this.input = getOrCreate("INPUT", null, null, null, null,
            type, name, required) as HTMLInputElement;
        this.input.value = amount.toString();
        
        this.input.addEventListener("change", () => {
            const parentElement = <DivContainingItemsList | null> this.elem.parentElement;
            const newAmount = parseInt(this.input.value) > 0 ?
                              parseInt(this.input.value) : 0;

            parentElement?.itemsList.editItem(resource, newAmount);

        }, { capture: true });

        this.select.appendChild(newOption(resource.getId().toString(), resource.getLabel()));
        this.select.disabled = true;

        this.elem.appendChild(this.select);
        this.elem.appendChild(this.input);
        //this.elem.appendChild(cancel);
    }
}

function newOption(value: string, text: string): HTMLElement {
    const option = document.createElement("OPTION");

    option.setAttribute("value", value);
    option.innerText = text;

    return option;
}