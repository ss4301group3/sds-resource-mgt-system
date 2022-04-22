import { AppUser } from "../components/App";
import { Sidenav } from "../components/App/Sidenav";
import { Data } from "../components/Data";
import { Pages } from "../components/Pages";
import { Dto, Dtos } from "./dto";

export type SearchObject = {
    dtoType: string;
    input: HTMLInputElement,
    remarks: HTMLParagraphElement,
    listdiv: SearchDiv
}
export abstract class SearchDivListItemButton extends HTMLButtonElement {
    abstract ul: HTMLUListElement;

    abstract isOpened: () => boolean;
    abstract collapseObj: () => void;
    abstract expandObj: () => void;
}
export abstract class SearchDivListItem extends HTMLLIElement {
    abstract ul: HTMLUListElement;

    abstract isOpened: () => boolean;
    abstract collapseObj: () => void;
    abstract expandObj: () => void;

    abstract btn1: SearchDivListItemButton;
    abstract btn2: SearchDivListItemButton;
    abstract btn3: SearchDivListItemButton;
}
export abstract class SearchDiv extends HTMLDivElement{
    static convertToSearchDiv(searchObject: SearchObject): void {
        const sdiv = searchObject.listdiv;

        sdiv.searchObject = searchObject;
        sdiv.searchRemarks = searchObject.remarks;

        sdiv.ul = <HTMLUListElement>sdiv.firstChild;

        sdiv.init = () => {
            sdiv.reset();

            const input = searchObject.input;
            const nChars = input.value.length;

            if(searchObject.dtoType == "Resources") {
                input.addEventListener("input", function() {
                    if (nChars > 2 || nChars == 0) sdiv.reset();
                });
                input.addEventListener("keydown", function(e) {
                    if(e.key == "Escape") {
                        searchObject.input.value = "";
                        sdiv.reset();
                    }
                    if(e.key == "Enter" && input.value.length > 2) {
                        const categories = Data.getRefined("Categories", ["categoryName"], [<string>input.value]);
                        const resources = Data.getRefined("Resources", ["itemName"], [<string>input.value]);

                        Pages.display(
                            "Resources", undefined, categories, resources
                        );
                    }

                })
            }
        }

        sdiv.clear = () => { sdiv.ul.innerHTML = ""; }

        sdiv.reset = () => {
            sdiv.clear();
            if(searchObject.dtoType == "Resources") {
                const inputText = searchObject.input.value;
                const nChars = inputText.length;
                let remarks = "name/&#x1F441 - view resources<br>&#9744/&#9746 - open/collapse list";
                if(nChars > 2) {
                    const categories = Data.getRefined("Categories", ["categoryName"], [inputText]); let catCount = 0;
                    const itemCount = Object.keys(Data.getRefined("Resources", ["itemName"], [inputText])).length;
                    Object.entries(categories).forEach(([id,dto]) => {
                        sdiv.ul.appendChild(sdiv.getNewLiFromDto(dto));
                        catCount++;
                    });
                    remarks = `${catCount} categories; ${itemCount} items${itemCount?"<br>Press Enter to display":""}`;

                } else {
                    if(nChars > 0) remarks = `Minimum ${2+1} letters required`
                    Object.entries(Data.getRefined("Categories")).forEach(([id,dto]) => {
                        sdiv.ul.appendChild(sdiv.getNewLiFromDto(dto));
                    });
                }

                searchObject.remarks.innerHTML = remarks;
                (<SearchDiv>searchObject.listdiv).style.height = `calc(100% - 29.5px - 40px - 3.5px)`;
                (<SearchDiv>searchObject.listdiv).style.overflowY = "auto";
            }
            searchObject.input.focus();
            
        }
        sdiv.getLiByObj = (dto: Dto) => {
            return <SearchDivListItem> document.getElementById(`${searchObject.listdiv?.id}${dto.getId()}`);
        }
        sdiv.collapseObj = (dto: Dto) => {
            Object.entries(Data.getCategories(dto)).forEach(([id, childDto]) => {
                sdiv.getLiByObj(dto).ul.removeChild(sdiv.getLiByObj(childDto));
            });
        }
        sdiv.expandObj = (dto: Dto) => {
            Object.entries(Data.getCategories(dto)).forEach(([id, childDto]) => {
                sdiv.getLiByObj(dto).ul.appendChild(sdiv.getNewLiFromDto(childDto));
            });
        }
        sdiv.recursiveExpandObj = (dto: Dto) => {

        }
        sdiv.getNewLiFromDto = (dto: Dto) => {
            const userIsAppAdmin = AppUser && AppUser.isAppAdmin();
            const li = Object.assign(document.createElement("LI") as SearchDivListItem, {
                isOpenedState: false,
                id: `${searchObject.listdiv?.id}${dto.getId()}`,
                ul: document.createElement("ul"),
                btn1: document.createElement("span") as SearchDivListItemButton,
                btn2: document.createElement("span") as SearchDivListItemButton,
                btn3: document.createElement("span") as SearchDivListItemButton,
            });
            if(userIsAppAdmin) {
                li.className = "draggable";
                li.draggable = true;
            }
            
            li.btn1.style.float = li.btn2.style.float = li.btn3.style.float = "right";
            li.btn1.style.marginTop = li.btn2.style.marginTop = li.btn3.style.marginTop = "-3.5px";
            li.btn1.style.padding = li.btn2.style.padding = li.btn3.style.padding = "3.5px";
            
            li.btn1.id = `${searchObject.listdiv?.id}B1${dto.getId()}`;
            li.btn2.id = `${searchObject.listdiv?.id}B2${dto.getId()}`;
            li.btn3.id = `${searchObject.listdiv?.id}B3${dto.getId()}`;
            li.btn1.className = li.btn2.className = li.btn3.className = "search-li-button";

            li.btn1.innerHTML = `&#x1F441`;
            li.btn2.innerHTML = `&#9744`; 
            li.btn3.innerHTML = `&#9746`;

            const label = <HTMLSpanElement> Object.assign(document.createElement("SPAN"), {
                className: "search-li-label",
                innerText: dto.getLabel()
            });

            li.btn1.ul = li.btn2.ul = li.btn3.ul = li.ul;// <-- this is required in case a draggable is dropped on it.
            li.append(li.btn3, li.btn2, li.btn1, label, li.ul);
            li.btn3.classList.add("hidden");

            li.btn2.onclick = function(e) {
                li.isOpenedState = true;
                sdiv.expandObj(dto);
                li.btn2.classList.add("hidden");
                li.btn3.classList.remove("hidden");
            }
            li.btn3.onclick = function(e) {
                li.isOpenedState = false;
                sdiv.collapseObj(dto);
                li.btn3.classList.add("hidden");
                li.btn2.classList.remove("hidden");
            }

            label.onclick = li.btn1.onclick = function(e) {
                if(window.innerWidth <= 675) Sidenav.toggle();
                Pages.display("Resources", dto);
            }

            //uiHandler.aelFor.catLi(li);
            li.isOpened = li.btn1.isOpened = li.btn2.isOpened = li.btn3.isOpened = function () { return li.isOpenedState; };
            li.expandObj = li.btn1.expandObj = li.btn2.expandObj = li.btn3.expandObj = function () { sdiv.expandObj(dto); li.isOpenedState = true; };
            li.collapseObj = li.btn1.collapseObj = li.btn2.collapseObj = li.btn3.collapseObj = function () { sdiv.collapseObj(dto); li.isOpenedState = false;};
            return li;
        }

        sdiv.init();
    }
    abstract searchObject: SearchObject;
    abstract searchRemarks: HTMLParagraphElement;
    abstract ul: HTMLUListElement;
    abstract init: () => void;
    abstract clear: () => void;
    abstract reset: () => void;
    abstract getLiByObj: (dto: Dto) => SearchDivListItem;
    abstract collapseObj: (dto: Dto) => void;
    abstract expandObj: (dto: Dto) => void;
    abstract recursiveExpandObj: (dto: Dto) => void;
    abstract getNewLiFromDto: (dto: Dto) => HTMLLIElement;
}