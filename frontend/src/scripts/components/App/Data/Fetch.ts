import { Category, Resource  } from "../../../abstractions/dto"

export class Fetch {
    static async getCategory(parentId?: number) {
        return getMockCategories();
    }
    static async getResources(categoryId?: number) {
        return getMockResources();
    }
}

function getMockCategories(): {[id: number]: Category} {
    return {
        0: new Category(0, "Furniture", null),
        1: new Category(1, "Electronics", null),
    }
}
function getMockResources(): {[id: number]: Resource} {
    return {
        0: new Resource(0, "Dummy Item A", null),
        1: new Resource(1, "Dummy Item B", null),
    }
}