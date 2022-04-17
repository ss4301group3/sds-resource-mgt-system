import { Category  } from "../../../abstractions/dto"

export class Fetch {
    static async getCategory(id?: number) {
        return getMockCategories();
    }
}

function getMockCategories(): {[id: number]: Category} {
    return {
        0: new Category(0, "Furniture", null),
        1: new Category(0, "Electronics", null),
    }
}