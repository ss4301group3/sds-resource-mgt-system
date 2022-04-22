import { TIMEZONE_DIFF_GMT } from "../../../config";

export const FILTER_LABELS = [
    "Personal / Others'",
    "*Staff / Student",
    "*Faculty",
    "Status",
    "Released?",
    "Returned?",
    "Time Criterion",
    "Time Range",
    "Ascending / Descending",
]

const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
yesterday.setMilliseconds(0); yesterday.setSeconds(0); yesterday.setHours(yesterday.getHours() + TIMEZONE_DIFF_GMT);
const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1);
tomorrow.setMilliseconds(0); tomorrow.setSeconds(0); tomorrow.setHours(tomorrow.getHours() + TIMEZONE_DIFF_GMT);
class ReservationCriteria {
    personalOrRelevant: boolean = true;
    staffOrStudent: boolean | null = null;
    faculty: string = "";
    status: "Pending" | "Approved" | "Rejected" | "All" = "Pending";
    released: boolean | null = null;
    returned: boolean | null = null;
    timeCriterion: "Creation Time" | "Update Time" | "Start Time" | "End Time" | "Start-to-End Period" = "Creation Time";
    timeRange: [Date | null, Date | null] = [yesterday, tomorrow];
    timeAscending: boolean = false;
}

let criteria: ReservationCriteria = {
    personalOrRelevant: true,
    staffOrStudent: null,
    faculty: "",
    status: "Pending",
    released: null,
    returned: null,
    timeCriterion: "Creation Time",
    timeRange: [yesterday, tomorrow],
    timeAscending: false
}
export class ReservationFilter {
    static reset(): void {criteria = new ReservationCriteria}
    static get(): ReservationCriteria { return criteria; }
    static getCriterion(index: number) {
        if(index == 0) return criteria.personalOrRelevant;
        if(index == 1) return criteria.staffOrStudent;
        if(index == 2) return criteria.faculty;
        if(index == 3) return criteria.status;
        if(index == 4) return criteria.released;
        if(index == 5) return criteria.returned;
        if(index == 6) return criteria.timeCriterion;
        if(index == 7) return criteria.timeRange;
        if(index == 8) return criteria.timeAscending;
        return undefined;
    }
    static changeCriterion(index: number, param?: string | [Date | null, Date | null] | null) {
        if(index == 0) return this.toggleSelfOrOthers();
        if(index == 1) return this.toggleStaffOrStudent();
        if(index == 2) return this.setFaculty(<string>param);
        if(index == 3) return this.toggleStatus();
        if(index == 4) return this.toggleReleased();
        if(index == 5) return this.toggleReturned();
        if(index == 6) return this.toggleTimeCriteria();
        if(index == 7) return this.setTimeRange(
            (<[Date|null,Date|null]>param)[0],
            (<[Date|null,Date|null]>param)[1]
        );
        if(index == 8) return this.toggleTimeAscending();
        return undefined;
    }

    static getSelfOrOthers(): boolean {return criteria.personalOrRelevant}
    static toggleSelfOrOthers(): boolean {
        return criteria.personalOrRelevant = !criteria.personalOrRelevant;
    }

    static getStaffOrStudent(): boolean | null { return criteria.staffOrStudent; }
    static toggleStaffOrStudent(): boolean | null {
        if(criteria.staffOrStudent == true) return criteria.staffOrStudent = false;
        if(criteria.staffOrStudent == false) return criteria.staffOrStudent = null;
        return criteria.staffOrStudent = true;
    }

    static getFaculty(): string | null{ return criteria.faculty }
    static setFaculty(faculty: string): string | null { return criteria.faculty = faculty; }

    static getStatus(): "Pending" | "Approved" | "Rejected" | "All" { return criteria.status; }
    static toggleStatus(): "Pending" | "Approved" | "Rejected" | "All" {
        if(criteria.status == "Pending") return criteria.status = "Approved";
        if(criteria.status == "Approved") return criteria.status = "Rejected";
        if(criteria.status == "Rejected") return criteria.status = "All";
        else return criteria.status = "Pending";
    }

    static getReleased(): boolean | null { return criteria.released; }
    static toggleReleased(): boolean | null {
        if(criteria.released == true) return criteria.released = false;
        if(criteria.released == false) return criteria.released = null;
        return criteria.released = true;
    }

    static getReturned(): boolean | null { return criteria.released; }
    static toggleReturned(): boolean | null {
        if(criteria.returned == true) return criteria.returned = false;
        if(criteria.returned == false) return criteria.returned = null;
        return criteria.returned = true;
    }

    static getTimeCriteria(): "Creation Time" | "Update Time" | "Start Time" | "End Time" | "Start-to-End Period" {
        return criteria.timeCriterion;
    }
    static toggleTimeCriteria(): "Creation Time" | "Update Time" | "Start Time" | "End Time" | "Start-to-End Period" {
        if(criteria.timeCriterion == "Creation Time") return criteria.timeCriterion = "Update Time";
        if(criteria.timeCriterion == "Update Time") return criteria.timeCriterion = "Start Time";
        if(criteria.timeCriterion == "Start Time") return criteria.timeCriterion = "End Time";
        if(criteria.timeCriterion == "End Time") return criteria.timeCriterion = "Start-to-End Period";
        else return criteria.timeCriterion = "Creation Time";
    }

    static getTimeRange(): [Date | null, Date | null] { return criteria.timeRange; }
    static setTimeRange(lowerBound: Date | null, upperBound: Date | null): [Date | null, Date | null] {
        return criteria.timeRange = [lowerBound, upperBound];
    }

    static getTimeAscending(): boolean { return criteria.timeAscending; }
    static toggleTimeAscending(): boolean {
        return criteria.timeAscending = !criteria.timeAscending;
    }
}