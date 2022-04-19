import { Dto, ReservationDtos } from "../../abstractions/dto";
import { ClusterData, extractReservationClusterData, extractReservationClusterId, Reservation } from "../../abstractions/dto/Reservation";
import { ElemGetter, getOrCreate, newElem, on } from "../../utils/html";
import { Data } from "../Data";

import "../../../stylesheets/components/pages/ReservationsPage.scss";

export class ReservationsPage {

    static getContent(): HTMLDivElement {
        const content = document.createElement("DIV") as HTMLDivElement;
        
        on(content).appendByGetters(getContent());

        return content;
    }

    static getRemarks(): HTMLDivElement {
        return getOrCreate("DIV") as HTMLDivElement;
    }

    static getTitle(): string {
        return "Reservations";
    }
}

function getContent(): Array<ElemGetter> {
    let getters: Array<ElemGetter> = [
        getReservationsTable
    ];
    return getters;
}

function getReservationsTable(dto?: Dto): HTMLTableElement {
    const table = getOrCreate("TABLE") as HTMLTableElement;

    const loader = getTableLoader();

    table.appendChild(loader);

    Data.getAsyncReservations()
    .then(data => {
        on(table).removeChildren();
        getRows(data).forEach(row => {
            table.appendChild(row);
        })
    })

    return table;
}

function getTableLoader(): HTMLTableCellElement {
    return newElem("TD", "Fetching data") as HTMLTableCellElement;
}
function getRows(dtos: ReservationDtos): Array<HTMLTableRowElement> {
    const clusters: {[clusterId: string]: [Reservation]} = {};
    let clusterData: ClusterData;

    const rows: Array<HTMLTableRowElement> = [];
    

    Object.entries(dtos).forEach(([id, dto]) => {
        const clusterId = extractReservationClusterId(dto);
        if(clusters[clusterId]) {
            clusterData = extractReservationClusterData(dto);
            clusters[clusterId].push(dto);
        }
        else clusters[clusterId] = [dto];
    });
    const headers = getOrCreate("TR", null, "headings") as HTMLTableRowElement;
    ["Item name", "Released?", "Returned?",].forEach(header => {
        headers.appendChild(newHeader(header));
    });
    rows.push(headers);

    Object.entries(clusters).forEach(([id, dtos]) => {
        const clusterData = extractReservationClusterData(dtos[0]);
        const clusterLabel = newCell(clusterData.period);
        clusterLabel.colSpan = 3;
        let row = getOrCreate("TR", null, "cluster-label") as HTMLTableRowElement;
        row.appendChild(clusterLabel);
        rows.push(row);
        row = getOrCreate("TR") as HTMLTableRowElement;
        dtos.forEach(dto => {
            row.appendChild(newCell(dto.getLabel()));
            row.appendChild(newCell(dto.getIsReleased() ? "Released" : ""));
            row.appendChild(newCell(dto.getIsReturned() ? "Returned" : ""));
            rows.push(row);
            row = getOrCreate("TR") as HTMLTableRowElement;
        });
    });
    
    return rows;
}
function newCell(text: string): HTMLTableCellElement {
    return newElem("TD", text) as HTMLTableCellElement;
}
function newHeader(text: string): HTMLTableCellElement {
    return newElem("TH", text) as HTMLTableCellElement;
}