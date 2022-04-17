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
    getparentId(): number | null { return this.#parentId; }
}