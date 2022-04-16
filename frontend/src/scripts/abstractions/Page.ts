import { ElemGetter } from "../utils/html";
import { Dropnav } from "../dom-elements/App/Dropnav";
import { MainContainer } from "../dom-elements/App/MainContainer"
import { Navbar } from "../dom-elements/App/Navbar";

interface PageContainer {
    addPage(elemGetter: ElemGetter, title?: string, remarks?: string): Page;
    domHandler: MainContainer | Dropnav;
}
abstract class Page {
    abstract display(): void;
}

export class BasicPageContainer implements PageContainer{
    domHandler = MainContainer;

    private pages: Set<BasicPage> = new Set<BasicPage>();

    addPage(contentGetter: ElemGetter, title: string, remarks: string): BasicPage {
        const page = new BasicPage(this, title, remarks, contentGetter)
        this.pages.add(page);
        return page;
    }
}
class BasicPage extends Page {
    private container: BasicPageContainer;

    private title: string;
    private remarks: string;
    private getContent: ElemGetter;

    constructor(container: BasicPageContainer, title: string, remarks: string, contentGetter: ElemGetter) {
        super();

        this.container = container;

        this.title = title;
        this.remarks = remarks;
        this.getContent = contentGetter;

        Navbar.addNavLink(title, this.display);
    }

    display(): void {
        Dropnav.collapse();

        const domHandler = this.container.domHandler;

        domHandler.setTitle(this.title);
        domHandler.setRemarks(this.remarks);
        domHandler.replaceContent(this.getContent());
    }
}

export class DropPageContainer implements PageContainer{
    domHandler = Dropnav;

    private pages: Set<DropPage> = new Set<DropPage>();

    addPage(elemGetter: ElemGetter): DropPage {
        const page = new DropPage(this, elemGetter);

        this.pages.add(page);

        return page;
    }

    unhide(page: DropPage) {
        page.unhide();
        return {
            andHideOthers:() => {
                this.pages.forEach(pg => {
                    if(pg != page) pg.hide();
                });
            }
        }
    }
}
class DropPage extends Page {
    private container: DropPageContainer;

    private getElem: ElemGetter;
    
    hide(): void { this.getElem().classList.add("page-inactive"); }
    unhide(): void { this.getElem().classList.remove("page-inactive"); }

    constructor(container: DropPageContainer, elemGetter: ElemGetter) {
        super();
        
        this.container = container;

        this.getElem = elemGetter;

        this.container.domHandler.appendContentByGetter(this.getElem);
    }

    display(): void {
        this.container.domHandler.expand();

        this.container.unhide(this).andHideOthers();
    }
}