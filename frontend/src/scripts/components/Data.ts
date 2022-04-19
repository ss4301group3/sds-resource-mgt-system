import { Resource } from "../abstractions/dto/Item";
import { Fetch } from "./Data/Fetch";
import { signInAttemptExecuted } from "./Auth/AuthModule";
import { Pages } from "./Pages";
import { Dto } from "../abstractions/dto";
import { Category } from "../abstractions/dto/Category";

type CategoryDtos = {[id: number]: Category}
type CategoryGroups = {[id: number]: CategoryDtos}
type ResourceDtos = {[id: number]: Resource}
type ResourceGroups = {[id: number]: ResourceDtos}

let categories: CategoryDtos = {};
let categoryGroups: CategoryGroups = {};
let categoryNonGroup: CategoryDtos = {};
let resources: ResourceDtos = {};
let resourceGroups: ResourceGroups = {};
let resourceNonGroup: ResourceDtos = {};

export class Data {
    static async init(): Promise<void> {
        categories = await Fetch.Categories();
        resources = await Fetch.Resources();
        
        group(categories);
        group(resources);

        if(signInAttemptExecuted) this.forceRerenderView();
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