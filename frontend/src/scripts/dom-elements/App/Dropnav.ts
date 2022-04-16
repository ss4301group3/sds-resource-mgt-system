import { ElemGetter, getOrCreate, on } from "../../utils/html";
import "../../../stylesheets/components/App/Dropnav.scss";

export class Dropnav {

    static init(): void {
        this.expand();
        
        this.assignDIsplayEffectTo([
            this.getBackground
        ])
    }

    static get(): HTMLDivElement {
        return getOrCreate("DIV", "AppDropnav", "dropnav-effectee dropnav-active") as HTMLDivElement;
    }
    static getBackground(): HTMLDivElement {
        return getOrCreate("DIV", "AppDropnavBg", "dropnav-effectee dropnav-active") as HTMLDivElement;
    }

    static expand(): void {
        const effectedElems = this.getEffectedElems();

        for(let i = 0; i < effectedElems.length; i++) {
            effectedElems[i].classList.add("dropnav-active");
            effectedElems[i].classList.remove("dropnav-inactive");
        }
    }
    static collapse(): void {
        const effectedElems = this.getEffectedElems();

        for(let i = 0; i < effectedElems.length; i++) {
            effectedElems[i].classList.remove("dropnav-active");
            effectedElems[i].classList.add("dropnav-inactive");
        }
    }

    static appendContentByGetter(getter: ElemGetter) {
        on(this.get()).appendByGetters([getter]);
        
        this.assignDIsplayEffectTo([getter]);
    }

    private static getEffectedElems(): HTMLCollectionOf<Element> {
        return document.getElementsByClassName("dropnav-effectee");
    }
    static assignDIsplayEffectTo(elemGetters: Array<ElemGetter>): void {
        elemGetters.forEach(get => get().classList.add("dropnav-effectee"));
    }
}