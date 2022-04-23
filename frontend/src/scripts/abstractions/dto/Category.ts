import { Dto } from "../dto";

export type RawCategory = {
    id: number,
    categoryName: string,
    parentId: number | null,
}
export class Category implements Dto{
    private id: number;
    private categoryName: string;
    private parentId: number | null;

    constructor(id: number, label: string, parentId: number | null) {
        this.id = id;
        this.categoryName = label;
        this.parentId = parentId;
    }

    getId(): number { return this.id; }
    getLabel(): string { return this.categoryName; }
    getParentId(): number | null { return this.parentId; }
    get(propertyLabel: string): number | string | Date | Function {
        return this[propertyLabel as keyof Category]
    }
}