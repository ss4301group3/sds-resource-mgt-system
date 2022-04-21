import { ElemGetter, getOrCreate, ifClicked, on } from "../../utils/html";
import "../../../stylesheets/components/App/Sidenav.scss";
import { MainContainer } from "./MainContainer";
import { MessageBox } from "./MessageBox";

class SidenavStatus {
    static OPTIONS = { collapsed: "collapsed", partial: "partial", total: "total" }

    static setTo() {
        return {
            collapsed() { status = SidenavStatus.OPTIONS.collapsed; Sidenav.effect(); },
            partial() { status = SidenavStatus.OPTIONS.partial; Sidenav.effect(); },
            total() { status = SidenavStatus.OPTIONS.total; Sidenav.effect();  },
        }
    }

    static get() { return status; }

    static toggle() {
        const collapsed = this.get() == this.OPTIONS.collapsed;
        const partiallyOpened = this.get() == this.OPTIONS.partial;
        const totallyOpened = this.get() == this.OPTIONS.total;

        if(window.innerWidth < 675) {
            if(!totallyOpened) this.setTo().total();
            else this.setTo().collapsed();
        }
        else {
            if(!partiallyOpened) this.setTo().partial();
            else this.setTo().collapsed();
        }
        console.log(SidenavStatus.get())
    }
}
let status: string = SidenavStatus.OPTIONS.collapsed;

type byLengthIterable = {
    [index: number]: Element,
    length: number
}

const toggleSidenav = () => SidenavStatus.toggle();

export class Sidenav {

    static init(): void {
        SidenavStatus.setTo().collapsed();
    }

    static get(): HTMLDivElement {
        return getOrCreate("DIV", "AppSidenav") as HTMLDivElement;
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
                effectedElems[i].classList.remove("sidenav-toggle-partial", "sidenav-toggle-total");
            }
        }
        if(status == SidenavStatus.OPTIONS.partial) {
            for(let i = 0; i < effectedElems.length; i++) {
                effectedElems[i].classList.add("sidenav-toggle-partial");
                effectedElems[i].classList.remove("sidenav-toggle-total");
            }
        }
        if(status == SidenavStatus.OPTIONS.total) {
            for(let i = 0; i < effectedElems.length; i++) {
                effectedElems[i].classList.add("sidenav-toggle-total");
                effectedElems[i].classList.remove("sidenav-toggle-partial");
            }
        }
    }
}