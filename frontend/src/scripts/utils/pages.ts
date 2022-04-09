import { getDropnav, hideDropnav, showDropnav } from "../app/dropnav";
import { getFrontPage } from "../pages/frontPage";
import { getLoanPage } from "../pages/loanPage";

class PageContainer {
    pages: Set<Page> = new Set<Page>();
    getNode: () => HTMLElement;
    show: () => void;
    hide: () => void;
    unhide: () => void;
    
    constructor(pageGetter: () => HTMLElement, pageShower: () => void, pageHider: () => void) {
        this.getNode = pageGetter;
        this.show = function() {
            hideOtherContainersButUnhide(this);
        };
        this.hide = pageHider;
        this.unhide = pageShower;
    }
}
const dropnav = new PageContainer(getDropnav, showDropnav, hideDropnav);

const containers: Set<PageContainer> = new Set<PageContainer>();
containers.add(dropnav);

abstract class Page {
    abstract parentContainer: PageContainer;
    abstract getNode(): HTMLElement;
    node: HTMLElement;
    
    hide(): void { this.node?.classList.add("page-inactive"); }
    unhide(): void { this.node?.classList.remove("page-inactive"); }
    
    init(): void { append(this).to(this.parentContainer); }
    
    show(): void {
        append(this).to(this.parentContainer)
        unhide(this).butHideOthersOn(this.parentContainer);
    }
}
class DropnavPage extends Page{
    readonly parentContainer = dropnav;
    readonly getNode;
    
    constructor(pageGetter: () => HTMLDivElement) {
        super();
        this.getNode = pageGetter;
        this.parentContainer.pages.add(this);
    }
}
export const pages = {
    frontPage: new DropnavPage(getFrontPage),
    loanForm: new DropnavPage(getLoanPage)
}

function append(page: Page) {
    const pageNode = page.node = page.getNode();
    
    const attachOption = {
        to(pageContainer: PageContainer):void {
            const parentNode = pageContainer.getNode();
            
            if(!parentNode.contains(pageNode)) parentNode.appendChild(pageNode);
            
            pageContainer.show();
        }
    }
    
    return attachOption;
}

function unhide(page: Page) {
    page.unhide();
    
    const hideOthersOption = {
        butHideOthersOn(pageContainer: PageContainer) {
            pageContainer.pages.forEach(otherPage => {
                if(otherPage != page) otherPage.hide();
            });
        }
    }
    
    return hideOthersOption;
}

function hideOtherContainersButUnhide(container: PageContainer) {
    container.unhide();
    
    containers.forEach(otherContainer => {
        if(otherContainer != container) otherContainer.hide();
    });
}