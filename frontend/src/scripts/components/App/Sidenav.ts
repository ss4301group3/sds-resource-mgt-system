import { ElemGetter, getOrCreate, ifClicked, on } from "../../utils/html";
import "../../../stylesheets/components/App/Sidenav.scss";
import { noSpaces } from "../../utils/strings";
import { Person } from "../../abstractions/dto/Person";
import { FILTER_LABELS, ReservationFilter } from "../Data/ReservationFilter";

class SidenavStatus {
    static OPTIONS = { collapsed: "collapsed", expanded: "expanded" , disabled: "disabled"}

    static setTo() {
        return {
            collapsed() { status = SidenavStatus.OPTIONS.collapsed; Sidenav.effect(); },
            expanded() { status = SidenavStatus.OPTIONS.expanded; Sidenav.effect(); },
            disabled() { status = SidenavStatus.OPTIONS.disabled; Sidenav.effect(); }
        }
    }

    static enable() { if(status == SidenavStatus.OPTIONS.disabled) { this.toggle(); } }

    static get() { return status; }
    static isCollapsed(): boolean { return status == SidenavStatus.OPTIONS.collapsed; }

    static toggle() {
        const collapsed = this.get() == this.OPTIONS.collapsed;

        if(collapsed) this.setTo().expanded();
        else this.setTo().collapsed();
    }
}
let status: string = SidenavStatus.OPTIONS.collapsed;

type byLengthIterable = {
    [index: number]: Element,
    length: number
}

const toggleSidenav = () => SidenavStatus.toggle();

export class Sidenav {
    static toggle = toggleSidenav;

    static disable = () => SidenavStatus.setTo().disabled();
    static enable = () => SidenavStatus.enable();

    static get(): HTMLDivElement {
        return getOrCreate("DIV", "AppSidenav") as HTMLDivElement;
    }
    
    static clear() {
        return {
            except(ownElements: HTMLElement[]) {
                Sidenav.get().childNodes.forEach(node => {
                    if(!ownElements.includes(<HTMLElement>node)) {
                        (<HTMLElement>node).classList.add("hidden");
                    } else {
                        (<HTMLElement>node).classList.remove("hidden");
                    }
                });
            }
        }
    }
    
    static createAndGetSearchFor(identifier: string, dtoType: string, hasList?: boolean, defaultSearchInput?: string) {
        const input = getOrCreate("INPUT", `SearchInputFor${noSpaces(identifier)}`,"sidenav-search-input") as HTMLInputElement;
        input.placeholder = "Search";
        if(defaultSearchInput) input.value = defaultSearchInput;
        input.disabled = SidenavStatus.isCollapsed();

        const remarks = getOrCreate("P", `SearchRemarksFor${noSpaces(identifier)}`,"sidenav-search-remarks") as HTMLParagraphElement;

        const listDiv = getOrCreate("DIV", `SearchListDivFor${noSpaces(identifier)}`, "sidenav-search-list-div");
        listDiv.appendChild(getOrCreate("UL", `SearchListUlFor${noSpaces(identifier)}`, "sidenav-search-list-ul"));

        const sidenav = this.get();

        sidenav.appendChild(input);
        sidenav.appendChild(remarks);

        if(hasList) {
            sidenav.appendChild(listDiv);
        }

        return {
            dtoType: dtoType,
            input: input,
            remarks: remarks,
            listdiv: hasList ? listDiv : null
        }
    }

    static createAndGetFilterControlFor(identifier: string, dtoType: string) {
        const isTimeControl = identifier.includes("Time") || identifier == "Ascending / Descending";

        const sidenav = this.get();

        const higherDiv = getOrCreate("DIV", `FilterControlMainContainerFor${noSpaces(dtoType)}`, "sidenav-filter-controls") as HTMLDivElement;

        const div = getOrCreate("DIV", `FilterControlSubContainerFor${noSpaces(dtoType+""+(isTimeControl?"Time":identifier))}`, "sidenav-filter-control-container") as HTMLDivElement;
        
        const label = getOrCreate("H5", `FilterControlLabelFor${noSpaces(dtoType+""+identifier)}`, "sidenav-filter-control-label", identifier) as HTMLHeadingElement;
        const controls = getOrCreate("DIV", `FilterControlControlsFor${noSpaces(dtoType+""+identifier)}`, "sidenav-filter-control-controls-container") as HTMLDivElement;

        this.setupFilterControl(controls, {identifier, dtoType});

        div.append(label, controls);
        higherDiv.appendChild(div);
        sidenav.append(higherDiv);

        return div;
    }
    
    private static setupFilterControl(elem: HTMLDivElement, params: {identifier: string, dtoType: string} ) {
        const identifier = params.identifier, dtoType = params.dtoType;
        if(dtoType == "Reservations") {
            const crit = ReservationFilter.getCriterion;

            const control = getOrCreate("SPAN", `FilterControlControlsControlFor${noSpaces(dtoType+""+identifier)}`, "sidenav-filter-control-controls-container-control");

            let i: number = 0;
            if(identifier == FILTER_LABELS[i = 0]) {
                control.innerHTML = crit(i) == true ? "Personal" : "Others" //label
                control.onclick = function() {
                    const newValue = ReservationFilter.changeCriterion(i);
                    control.innerHTML = newValue == true ? "Personal" : "Others" //label
                }
            }
            else if(identifier == FILTER_LABELS[i = 1]) {
                control.innerHTML = crit(i) == true ? "Staff" :
                                    crit(i) == false ? "Student" : "Any";
                control.onclick = function() {
                    const newValue = ReservationFilter.changeCriterion(i);
                    control.innerHTML = newValue == true ? "Staff" :
                                        newValue == false ? "Student" : "Any";
                }
            }
            else if(identifier == FILTER_LABELS[i = 2]) {
                const inputControl = getOrCreate("INPUT", `FilterControlControlsControlSubControlFor${noSpaces(dtoType+""+identifier)}`, "sidenav-filter-control-controls-container-control-subcontrol") as HTMLInputElement;
                inputControl.value = crit(i) as string;
                inputControl.onchange = function() {
                    const newValue = ReservationFilter.changeCriterion(i, inputControl.value);
                    inputControl.value = newValue as string;
                }
                control.appendChild(inputControl);
            }
            else if(identifier == FILTER_LABELS[i = 3] || identifier == FILTER_LABELS[i = 6]) {
                control.innerHTML = <string>crit(i);
                control.onclick = function() {
                    const newValue = ReservationFilter.changeCriterion(i);
                    control.innerHTML = <string>newValue;
                }
            }
            else if(identifier == FILTER_LABELS[i = 4] || identifier == FILTER_LABELS[i = 5]) {
                control.innerHTML = crit(i) == true ? "Yes" :
                                    crit(i) == false ? "No" : "Any";
                control.onclick = function() {
                    const newValue = ReservationFilter.changeCriterion(i);
                    control.innerHTML = newValue == true ? "Yes" :
                                        newValue == false ? "No" : "Any";
                }
            }
            else if(identifier == FILTER_LABELS[i = 7]) {
                const inputControl = <HTMLInputElement> getOrCreate("INPUT", `FilterControlControlsControlSubControlFor${noSpaces(dtoType+""+identifier)}1`, "sidenav-filter-control-controls-container-control-subcontrol");
                const inputControl2 = <HTMLInputElement> getOrCreate("INPUT", `FilterControlControlsControlSubControlFor${noSpaces(dtoType+""+identifier)}2`, "sidenav-filter-control-controls-container-control-subcontrol");

                const current = crit(i) as [Date|null,Date|null]

                inputControl.type = inputControl2.type = "datetime-local";

                if(current[0]) inputControl.valueAsDate = current[0];
                if(current[1]) inputControl2.valueAsDate = current[1];
                inputControl.onchange = function() {
                    const newValue = ReservationFilter.changeCriterion(i, [inputControl.valueAsDate, inputControl2.valueAsDate]) as [Date|null,Date|null]
                    inputControl.valueAsDate = newValue[0];
                    if(!newValue[0]) inputControl.style.color = "pink";
                    else inputControl.style.color = "#afa";
                }
                inputControl2.onchange = function() {
                    const newValue = ReservationFilter.changeCriterion(i, [inputControl.valueAsDate, inputControl2.valueAsDate]) as [Date|null,Date|null]
                    inputControl2.valueAsDate = newValue[1];
                    if(!newValue[1]) inputControl2.style.color = "pink";
                    else inputControl2.style.color = "#afa";
                }

                control.append(inputControl, inputControl2);
            }
            else if(identifier == FILTER_LABELS[i = 8]) {
                control.innerHTML = crit(i) == true ? "Ascending" : "Descending"; //label
                control.onclick = function() {
                    const newValue = ReservationFilter.changeCriterion(i);
                    control.innerHTML = newValue == true ? "Ascending" : "Descending";
                }
            }

            elem.appendChild(control);
        }
    }

    static getToggle(): HTMLDivElement {
        const toggle = getOrCreate("DIV", "AppSidenavToggle", "dropnav-effectee dropnav-active") as HTMLDivElement;
        ifClicked(toggle).trigger(toggleSidenav);
        return toggle;
    }

    private static getEffectedElems(): HTMLCollectionOf<Element> {
        return document.getElementsByClassName("sidenav-toggle-effectee");
    }
    static assignDIsplayEffectTo(elemGetters: Array<ElemGetter>) {
        elemGetters.forEach(get => {
            const elem = get();
            elem.classList.add("sidenav-toggle-effectee");
        });
        return {
            andThenApplyIt() { Sidenav.effect(); }
        }
    }

    static effect(passedGetters?: ElemGetter[]) {

        let selectedElems: HTMLElement[] = [];
        const searchInputs = this.get().getElementsByClassName("sidenav-search-input");
        const filterInputs = this.get().getElementsByClassName("sidenav-filter-control-controls-container-control-subcontrol");

        if(passedGetters) {
            passedGetters.forEach(
                get => selectedElems.push(get())
            );
        }

        const effectedElems = <byLengthIterable> (
            passedGetters ? (<HTMLElement[]>selectedElems) : this.getEffectedElems()
        );

        if(status == SidenavStatus.OPTIONS.collapsed || status == SidenavStatus.OPTIONS.disabled) {
            for(let i = 0; i < effectedElems.length; i++) {
                effectedElems[i].classList.remove("sidenav-toggle-active");
        
                if(status == SidenavStatus.OPTIONS.disabled) {
                    effectedElems[i].classList.add("sidenav-toggle-disabled");
                } else {
                    effectedElems[i].classList.remove("sidenav-toggle-disabled");
                }
            }
            for(let i = 0; i < searchInputs.length; i++) {
                (<HTMLInputElement>searchInputs[i]).disabled = true;
            }
        } else {
            for(let i = 0; i < effectedElems.length; i++) {
                effectedElems[i].classList.add("sidenav-toggle-active");
            }
            for(let i = 0; i < searchInputs.length; i++) {
                (<HTMLInputElement>searchInputs[i]).disabled = false;
            }
        }
        
        if(searchInputs.length>0) (<HTMLInputElement>searchInputs[0]).focus();
        if(filterInputs.length>0) (<HTMLInputElement>filterInputs[0]).focus();
    }
}