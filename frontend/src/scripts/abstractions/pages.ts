import { ElemGetter } from "../utils/html";
import { Dropnav } from "../components/App/Dropnav";
import { MainContainer } from "../components/App/MainContainer"
import { Navbar } from "../components/App/Navbar";
import { StringGetter } from "../utils/strings";
import { Loader } from "../components/App/Loader";
import { Dto, Dtos } from "./dto";
import { Pages } from "../components/Pages";

interface PageContainer {
    addPage(elemGetter: ElemGetter, titleGetter?: StringGetter, remarksGetter?: ElemGetter, sidenavInitializer?: () => void): Page;
    domHandler: MainContainer | Dropnav;
}
export abstract class Page {
    abstract display(dto?: Dto, dtos1?: Dtos, dtos2?: Dtos): void;
    abstract displayRecent(): void;
}

export class BasicPageContainer implements PageContainer{
    domHandler = MainContainer;

    private pages: Set<BasicPage> = new Set<BasicPage>();

    addPage(contentGetter: ElemGetter, titleGetter: StringGetter, remarksGetter: ElemGetter, sidenavInitializer: () => void): BasicPage {
        const page = new BasicPage(this, titleGetter, remarksGetter, contentGetter, sidenavInitializer)
        this.pages.add(page);
        return page;
    }
}
export class BasicPage extends Page {
    private container: BasicPageContainer;

    private getTitle: StringGetter;
    private getRemarks: ElemGetter;
    private getContent: ElemGetter;
    private initSidenav: () => void;

    private mostRecentDto: Dto | null | undefined;
    private mostRecentDtos1: Dtos | null | undefined;
    private mostRecentDtos2: Dtos | null | undefined;

    constructor(
        container: BasicPageContainer, 
        titleGetter: StringGetter, 
        remarksGetter: ElemGetter, 
        contentGetter: ElemGetter,
        sidenavInitializer: () => void
    ) {
        super();

        this.container = container;

        this.getTitle = titleGetter;
        this.getRemarks = remarksGetter;
        this.getContent = contentGetter;
        this.initSidenav = sidenavInitializer;

        Navbar.addNavLink(this.getTitle(), () => Pages.displayRecent(this.getTitle()));
    }

    display(dto?: Dto | null, dtos1?: Dtos | null, dtos2?: Dtos | null): void {
        Dropnav.collapse();

        const domHandler = this.container.domHandler;

        domHandler.setTitle(this.getTitle(dto, dtos1, dtos2));
        domHandler.setRemarks(this.getRemarks(dto, dtos1, dtos2));
        domHandler.replaceContent(this.getContent(dto, dtos1, dtos2));
        this.initSidenav();

        this.mostRecentDto = dto;
        this.mostRecentDtos1 = dtos1;
        this.mostRecentDtos2 = dtos2;
        if(this.getTitle() == "Resources") console.log(this.mostRecentDto, this.mostRecentDtos1, this.mostRecentDtos2)

        Navbar.setCurrent(this.getTitle());
    }

    displayRecent(): void {
        this.display(this.mostRecentDto, this.mostRecentDtos1, this.mostRecentDtos2);
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