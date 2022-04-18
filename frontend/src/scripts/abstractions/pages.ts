import { ElemGetter } from "../utils/html";
import { Dropnav } from "../components/App/Dropnav";
import { MainContainer } from "../components/App/MainContainer"
import { Navbar } from "../components/App/Navbar";
import { StringGetter } from "../utils/strings";
import { Loader } from "../components/App/Loader";
import { Dto } from "./dto";

interface PageContainer {
    addPage(elemGetter: ElemGetter, titleGetter?: StringGetter, remarksGetter?: ElemGetter): Page;
    domHandler: MainContainer | Dropnav;
}
export abstract class Page {
    abstract display(dto?: Dto): void;
    abstract displayRecent(): void;
}

export class BasicPageContainer implements PageContainer{
    domHandler = MainContainer;

    private pages: Set<BasicPage> = new Set<BasicPage>();

    addPage(contentGetter: ElemGetter, titleGetter: StringGetter, remarksGetter: ElemGetter): BasicPage {
        const page = new BasicPage(this, titleGetter, remarksGetter, contentGetter)
        this.pages.add(page);
        return page;
    }
}
export class BasicPage extends Page {
    private container: BasicPageContainer;

    private getTitle: StringGetter;
    private getRemarks: ElemGetter;
    private getContent: ElemGetter;

    private mostRecentDto: Dto | undefined;

    constructor(
        container: BasicPageContainer, 
        titleGetter: StringGetter, 
        remarksGetter: ElemGetter, 
        contentGetter: ElemGetter
    ) {
        super();

        this.container = container;

        this.getTitle = titleGetter;
        this.getRemarks = remarksGetter;
        this.getContent = contentGetter;

        Navbar.addNavLink(this.getTitle(), () => this.displayRecent());
    }

    display(dto?: Dto): void {
        Dropnav.collapse();

        const domHandler = this.container.domHandler;

        domHandler.setTitle(this.getTitle(dto));
        domHandler.setRemarks(this.getRemarks(dto));
        domHandler.replaceContent(this.getContent(dto));

        this.mostRecentDto = dto;

        Navbar.setCurrent(this.getTitle());
    }

    displayRecent(): void {
        this.display(this.mostRecentDto);
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
    
    hide(): void { 
        this.getElem().classList.add("page-inactive");
    }
    unhide(): void {
        this.getElem().classList.remove("page-inactive");
        if(this.getElem().id != "AppButtonBoxContainer") Loader.hide();
    }

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

    displayRecent(): void {
        this.display();
    }
}