export class Category {
    #id: number;
    #label: string;
    #parentId: number | null;

    constructor(id: number, label: string, parentId?: number | null) {
        this.#id = id;
        this.#label = label;
        this.#parentId = typeof parentId !== typeof undefined ? <number | null> parentId : null;
    }

    getId(): number { return this.#id; }
    getLabel(): string { return this.#label; }
    getParentId(): number | null { return this.#parentId; }
}

export class Resource {
    #id: number;
    #label: string;
    #categoryId: number | null;

    constructor(id: number, label: string, categoryId?: number | null) {
        this.#id = id;
        this.#label = label;
        this.#categoryId = typeof categoryId !== typeof undefined ? <number | null> categoryId : null;
    }

    getId(): number { return this.#id; }
    getLabel(): string { return this.#label; }
    getCategory(): number | null { return this.#categoryId; }
}