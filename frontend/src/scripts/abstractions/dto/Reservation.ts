import { Dto, ReservationDtos } from "../dto";

export class Reservation implements Dto {
    private id: number;
    private itemName: string;
    private itemId: number;
    private loanLocation: string | null;
    private startTime: Date;
    private isReleased: boolean;
    private endTime: Date;
    private isReturned: boolean;
    private personId: number;
    private supervisorId: number | null;
    private responderId1: number | null;
    private responderId2: number | null;
    private responderId3: number | null;
    private isPending: boolean;
    private isApproved1: boolean;
    private isApproved2: boolean;
    private isApproved3: boolean;

    constructor(id: number, itemName: string, itemId: number, loanLocation: string | null, startTime: Date,
        isReleased: boolean, endTime: Date, isReturned: boolean, personId: number, supervisorId: number | null,
        responderId1: number | null, responderId2: number | null, responderId3: number | null,
        isPending: boolean, isApproved1: boolean, isApproved2: boolean, isApproved3: boolean
    ) {
        this.id = id;
        this.itemName = itemName;
        this.itemId = itemId;
        this.loanLocation = loanLocation;
        this.startTime = startTime;
        this.isReleased = isReleased;
        this.endTime = endTime;
        this.isReturned = isReturned;
        this.personId = personId;
        this.supervisorId = supervisorId;
        this.responderId1 = responderId1;
        this.responderId2 = responderId2;
        this.responderId3 = responderId3;
        this.isPending = isPending;
        this.isApproved1 = isApproved1;
        this.isApproved2 = isApproved2;
        this.isApproved3 = isApproved3;
    }
    
    getId(): number { return this.id; }

    getLabel(): string {
        return this.itemName
    }

    getItemName(): string { return this.itemName; }
    getItemId(): number { return this.itemId; }
    getLoanLocation(): string | null { return this.loanLocation; }
    getStartTime(): Date { return this.startTime; }
    getIsReleased(): boolean { return this.isReleased; }
    getEndTime(): Date { return this.endTime; }
    getIsReturned(): boolean { return this.isReturned; }
    getPersonId(): number { return this.personId; }
    getSupervisorId(): number | null { return this.supervisorId; }
    getResponderId1(): number | null { return this.responderId1; }
    getResponderId2(): number | null { return this.responderId2; }
    getResponderId3(): number | null { return this.responderId3; }
    getIsPending(): boolean { return this.isPending; }
    getIsApproved1(): boolean { return this.isApproved1; }
    getIsApproved2(): boolean { return this.isApproved2; }
    getIsApproved3(): boolean { return this.isApproved3; }
}

export type ClusterData = {id: string, period: string, personId: number }
export function extractReservationClusterData(dto: Reservation): ClusterData {
    const personId = dto.getPersonId();
    const start = dto.getStartTime();
    const end = dto.getEndTime();
    const data = {
        id: `${personId}${start.toISOString()}${end.toISOString()}`,
        period: `${getDateTimeString(start)} ~ ${getDateTimeString(end)}`,
        personId: personId,
    }
    return data;
}
export function extractReservationClusterId(dto: Reservation): string {
    const start = dto.getStartTime();
    const end = dto.getEndTime();
    return  `${dto.getPersonId()}${start.toISOString()}${end.toISOString()}`;
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDateTimeString(time: Date) {return getDateString(time) + "," + getTimeString(time)};
function getDateString(time: Date) { return time.getDate() + "-" + MONTH_NAMES[time.getMonth()] + "-" + time.getFullYear(); }
function getTimeString(time: Date) { return time.getHours()%12 + ":" + time.getMinutes().toString().padStart(2,'0') + (time.getHours() >= 12 ? "pm" : "am"); }