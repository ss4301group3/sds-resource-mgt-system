import { makeDivWithClass, makeTableRowWithClass } from "./utils/html";
interface RenderOption {
    render(box: Box): HTMLElement;
}
class TileRenderOption implements RenderOption {
    render(box: Box): HTMLDivElement {
        const htmlNode = makeDivWithClass("box-component tile");

        let innerHTMLString: string =
        `<span class="box-component-label">
            ${box.getLabel()}
        </span>`;

        Object.entries(box.getProperties()).forEach(([key, value]) => {
            innerHTMLString += `<p class="box-component-data">${key}: ${value}</p>`;
        });

        htmlNode.innerHTML = innerHTMLString

        return htmlNode;
    }
}
class RowRenderOption implements RenderOption {
    render(box: Box): HTMLTableRowElement {
        const htmlNode = makeTableRowWithClass("box-component row");

        let innerHTMLString: string =
        `<td class="box-component-label">
            ${box.getLabel()}
        </td>`;

        Object.entries(box.getProperties()).forEach(([key, value]) => {
            innerHTMLString += `<td class="box-component-data">${value}</td>`;
        });

        htmlNode.innerHTML = innerHTMLString

        return htmlNode;
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

export class BoxData {
    #id: number;
    #parentId: number;
    #label: string;

    #properties: { [key: string]: string };

    constructor(id: number, parentId: number, label: string, properties: { [key: string]: string }){
        this.#id = id;
        this.#parentId = parentId;
        this.#label = label;
        this.#properties = properties ? properties : {};
    }
    setProperty(propertyName: string, propertyValue: string): void { this.#properties[propertyName] = propertyValue; }

    getId(): number { return this.#id; }
    getParentId(): number { return this.#parentId; }
    getLabel(): string { return this.#label; }
    getProperty(propertyName: string): string { return this.#properties[propertyName]; }
    getProperties(): { [key: string]: string } { return this.#properties; }
}

export abstract class Box {
    #data: BoxData;

    #htmlNode: Node;

    #renderOption: RenderOption;

    #viewOption: ViewOption;
    #editOption: EditOption;
    #deleteOption: DeleteOption;

    abstract makeBox(displayMode: string): void;
    
    setData(data: BoxData): void { this.#data = data};
    setProperty(propertyName: string, propertyValue: string): void {
        this.#data.setProperty(propertyName, propertyValue);
        this.render();
    }

    appendThisHTMLTo(parentNode: Node): void { parentNode.appendChild(this.#htmlNode); }
    appendBoxChild(childBox: Box): void { childBox.appendThisHTMLTo(this.#htmlNode); }

    setRenderOption(renderOption: RenderOption): void { this.#renderOption = renderOption; }

    setViewOption(viewOption: ViewOption): void { this.#viewOption = viewOption; }
    setEditOption(editOption: EditOption): void { this.#editOption = editOption; }
    setDeleteOption(deleteOption: DeleteOption): void { this.#deleteOption = deleteOption; }

    getId(): number { return this.#data.getId(); }
    getParentId(): number { return this.#data.getParentId(); }
    getLabel(): string { return this.#data.getLabel(); }
    getProperty(propertyName: string): string { return this.#data.getProperty(propertyName); }
    getProperties(): { [key: string]: string } { return this.#data.getProperties(); }

    render(): void {
        let newNode: Node = this.#renderOption.render(this);

        if (this.#htmlNode && this.#htmlNode.parentNode) {
            const parentNode: Node = this.#htmlNode.parentNode;
            parentNode.insertBefore(newNode, this.#htmlNode);
            this.#htmlNode.parentNode.removeChild(this.#htmlNode);
        }

        this.#htmlNode = newNode;
    }

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

        this.setRenderOption(displayMode == "Tile"? new TileRenderOption() : new RowRenderOption());

        this.render();
    }
}

export abstract class BoxBuilder {
    abstract makeBox(typeOfBox: string, boxData: BoxData): Box;

    orderABox(typeOfBox: string, displayMode: string, boxData: BoxData): Box {
        const theBox: Box = this.makeBox(typeOfBox, boxData);
        theBox.makeBox(displayMode);

        return theBox;
    }
}
export class OrderABox extends BoxBuilder {
    makeBox(typeOfBox: string, boxData: BoxData) {
        let theBox: Box;

        if(typeOfBox == "View Only") {
            const boxFactory: BoxFactory = new ViewOnlyBoxFactory();
            theBox = new ViewOnlyBox(boxFactory);
            theBox.setData(boxData);
        }
        else {
            const boxFactory: BoxFactory = new ViewOnlyBoxFactory();
            theBox = new ViewOnlyBox(boxFactory);
            theBox.setData(boxData);
        }

        return theBox;
    }
}