export interface Dto {
    getId(): number;
    getLabel(): string;
} 

export class Category implements Dto{
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

export class Resource implements Dto {
    private id: number;
    private itemName: string;
    private categoryId: number | null;
    private internalTagOrStatusRemarks?: string;
    private externalRemarks?: string;
    private updateTime?: Date;
    private isConsumable?: boolean;

    constructor(id: number, label: string, categoryId?: number | null,
        intRemarks?: string, extRemarks?: string, updateTime?: Date, isConsumable?: boolean
    ) {
        this.id = id;
        this.itemName = label;
        this.categoryId = typeof categoryId !== typeof undefined ? <number | null> categoryId : null;

        this.internalTagOrStatusRemarks = intRemarks;
        this.externalRemarks = extRemarks;
        this.updateTime = updateTime;
        this.isConsumable = isConsumable;
    }

    getId(): number { return this.id; }
    getLabel(): string { return this.itemName; }
    getCategoryId(): number | null { return this.categoryId; }

    getIntRemarks(): string | undefined { return this.internalTagOrStatusRemarks; }
    getExtRemarks(): string | undefined { return this.externalRemarks; }
    getUpdateTime(): Date | undefined { return this.updateTime; }
    getIsConsumable(): boolean | undefined { return this.isConsumable; }
}

export class Consumable extends Resource {
    private valuePerAmt: number | undefined;
    private valueUnit: string | undefined;
    private amountIn: number | undefined;
    private amountOut: number | undefined;
    private amountBal: number | undefined;
    private amountUnit: string | undefined;
    private nextInAmt: number | undefined;
    private nextInDate: Date | undefined;
    private datePurchased: Date | undefined;
    private expiryDate: Date | undefined;

    constructor(id: number, label: string, categoryId?: number | null, intRemarks?: string, extRemarks?: string, updateTime?: Date, isConsumable?: boolean,
        valuePerAmt?: number, valueUnit?: string, amountIn?: number, amountOut?: number, amountBal?: number,
        amountUnit?: string, nextInAmt?: number, nextInDate?: Date, datePurchased?: Date, expiryDate?: Date
    ) {
        super(id, label, categoryId, intRemarks, extRemarks, updateTime, isConsumable);

        this.valuePerAmt = valuePerAmt;
        this.valueUnit = valueUnit;
        this.amountIn = amountIn;
        this.amountOut = amountOut;
        this.amountBal = amountBal;
        this.amountUnit = amountUnit;
        this.nextInAmt = nextInAmt;
        this.nextInDate = nextInDate;
        this.datePurchased = datePurchased;
        this.expiryDate = expiryDate;
    }

    getValuePerAmt(): number | undefined { return this.valuePerAmt; }
    getValueUnit(): string | undefined { return this.valueUnit; }
    getAmountIn(): number | undefined { return this.amountIn; }
    getAmountOut(): number | undefined { return this.amountOut; }
    getAmountBal(): number | undefined { return this.amountBal; }
    getAmountUnit(): string | undefined { return this.amountUnit; }
    getNextInAmt(): number | undefined { return this.nextInAmt; }
    getNextInDate(): Date | undefined { return this.nextInDate; }
    getDatePurchased(): Date | undefined { return this.datePurchased; }
    getExpiryDate(): Date | undefined { return this.expiryDate; }
}

export class NonConsumable extends Resource {
    private isAvailable?: boolean;
    private isBlocked?: boolean;
    private isOutOfOrder?: boolean;
    private isFaulty?: boolean;
    private brand?: string;
    private model?: string;
    private equipmentNumber?: string;
    private serialNumber?: string;
    private assigneeId?: number;

    constructor(id: number, label: string, categoryId?: number | null, intRemarks?: string, extRemarks?: string, updateTime?: Date, isConsumable?: boolean,
        isAvailable?: boolean, isBlocked?: boolean, isOutOfOrder?: boolean, isFaulty?: boolean, brand?: string,
        model?: string , equipmentNumber?: string, serialNumber?: string, assigneeId?: number
    ) {
        super(id, label, categoryId, intRemarks, extRemarks, updateTime, isConsumable);
        this.isAvailable = isAvailable;
        this.isBlocked = isBlocked;
        this.isOutOfOrder = isOutOfOrder;
        this.isFaulty = isFaulty;
        this.brand = brand;
        this.model = model;
        this.equipmentNumber = equipmentNumber;
        this.serialNumber = serialNumber;
        this.assigneeId = assigneeId;
    }

    getIsAvailable(): boolean | undefined { return this.isAvailable; }
    getIsBooked(): boolean | undefined { return this.isBlocked; }
    getIsOutOfOrder(): boolean | undefined { return this.isOutOfOrder; }
    getIsFaulty(): boolean | undefined { return this.isFaulty; }
    getBrand(): string | undefined { return this.brand; } 
    getModel(): string | undefined { return this.model; }
    getEquipmentNumber(): string | undefined { return this.equipmentNumber; }
    getSerialNumber(): string | undefined { return this.serialNumber; }
    getAssigneeId(): number | undefined { return this.assigneeId; } 
}

