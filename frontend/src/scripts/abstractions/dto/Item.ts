import { Dto } from "../dto";

export class Resource implements Dto {
    private id: number;
    private itemName: string;
    private categoryId: number;
    private internalTagOrStatusRemarks: string | null;
    private externalRemarks: string | null;
    private updateTime: Date ;
    private isConsumable: boolean;

    constructor(itemId: number, itemName: string, categoryId: number,
        intRemarks: string | null, extRemarks: string | null, updateTime: Date, isConsumable: boolean
    ) {
        this.id = itemId;
        this.itemName = itemName;
        this.categoryId =  categoryId;

        this.internalTagOrStatusRemarks = intRemarks;
        this.externalRemarks = extRemarks;
        this.updateTime = updateTime;
        this.isConsumable = isConsumable;
    }

    getId(): number { return this.id; }
    getLabel(): string { return this.itemName; }
    getCategoryId(): number { return this.categoryId; }

    getIntRemarks(): string | null { return this.internalTagOrStatusRemarks; }
    getExtRemarks(): string | null { return this.externalRemarks; }
    getUpdateTime(): Date { return this.updateTime; }
    getIsConsumable(): boolean { return this.isConsumable; }
}

export class Consumable extends Resource {
    private valuePerAmt: number;
    private valueUnit: string | null;
    private amountIn: number;
    private amountOut: number;
    private amountBal: number;
    private amountUnit: string | null;
    private nextInAmt: number | null;
    private nextInDate: Date | null;
    private datePurchased: Date | null;
    private expiryDate: Date | null;

    constructor(itemId: number, itemName: string, categoryId: number, intRemarks: string | null, extRemarks: string | null,
        updateTime: Date, isConsumable: boolean,
        valuePerAmount: number, valueUnit: string | null, amountIn: number, amountOut: number, amountBal: number,
        amountUnit: string | null, nextInAmt: number | null, nextInDate: Date | null, datePurchased: Date | null, expiryDate: Date | null
    ) {
        super(itemId, itemName, categoryId, intRemarks, extRemarks, updateTime, isConsumable);

        this.valuePerAmt = valuePerAmount;
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

    getValuePerAmt(): number | null { return this.valuePerAmt; }
    getValueUnit(): string | null { return this.valueUnit; }
    getAmountIn(): number | null { return this.amountIn; }
    getAmountOut(): number | null { return this.amountOut; }
    getAmountBal(): number | null { return this.amountBal; }
    getAmountUnit(): string | null { return this.amountUnit; }
    getNextInAmt(): number | null { return this.nextInAmt; }
    getNextInDate(): Date | null { return this.nextInDate; }
    getDatePurchased(): Date | null { return this.datePurchased; }
    getExpiryDate(): Date | null { return this.expiryDate; }
}

export class NonConsumable extends Resource {
    private isAvailable: boolean;
    private isBlocked: boolean;
    private isOutOfOrder: boolean;
    private isFaulty: boolean;
    private brand: string | null;
    private model: string | null;
    private equipmentNumber: string | null;
    private serialNumber: string | null;
    private assigneeId: number | null;

    constructor(id: number, label: string, categoryId: number, intRemarks: string | null, extRemarks: string | null, updateTime: Date, isConsumable: boolean,
        isAvailable: boolean, isBlocked: boolean, isOutOfOrder: boolean, isFaulty: boolean, brand: string | null,
        model: string | null , equipmentNumber: string | null, serialNumber: string | null, assigneeId: number | null
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

    getIsAvailable(): boolean { return this.isAvailable; }
    getIsBooked(): boolean { return this.isBlocked; }
    getIsOutOfOrder(): boolean { return this.isOutOfOrder; }
    getIsFaulty(): boolean { return this.isFaulty; }
    getBrand(): string | null { return this.brand; } 
    getModel(): string | null { return this.model; }
    getEquipmentNumber(): string | null { return this.equipmentNumber; }
    getSerialNumber(): string | null { return this.serialNumber; }
    getAssigneeId(): number | null { return this.assigneeId; } 
}

