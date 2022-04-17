import { ElemGetter } from "../utils/html";
import { Dropnav } from "../components/App/Dropnav";
import { MainContainer } from "../components/App/MainContainer"
import { Navbar } from "../components/App/Navbar";
import { StringGetter } from "../utils/strings";

interface PageContainer {
    addPage(elemGetter: ElemGetter, titleGetter?: StringGetter, remarksGetter?: StringGetter): Page;
    domHandler: MainContainer | Dropnav;
}
export abstract class Page {
    abstract display(): void;
}

export class BasicPageContainer implements PageContainer{
    domHandler = MainContainer;

    private pages: Set<BasicPage> = new Set<BasicPage>();

    addPage(contentGetter: ElemGetter, titleGetter: StringGetter, remarksGetter: StringGetter): BasicPage {
        const page = new BasicPage(this, titleGetter, remarksGetter, contentGetter)
        this.pages.add(page);
        return page;
    }
}
export class BasicPage extends Page {
    private container: BasicPageContainer;

    private getTitle: StringGetter;
    private getRemarks: StringGetter;
    private getContent: ElemGetter;

    constructor(
        container: BasicPageContainer, 
        titleGetter: StringGetter, 
        remarksGetter: StringGetter, 
        contentGetter: ElemGetter
    ) {
        super();

        this.container = container;

        this.getTitle = titleGetter;
        this.getRemarks = remarksGetter;
        this.getContent = contentGetter;

        Navbar.addNavLink(this.getTitle(), () => this.display());
    }

    display(): void {
        Dropnav.collapse();

        const domHandler = this.container.domHandler;

        domHandler.setTitle(this.getTitle());
        domHandler.setRemarks(this.getRemarks());
        domHandler.replaceContent(this.getContent());

        Navbar.setCurrent(this.getTitle());
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