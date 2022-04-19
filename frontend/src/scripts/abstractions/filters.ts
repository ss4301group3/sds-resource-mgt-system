import { Category } from "./dto/Category";
import { Resource } from "./dto/Item";
import { Person } from "./dto/Person";

export class ReservationFilter {
    category: Category | null = null;
    item: Resource | null = null;
    itemisConsumable: boolean | null = null;
    person: Person | null = null;
    personIsStaff: boolean | null = null;
    personIsStudent: boolean | null = null;
    personFaculty: string | null = null;
    reservationSupervisor: Person | null = null;
    reservationResponder: Person | null = null;
    reservationIsPending: boolean | null = null;
    reservationAmountOfRequiredApprovals: number | null = null;
    reservationIsReleased: boolean | null = null;
    reservationIsReturned: boolean | null = null;
    reservationStartsAfter: Date | null = null;
    reservationEndsBefore: Date | null = null;
    reservationCreatedAfter: Date | null = null;
    reservationCreatedBefore: Date | null = null;
    reservationUpdatedAfter: Date | null = null;
    reservationUpdatedBefore: Date | null = null;

    setCategory(dto: Category | null): void { this.category = dto; }
    setItem(dto: Resource | null): void { this.item = dto; }
    setItemisConsumable(bool: boolean | null): void { this.itemisConsumable = bool; }
    setPerson(dto: Person | null): void { this.person = dto; }
    setPersonIsStaff(bool: boolean | null): void { this.personIsStaff = bool; }
    setPersonIsStudent(bool: boolean | null): void { this.personIsStudent = bool; }
    setPersonFaculty(text: string | null): void { this.personFaculty = text; }
    setReservationSupervisor(dto: Person | null): void { this.reservationSupervisor = dto; }
    setReservationResponder(dto: Person | null): void { this.reservationResponder = dto; }
    setReservationIsPending(bool: boolean | null): void { this.reservationIsPending = bool; }
    setReservationAmountOfRequiredApprovals(no: number | null): void { this.reservationAmountOfRequiredApprovals = no; }
    setReservationIsReleased(bool: boolean | null): void { this.reservationIsReleased = bool; }
    setReservationIsReturned(bool: boolean | null): void { this.reservationIsReturned = bool; }
    setReservationStartsAfter(minDate: Date | null): void { this.reservationStartsAfter = minDate; }
    setReservationEndsBefore(maxDate: Date | null): void { this.reservationEndsBefore = maxDate; }
    setReservationCreatedAfter(minDate: Date | null): void { this.reservationCreatedAfter = minDate; }
    setReservationCreatedBefore(maxDate: Date | null): void { this.reservationCreatedBefore = maxDate; }
    setReservationUpdatedAfter(minDate: Date | null): void { this.reservationUpdatedAfter = minDate; }
    setReservationUpdatedBefore(maxDate: Date | null): void { this.reservationUpdatedBefore = maxDate; }
    
    getCategory(): Category | null { return this.category; }
    getItem(): Resource | null { return this.item; }
    getItemisConsumable(): boolean | null { return this.itemisConsumable; }
    getPerson(): Person | null { return this.person; }
    getPersonIsStaff(): boolean | null { return this.personIsStaff; }
    getPersonIsStudent(): boolean | null { return this.personIsStudent; }
    getPersonFaculty(): string | null { return this.personFaculty; }
    getReservationSupervisor(): Person | null { return this.reservationSupervisor; }
    getReservationResponder(): Person | null { return this.reservationResponder; }
    getReservationIsPending(): boolean | null { return this.reservationIsPending; }
    getReservationAmountOfRequiredApprovals(): number | null { return this.reservationAmountOfRequiredApprovals; }
    getReservationIsReleased(): boolean | null { return this.reservationIsReleased; }
    getReservationIsReturned(): boolean | null { return this.reservationIsReturned; }
    getReservationStartsAfter(): Date | null { return this.reservationStartsAfter; }
    getReservationEndsBefore(): Date | null { return this.reservationEndsBefore; }
    getReservationCreatedAfter(): Date | null { return this.reservationCreatedAfter; }
    getReservationCreatedBefore(): Date | null { return this.reservationCreatedBefore; }
    getReservationUpdatedAfter(): Date | null { return this.reservationUpdatedAfter; }
    getReservationUpdatedBefore(): Date | null { return this.reservationUpdatedBefore; }
}