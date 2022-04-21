import { ElemGetter, getOrCreate, ifClicked, on } from "../../utils/html";
import "../../../stylesheets/components/App/Sidenav.scss";
import { noSpaces } from "../../utils/strings";

class SidenavStatus {
    static OPTIONS = { collapsed: "collapsed", expanded: "expanded" }

    static setTo() {
        return {
            collapsed() { status = SidenavStatus.OPTIONS.collapsed; Sidenav.effect(); },
            expanded() { status = SidenavStatus.OPTIONS.expanded; Sidenav.effect(); }
        }
    }

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
    static get(): HTMLDivElement {
        return getOrCreate("DIV", "AppSidenav") as HTMLDivElement;
    }
    
    static clear(): void { on(this.get()).removeChildren(); }
    
    static createAndGetSearchFor(identifier: string, hasList?: boolean, defaultSearchInput?: string) {
        const input = getOrCreate("INPUT", `SearchInputFor${noSpaces(identifier)}`,"sidenav-search-input") as HTMLInputElement;
        input.placeholder = "Search";
        if(defaultSearchInput) input.value = defaultSearchInput;
        input.disabled = SidenavStatus.isCollapsed();

        const remarks = getOrCreate("P", `SearchRemarksFor${noSpaces(identifier)}`,"sidenav-search-remarks");

        const listDiv = getOrCreate("DIV", `SearchListDivFor${noSpaces(identifier)}`, "sidenav-search-list-div");
        listDiv.appendChild(getOrCreate("UL", `SearchListUlFor${noSpaces(identifier)}`, "sidenav-search-list-ul"));

        const sidenav = this.get();

        sidenav.appendChild(input);
        sidenav.appendChild(remarks);

        if(hasList) {
            sidenav.appendChild(listDiv);
        }

        return {
            input: input,
            remarks: remarks,
            listdiv: hasList ? listDiv : null
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

        if(passedGetters) {
            passedGetters.forEach(
                get => selectedElems.push(get())
            );
        }

        const effectedElems = <byLengthIterable> (
            passedGetters ? (<HTMLElement[]>selectedElems) : this.getEffectedElems()
        );

        if(status == SidenavStatus.OPTIONS.collapsed) {
            for(let i = 0; i < effectedElems.length; i++) {
                effectedElems[i].classList.remove("sidenav-toggle-active");
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
    }
}