import { Dto } from "../dto";

export class Person implements Dto{
    private id: number;
    private graphId: string | null;
    private displayName: string | null;
    private email: string | null;
    private faculty: string | null;
    private phone: string | null;

    constructor(personId: number, graphId: string | null, displayName: string | null,
        email: string | null, faculty: string | null, phone: string | null
    ) {
        this.id = personId;
        this.graphId = graphId;
        this.displayName = displayName;
        this.email = email;
        this.faculty = faculty;
        this.phone = phone;
    }

    getId(): number { return this.id; }
    getGraphId(): string | null { return this.graphId; }
    getDisplayName(): string | null { return this.displayName; }
    getLabel(): string { return this.displayName ? this.displayName : `User#${this.id}`; }
    getEmail(): string | null { return this.email; }
    getFaculty(): string | null { return this.faculty; }
    getPhone(): string | null { return this.phone; }
}