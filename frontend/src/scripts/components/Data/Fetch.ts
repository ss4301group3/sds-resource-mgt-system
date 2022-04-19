import { Category } from "../../abstractions/dto/Category";
import { Resource  } from "../../abstractions/dto/Item"

export class Fetch {
    static async getCategory() {
        return getMockCategories();
    }
    static async getResources() {
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
        0: new Resource(0, "Dummy Make Book Err", 3, null, null, new Date(), false),
        1: new Resource(1, "Dummy Galaxynaut", 2, null, null, new Date(), false),
        2: new Resource(2, "Dummy Probbook", 3, null, null, new Date(), false),
        3: new Resource(3, "Dummy Surface Bro", 2, null, null, new Date(), false),
        4: new Resource(4, "Dummy Desk", 4, null, null, new Date(), false),
        5: new Resource(5, "Dummy Table", 4, null, null, new Date(), false),
        6: new Resource(6, "Dummy Coffee Table", 4, null, null, new Date(), false),
        7: new Resource(7, "Dummy Allenwhere", 3, null, null, new Date(), false),
    }
}