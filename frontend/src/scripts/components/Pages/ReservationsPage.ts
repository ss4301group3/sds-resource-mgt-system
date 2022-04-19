import { Dto } from "../../abstractions/dto";
import { ReservationFilter } from "../../abstractions/filters";
import { ElemGetter, getOrCreate, on } from "../../utils/html";

export let filter: ReservationFilter = new ReservationFilter;
export class ReservationsPage {

    static getContent(): HTMLDivElement {
        const content = document.createElement("DIV") as HTMLDivElement;
        
        on(content).appendByGetters(getContent());

        return content;
    }

    static getTitle(): string {
        return "Reservations";
    } 
}

function getContent(): Array<ElemGetter> {
    let getters: Array<ElemGetter> = [
        
    ];
    return getters;
}

function getReservationsTable(dto?: Dto): HTMLTableElement {
    const table = getOrCreate("TABLE") as HTMLTableElement;

    return table;
}