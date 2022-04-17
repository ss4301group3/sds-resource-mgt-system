import { Category } from "../abstractions/dto";
import { Fetch } from "./App/Data/Fetch";
import { Pages } from "./Pages";

let categories: {[id: number]: Category} = {};
let resources: {[id: number]: Category} = {};

export class Data {
    static async init(): Promise<void> {
        categories = await Fetch.getCategory();
        this.forceRerenderView();
    }

    static getCategories() { return categories; }
    static getResources() { return resources; }

    static forceRerenderView(): void {
        Pages.refresh();
    }
}