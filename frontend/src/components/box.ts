interface RenderOption { render(box: Box): void; }
class TileRenderOption implements RenderOption {
    render(box: Box): void {
        console.log("Render in Tile Mode");
    }
}
class RowRenderOption implements RenderOption {
    render(box: Box): void {
        console.log("Render in Row Mode");
    }
}

interface ViewOption { view(): void; }
class NoViewOption implements ViewOption {
    view(): void {
        console.log("Do nothing");
    }
}
class CommonViewOption implements ViewOption {
    view(): void {
        console.log("View in Normal Mode");
    }
}
class PrivilegedViewOption implements ViewOption {
    view(): void {
        console.log("View in Privileged Mode");
    }
}

interface EditOption { edit(): void; }
class NoEditOption implements EditOption {
    edit(): void {
        console.log("Do nothing");
    }
}
class CommonEditOption implements EditOption {
    edit(): void {
        console.log("Edit in Normal Mode");
    }
}

interface DeleteOption { delete(): void; }
class NoDeleteOption implements DeleteOption {
    delete(): void {
        console.log("Do nothing");
    }
}
class CommonDeleteOption implements DeleteOption {
    delete(): void {
        console.log("Do nothing");
    }
}

interface BoxFactory {
    assignViewOption(): ViewOption;
    assignEditOption(): EditOption;
    assignDeleteOption(): DeleteOption;
}
class ViewOnlyBoxFactory implements BoxFactory{
    assignViewOption(): ViewOption { return new NoViewOption(); }
    assignEditOption(): EditOption { return new NoEditOption(); }
    assignDeleteOption(): DeleteOption { return new NoDeleteOption(); }
}
class CommonBoxFactory implements BoxFactory{
    assignViewOption(): ViewOption { return new CommonViewOption(); }
    assignEditOption(): EditOption { return new NoEditOption(); }
    assignDeleteOption(): DeleteOption { return new NoDeleteOption(); }
}
class AdminBoxFactory implements BoxFactory{
    assignViewOption(): ViewOption { return new PrivilegedViewOption(); }
    assignEditOption(): EditOption { return new CommonEditOption(); }
    assignDeleteOption(): DeleteOption { return new CommonDeleteOption(); }
}

abstract class Box {
    #id: number;
    #parentId: number;
    #label: string;
    #properties: { [key: string]: string } = {};

    #viewOption: ViewOption;
    #editOption: EditOption;
    #deleteOption: DeleteOption;

    abstract makeBox(displayMode: string): void;

    setId(id: number): void { this.#id = id; }
    setParentId(parentId: number): void { this.#parentId = parentId; }
    setLabel(label: string): void { this.#label = label; }
    setProperty(propertyName: string, propertyValue: string): void { this.#properties[propertyName] = propertyValue; }
    setProperties(properties: { [key: string]: string }): void { this.#properties = properties; }

    setViewOption(viewOption: ViewOption): void { this.#viewOption = viewOption; }
    setEditOption(editOption: EditOption): void { this.#editOption = editOption; }
    setDeleteOption(deleteOption: DeleteOption): void { this.#deleteOption = deleteOption; }

    getId(): number { return this.#id; }
    getParentId(): number { return this.#parentId; }
    getLabel(): string { return this.#label; }
    getProperty(propertyName: string): string { return this.#properties[propertyName]; }
    getProperties(): { [key: string]: string } { return this.#properties; }

    render(renderOption: RenderOption): void { renderOption.render(this); }

    executeViewOption(): void { this.#viewOption.view() };
    executeEditOption(): void { this.#editOption.edit() };
    executeDeleteOption(): void { this.#deleteOption.delete() };
}
class ViewOnlyBox extends Box {
    #boxFactory: BoxFactory;

    constructor(boxFactory: BoxFactory) {
        super();
        this.#boxFactory = boxFactory;
    }

    makeBox(displayMode: string): void {
        this.setViewOption(this.#boxFactory.assignViewOption());
        this.setEditOption(this.#boxFactory.assignEditOption());
        this.setDeleteOption(this.#boxFactory.assignDeleteOption());

        this.render(displayMode == "Tile"? new TileRenderOption() : new RowRenderOption());
    }
}