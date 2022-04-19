import { Category } from "./dto/Category";
import { Resource } from "./dto/Item";
import { Person } from "./dto/Person";

export interface Filter {}

export class ReservationsFilter implements Filter {
    private category: Category | null = null;
    private item: Resource | null = null;
    private itemisConsumable: boolean | null = null;
    private person: Person | null = null;
    private personIsStaff: boolean | null = null;
    private personIsStudent: boolean | null = null;
    private personFaculty: string | null = null;
    private reservationSupervisor: Person | null = null;
    private reservationResponder: Person | null = null;
    private reservationIsPending: boolean | null = null;
    private reservationAmountOfRequiredApprovals: number | null = null;
    private reservationIsReleased: boolean | null = null;
    private reservationIsReturned: boolean | null = null;
    private reservationStartsAfter: Date | null = null;
    private reservationEndsBefore: Date | null = null;
    private reservationCreatedAfter: Date | null = null;
    private reservationCreatedBefore: Date | null = null;
    private reservationUpdatedAfter: Date | null = null;
    private reservationUpdatedBefore: Date | null = null;

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