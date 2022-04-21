import { Fetch } from "./Data/Fetch";
import { signInAttemptExecuted } from "./Auth/AuthModule";
import { Pages } from "./Pages";
import { CategoryDtos, CategoryGroups, Dto, PersonDtos, ReservationDtos, ResourceDtos, ResourceGroups } from "../abstractions/dto";
import { Category } from "../abstractions/dto/Category";
import { Person } from "../abstractions/dto/Person";

let persons: PersonDtos = {};
let categories: CategoryDtos = {};
let categoryGroups: CategoryGroups = {};
let categoryNonGroup: CategoryDtos = {};
let resources: ResourceDtos = {};
let resourceGroups: ResourceGroups = {};
let resourceNonGroup: ResourceDtos = {};
let reservations: ReservationDtos = {};

export class Data {
    static async init(): Promise<void> {
        categories = await Fetch.Categories();
        resources = await Fetch.Resources();
        /*temp*/ this.initPersons();
        
        group(categories);
        group(resources);

        if(signInAttemptExecuted) this.forceRerenderView();
    }

    static async initPersons(): Promise<void> {
        persons = await Fetch.Persons();
    }

    static getPersonbyId(id: number): Person | null {
        if(persons[id]) return persons[id];
        else return null;
    }

    static getParent(dto: Category) {
        const pId = dto.getParentId();
        if(pId != null)
            return categories[pId];

        return dto;
    }
    static getCategories(category?: Dto) {
        if(category) {
            if(categoryGroups[category.getId()])
                return categoryGroups[category.getId()];

            return {};
        }
        return categoryNonGroup;
    }
    static getResources(category?: Dto) {
        if(category) {
            if(resourceGroups[category.getId()])
                return resourceGroups[category.getId()];

            return {};
        }
        return resourceNonGroup;
    }
    static async getAsyncReservations(): Promise<ReservationDtos> {
        return Fetch.Reservations();
    }

    static forceRerenderView(): void {
        Pages.refresh();
    }
}

function group(dtos: CategoryDtos | ResourceDtos) {
    Object.entries(dtos).forEach(([id, dto]) => {
        let groupId: number | null = null;
        let groups: CategoryGroups | ResourceGroups = {};
        let nonGroup: CategoryDtos | ResourceDtos = {};

        if(dtos == categories) {
            groupId = dto.getParentId();
            groups = categoryGroups;
            nonGroup = categoryNonGroup;
        }
        if(dtos == resources) {
            groupId = dto.getCategoryId();
            groups = resourceGroups;
            nonGroup = resourceNonGroup;
        }

        if(groupId != null) {
            if(!groups[groupId]) {
                groups[groupId] = {};
            }

            groups[groupId][dto.getId()] = dto;
        }
        else {
            nonGroup[dto.getId()] = dto;
        }
    });
}