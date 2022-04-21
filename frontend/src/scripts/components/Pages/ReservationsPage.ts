import { Dto, ReservationDtos } from "../../abstractions/dto";
import { Reservation } from "../../abstractions/dto/Reservation";
import { ElemGetter, getOrCreate, newElem, on } from "../../utils/html";
import { Data } from "../Data";
import { ClusterData, ReservationHandler as Handle } from "../../abstractions/dto/Reservation/ReservationHandler";

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
    const rows: Array<HTMLTableRowElement> = [];
    
    const columnLabels = Handle.Dto.getPublicLabels()
    
    const headers = getOrCreate("TR", null, "headings") as HTMLTableRowElement;

    columnLabels.forEach(label => {
        headers.appendChild(newHeader(label));
    });
    rows.push(headers);

    const clusters: {[clusterId: string]: [Reservation]} = {};
    let clusterData: ClusterData;

    Object.entries(dtos).forEach(([id, dto]) => {
        const clusterId = Handle.Cluster.getId(dto);

        if(clusters[clusterId]) {
            clusterData = Handle.Cluster.getData(dto);
            clusters[clusterId].push(dto);
        }

        else clusters[clusterId] = [dto];
    });

    Object.entries(clusters).forEach(([id, dtos]) => {
        const clusterData = Handle.Cluster.getData(dtos[0]);

        let labelRow = getOrCreate("TR", null, "cluster-label") as HTMLTableRowElement;

        const clusterLabel = Object.assign(getOrCreate("TD"), {
            innerHTML: `${clusterData.personInfo}<br>- ${clusterData.period}`
        }) as HTMLTableCellElement;
        clusterLabel.colSpan = columnLabels.length;
        
        labelRow.appendChild(clusterLabel);

        rows.push(labelRow);

        let dataRow = getOrCreate("TR") as HTMLTableRowElement;
        dtos.forEach(dto => {
            const data = Handle.Dto.getPublicData(dto);
            data.forEach(info => {
                dataRow.appendChild(newCell(info));
            });
            rows.push(dataRow);
            dataRow = getOrCreate("TR") as HTMLTableRowElement;
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