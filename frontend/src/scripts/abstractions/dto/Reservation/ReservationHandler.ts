import { Data } from "../../../components/Data";
import { Reservation } from "../Reservation";

export class ReservationHandler {
    static Cluster = {
        getData(dto: Reservation): ClusterData {
            const personId = dto.getPersonId();

            const personData = Data.getPersonbyId(personId);
            const personInfo = <string> (personData ? personData.getDisplayName() : personId.toString());
            
            const start = dto.getStartTime();
            const end = dto.getEndTime();
            const data = {
                id: `${personId}${start.toISOString()}${end.toISOString()}`,
                period: `${getDateTimeString(start)} ~ ${getDateTimeString(end)}`,
                personId: personId,
                personInfo: personInfo
            }
            return data;
        },
        getId(dto: Reservation): string {
            const start = dto.getStartTime();
            const end = dto.getEndTime();
            return  `${dto.getPersonId()}${start.toISOString()}${end.toISOString()}`;
        }
    }
    static Dto = {
        getPublicLabels(): Array<string> {
            return [
                "Item name",
                "Released?",
                "Returned?",
                "Supervisor",
                "Status"
            ];
        },
        getPublicData(dto: Reservation): Array<string> {
            const isPending = dto.getIsPending() && !dto.getIsApproved3();

            const isRejected = !dto.getIsPending() && !dto.getIsApproved3();

            const approvals = (
                (dto.getIsApproved1() ? 1 : 0)+
                (dto.getIsApproved2() ? 1 : 0)+
                (dto.getIsApproved3() ? 1 : 0)
            ).toString() + "/3";

            const isApproved = dto.getIsApproved3();

            const status = (
                isPending ? "Pending " + approvals :
                isRejected ? "Rejected" :
                isApproved ? "Approved" : "?"
            );

            return [
                dto.getItemName(),
                dto.getIsReleased() ? "Yes" : "No",
                dto.getIsReturned() ? "Yes" : "No",
                dto.getSupervisorId() ? "Not assigned" : (<number>dto.getSupervisorId()).toString(),
                status
            ];
        }
    }
}

export type ClusterData = {id: string, period: string, personId: number, personInfo: string }

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDateTimeString(time: Date) {return getDateString(time) + "," + getTimeString(time)};
function getDateString(time: Date) { return time.getDate() + "-" + MONTH_NAMES[time.getMonth()] + "-" + time.getFullYear(); }
function getTimeString(time: Date) { return time.getHours()%12 + ":" + time.getMinutes().toString().padStart(2,'0') + (time.getHours() >= 12 ? "pm" : "am"); }