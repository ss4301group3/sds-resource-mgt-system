import { CategoryDtos, Dtos, PersonDtos, ReservationDtos, ResourceDtos } from "../../abstractions/dto";
import { Category, RawCategory } from "../../abstractions/dto/Category";
import { RawResource, Resource  } from "../../abstractions/dto/Item"
import { Person } from "../../abstractions/dto/Person";
import { Reservation }from "../../abstractions/dto/Reservation";
import { MessageBox } from "../App/MessageBox";
import { fetchInwardCategories, fetchInwardConsumablesPublic, fetchInwardNonConsumablesPublic } from "../Auth";
import { ReservationFilter } from "./ReservationFilter";

export class Fetch {
    static async Persons(): Promise<PersonDtos> {
        try {
            throw Error("Code not yet specified")
        } catch (error: any) {
            MessageBox.writeMessage(error.message, "Unable to fetch resource from server: " + error.message, true, 3000);
        }
        return getMockPersons();
    }
    static async Categories(): Promise<CategoryDtos> {
        const categories: CategoryDtos = {};
        try {
            const rawData = await fetchInwardCategories();
            Object.entries(rawData).forEach(([id, info]) => {
                const rawCat = <RawCategory> info;
                const cat = new Category(rawCat.id, rawCat.categoryName, rawCat.parentId);
                categories[cat.getId()] = cat;
            });
        } catch (error: any) {
            MessageBox.writeMessage(error.message, "Unable to fetch resource from server: " + error.message, true, 3000);
        }

        return categories;
    }
    static async Consumables(mainCollection?: ResourceDtos): Promise<ResourceDtos> {
        const resources: ResourceDtos = mainCollection ? mainCollection : {};
        try {
            const rawData = await fetchInwardConsumablesPublic();
            Object.entries(rawData).forEach(([id, info]) => {
                const rawRes = <RawResource> info;
                const res = new Resource(rawRes.id, rawRes.itemName, rawRes.categoryId, rawRes.internalTagOrStatusRemarks, rawRes.externalRemarks, rawRes.updateTime, rawRes.isConsumable);
                resources[res.getId()] = res;
            });
        } catch (error: any) {
            MessageBox.writeMessage(error.message, "Unable to fetch resource from server: " + error.message, true, 3000);
        }

        return resources;
    }
    static async NonConsumables(mainCollection?: ResourceDtos): Promise<ResourceDtos> {
        const resources: ResourceDtos = mainCollection ? mainCollection : {};
        try {
            const rawData = await fetchInwardNonConsumablesPublic();
            Object.entries(rawData).forEach(([id, info]) => {
                const rawRes = <RawResource> info;
                const res = new Resource(rawRes.id, rawRes.itemName, rawRes.categoryId, rawRes.internalTagOrStatusRemarks, rawRes.externalRemarks, rawRes.updateTime, rawRes.isConsumable);
                resources[res.getId()] = res;
            });
        } catch (error: any) {
            MessageBox.writeMessage(error.message, "Unable to fetch resource from server: " + error.message, true, 3000);
        }

        return resources;
    }
    static async Resources(): Promise<ResourceDtos>{
        const resources: ResourceDtos = {};
        try {
            await this.Consumables(resources);
            await this.NonConsumables(resources);
        } catch (error: any) {
            MessageBox.writeMessage(error.message, "Unable to fetch resource from server: " + error.message, true, 3000);
        }
        return resources;
    }
    static async Reservations(): Promise <ReservationDtos> {
        try {
            const filter = ReservationFilter.get(); //send this to the server
            throw Error("Code not yet specified; Using dummies instaead.")
        } catch (error: any) {
            MessageBox.writeMessage(error.message, "Unable to fetch resource from server: " + error.message, true, 3000);
        }
        return getMockReservations();
    }
}

function getMockCategories(): CategoryDtos {
    return {
        0: new Category(0, "Furniture", null),
        1: new Category(1, "Electronics", null),
        2: new Category(2, "Tablets", 1),
        3: new Category(3, "Laptops", 1),
        4: new Category(4, "Desks", 0),
    }
}
function getMockPersons(): PersonDtos {
    return {
        0: new Person(0, "82e75c7e-523b-4a71-9f7c-0d141d107b19", "Abdul Wafi Bin Haji Ismail", "17b2200@ubd.edu.bn", "FOS", null),
        1: new Person(1, "82e75c7e-523b-4a71-9f7c-0d141d107b18", "Dr Gregory House", "gregory.house@ubd.edu.bn", "IHS", "8888888"),
        2: new Person(2, "82e75c7e-523b-4a71-9f7c-0d141d107b17", "Dr James Wilson", "james.wilson@ubd.edu.bn", "IHS", "7777777"),
        3: new Person(3, "82e75c7e-523b-4a71-9f7c-0d141d107b16", "Georg Wilhelm Friedrich Hegel", "georg.hegel@ubd.edu.bn", "FOS", "6666666"),
        4: new Person(4, "82e75c7e-523b-4a71-9f7c-0d141d107b15", "Dr Alan Mathison Turing", "alan.turing@ubd.edu.bn", "SDS", "5555555"),
    }
}
function getMockResources(): ResourceDtos {
    return {
        0: new Resource(0, "Dummy Laptop A", 3, null, null, new Date(), false),
        1: new Resource(1, "Dummy Tab", 2, null, null, new Date(), false),
        2: new Resource(2, "Dummy Laptop B", 3, null, null, new Date(), false),
        3: new Resource(3, "Dummy Minitab", 2, null, null, new Date(), false),
        4: new Resource(4, "Dummy Desk", 4, null, null, new Date(), false),
        5: new Resource(5, "Dummy Table", 4, null, null, new Date(), false),
        6: new Resource(6, "Dummy Coffee Table", 4, null, null, new Date(), false),
        7: new Resource(7, "Dummy Laptop C", 3, null, null, new Date(), false),
    }
}
function getMockReservations(): ReservationDtos {
    let yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
    let tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1);
    let reservations: ReservationDtos = {
        0: new Reservation(0, "Dummy Tab", 1, "APB G.14",yesterday, true, tomorrow, false, 0, 4, 4, 3, null, true, true, true, false),
        1: new Reservation(1, "Dummy Minitab", 3, "APB G.14",yesterday, true, tomorrow, false, 0, 4, 4, 3, null, true, true, true, false),
        2: new Reservation(2, "Dummy Table", 5, "APB G.14",yesterday, true, tomorrow, false, 1, 4, 4, null, null, true, true, false, false),
    };

    return reservations;
}