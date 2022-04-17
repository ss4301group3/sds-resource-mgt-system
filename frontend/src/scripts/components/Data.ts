import { Category, Resource } from "../abstractions/dto";
import { Fetch } from "./App/Data/Fetch";
import { signInAttemptExecuted } from "./Auth/AuthModule";
import { Pages } from "./Pages";

let categories: {[id: number]: Category} = {};
let resources: {[id: number]: Resource} = {};

export class Data {
    static async init(): Promise<void> {
        categories = await Fetch.getCategory();
        resources = await Fetch.getResources();
        if(signInAttemptExecuted) this.forceRerenderView();
    }

    static getCategories() { return categories; }
    static getResources() { return resources; }

    static forceRerenderView(): void {
        Pages.refresh();
    }
}