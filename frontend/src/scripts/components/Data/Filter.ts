import { Dto, ReservationDtos } from "../../abstractions/dto";
import { ReservationsFilter } from "../../abstractions/filters";
import { ElemGetter, getOrCreate, on } from "../../utils/html";

let reservationsFilter: ReservationsFilter = new ReservationsFilter;

interface FilterHandler {
    get(): Filter;
    clear(): void;
}

interface ReservationsFilterHandler {
    get(): ReservationsFilter;
    clear(): void;
    apply(dtos: ReservationDtos): ReservationDtos;
}

export class Filter {
    static Reservations: ReservationsFilterHandler = {
        get(): ReservationsFilter { return reservationsFilter; },
        clear(): void { reservationsFilter = new ReservationsFilter; },
        apply(dtos: ReservationDtos): ReservationDtos {
            return dtos;
        }
    }
}
