import { Dto } from "../dto";

export class Category implements Dto{
    #id: number;
    #categoryName: string;
    #parentId: number | null;

    constructor(id: number, label: string, parentId: number | null) {
        this.#id = id;
        this.#categoryName = label;
        this.#parentId = parentId;
    }

    getId(): number { return this.#id; }
    getLabel(): string { return this.#categoryName; }
    getParentId(): number | null { return this.#parentId; }
}