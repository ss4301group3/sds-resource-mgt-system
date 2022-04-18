import { Category, Resource  } from "../../abstractions/dto"

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
        2: new Category(2, "Tablets", 1),
        3: new Category(3, "Laptops", 1),
        4: new Category(4, "Desks", 0),
    }
}
function getMockResources(): {[id: number]: Resource} {
    return {
        0: new Resource(0, "Dummy Makebook Error", 3),
        1: new Resource(1, "Dummy Galaxy NOT", 2),
        2: new Resource(2, "Dummy Probbook", 3),
        3: new Resource(3, "Dummy Surface Bro", 2),
        4: new Resource(4, "Dummy Desk", 4),
        5: new Resource(5, "Dummy Table", 4),
        6: new Resource(6, "Dummy Coffee Table", 4),
        7: new Resource(7, "Dummy Laptop", 3),
    }
}