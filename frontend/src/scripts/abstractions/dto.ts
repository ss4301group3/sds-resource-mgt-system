import { Category } from "./dto/Category";
import { Resource } from "./dto/Item";
import { Person } from "./dto/Person";
import { Reservation } from "./dto/Reservation";

export interface Dto {
    getId(): number;
    getLabel(): string;
}
export type PersonDtos = {[id: number]: Person}
export type CategoryDtos = {[id: number]: Category}
export type CategoryGroups = {[id: number]: CategoryDtos}
export type ResourceDtos = {[id: number]: Resource}
export type ResourceGroups = {[id: number]: ResourceDtos}
export type ReservationDtos = {[id: number]: Reservation}