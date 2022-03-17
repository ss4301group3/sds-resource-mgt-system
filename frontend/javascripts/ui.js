var uiHandler;
{uiHandler = {
    page: {
        label: document.querySelector("#PageLabel"),
        rmk: document.querySelector("#PageRemarks"),
        update: {
            label(obj) { uiHandler.page.label.innerHTML = obj.name; },
            rmk(obj) {
                const rmk = uiHandler.page.rmk;
                //Resources by category:
                const hasC = isDefined(obj["cIds"]) && obj["cIds"].length > 0;
                const hasI = isDefined(obj["iIds"]) && obj["iIds"].length > 0;
                //Resources by search:
                const hasCObjs = isDefined(obj["cObjs"]);
                if (hasCObjs) {
                    let iCount = Object.keys(obj["iObjs"]).length;
                    let cCount = Object.keys(obj["cObjs"]).length;
                    if (iCount) rmk.innerHTML = `${iCount} resources found in ${cCount} categories`;
                    else rmk.innerHTML = "No resource matched";
                }
                else if (hasC || hasI) rmk.innerHTML = `Please select a ${hasC?("category"+(hasI?" or resource":"")):"resource"}`;
                else rmk.innerHTML = "This category is empty";
            }
        },
        content: Object.assign(document.querySelector("#PageContent"), {
            clear() {uiHandler.page.content.innerHTML = null},
            show: {
                iSearch(obj) {//item search results
                    let iObjs = obj.iObjs;
                    let cObjs = obj.cObjs;
                    Object.entries(cObjs).forEach(([key,value]) => {
                        let catSi = Object.assign(document.createElement("div"), {
                            //category search item
                            id: (key == "uncategorized") ? "catSinull" : `catSi${key}`,
                            itmSi: {}
                        })
                        const label = document.createElement("h3"); label.innerHTML = value.name; catSi.appendChild(label);
                        uiHandler.page.content.appendChild(catSi);
                    })
                    Object.entries(iObjs).forEach(([key, value]) => {
                        let itmSi = Object.assign(document.createElement("button"), {
                            id: `itmSi${key}`,
                            innerHTML: `<span style='font-weight:bold;'>${value.name}<span><br>Nice`
                        })
                        let catSi = document.querySelector(`#catSi${value.cId? value.cId : "null"}`);
                        catSi.appendChild(itmSi);
                    })
                },
                iInCategory(obj) {//item search results
                    const items = dataHandler.items;
                    if (isDefined(obj.id)) Object.entries(items).forEach(([key,value]) => {
                        if (isDefined(value.cId) && obj.id == value.cId) {
                            let itmSi = Object.assign(document.createElement("button"), {
                                id: `itmSi${key}`,
                                innerHTML: `<span style='font-weight:bold;'>${value.name}<span><br>Nice`
                            })
                            let catSi = document.querySelector(`#catSi${value.cId? value.cId : "null"}`);
                            uiHandler.page.content.appendChild(itmSi);
                        }
                    })
                }
            },
        }),
        current: "",
        goto(target) {
            this.current = target;
            this.content.clear();
            if (target.startsWith("categories")) {
                const id = target.substring(11);
                const obj = id.length > 0 ? dataHandler.categories[id]
                    : dataHandler.getMainCategoryObj();
                this.content.show.iInCategory(obj);
                this.update.label(obj);
                this.update.rmk(obj);
            }
            else if (target.startsWith("resources/search")) {
                const criterion = target.substring(17);
                if (criterion.length > 0) {
                    obj = dataHandler.searchItems(criterion);
                    this.content.show.iSearch(obj);
                    this.update.label(obj);
                    this.update.rmk(obj);
                }

            }
        }
    },
    nav: {
        side: {
            elems: {
                nav: document.querySelector("#SideNav"),
                search: document.querySelector("#SideNavSearch"),
                btn: document.querySelector("#SideNavToggle"),
                page: document.querySelector("#MainContainer"),
                pxWidth: 240,
                remarks: document.querySelector("#SideNavRemarks")
            },
            open() {
                const {nav, search, btn,page, pxWidth} = uiHandler.nav.side.elems;
                btn.style.left = `${pxWidth}px`; nav.style.left = `${0}px`;
                page.style.marginLeft = `${pxWidth+22}px`;
                search.removeAttribute("disabled");
                search.focus();
                search.select();
                btn.innerHTML = "<";
                btn.addEventListener("click", uiHandler.nav.side.close, false);
                btn.removeEventListener("click", uiHandler.nav.side.open, false);
            },
            close() {
                const {nav, search, btn,page, pxWidth} = uiHandler.nav.side.elems;
                btn.style.left = `${0}px`; nav.style.left = `${-pxWidth}px`;
                page.style.marginLeft = `${0+22}px`;
                search.setAttribute("disabled",true);
                btn.innerHTML = ">";
                btn.addEventListener("click", uiHandler.nav.side.open, false);
                btn.removeEventListener("click", uiHandler.nav.side.close, false);
            },
            init() {
                const {nav, search, btn, page, pxWidth, remarks} = uiHandler.nav.side.elems;
                nav.style.width = `${pxWidth}px`;
                btn.addEventListener("click", uiHandler.nav.side.open, false);
                search['responseBox'] = remarks;
                uiHandler.aelFor.snSearch();
                uiHandler.aelFor.snRemarks();
            }
        }
    },
    snl: {//#SideNavList
        list: document.querySelector("#SideNavList"),
        init() { this.list["ul"] = this.list.firstElementChild; this.reset()},
        clear() { this.list.ul.innerHTML = null },
        reset() {
            this.clear();
            const mainCat = dataHandler.getMainCategoryObj();
            this.openCat(mainCat);
            uiHandler.nav.side.elems.remarks.innerHTML = "&#x1F441 - view resources<br>&#9744/&#9746 - open/collapse list";
            this.list.style.height = `calc(100% - 29.5px - 40px - 3.5px)`;
            this.list.style.overflowY = "auto";
        },
        closeCat(catObj) {
            const id = catObj.id;
            document.querySelector(`#catLi${id}`).ul.innerHTML = null;
            document.querySelector(`#catB2${id}`).classList.remove("hidden");
            document.querySelector(`#catB3${id}`).classList.add("hidden");
        },
        openCat(catObj) {
            const id = catObj.id;
            if (isDefined(catObj.cIds)) {
                const cIds = catObj.cIds;
                for (let i = 0; i < cIds.length; i++) this.showCat(dataHandler.categories[cIds[i]]);
            }
            if (isDefined(id)) {
                document.querySelector(`#catB2${id}`).classList.add("hidden");
                document.querySelector(`#catB3${id}`).classList.remove("hidden");
            }
        },
        showCat(catObj) {//category
            if (!document.querySelector(`#catLi${catObj.id}`)) {
                let parentNode = this.list;
                if (catObj.pId || catObj.pId == 0) {
                    parentNode = document.querySelector(`#catLi${catObj.pId}`);
                    if (!parentNode) parentNode = this.showCat(dataHandler.categories[catObj.pId]);
                }
                parentNode.ul.appendChild(this.newCat(catObj));
            }
            return document.querySelector(`#catLi${catObj.id}`);
        },
        newCat(catObj) {
            const li = Object.assign(document.createElement("li"), {
                isOpenedState: false,
                id: `catLi${catObj.id}`,
                ul: document.createElement("ul"),
                btn1: document.createElement("span"),
                btn2: document.createElement("span"),
                btn3: document.createElement("span"),
                draggable:true
            })
            li.btn1.style.float = li.btn2.style.float = li.btn3.style.float = "right";
            li.btn1.style.marginTop = li.btn2.style.marginTop = li.btn3.style.marginTop = "-3.5px";
            li.btn1.style.padding = li.btn2.style.padding = li.btn3.style.padding = "3.5px";
            li.btn1.id = `catB1${catObj.id}`; li.btn2.id = `catB2${catObj.id}`; li.btn3.id = `catB3${catObj.id}`;
            li.btn1.innerHTML = `&#x1F441`; li.btn2.innerHTML = `&#9744`;  li.btn3.innerHTML = `&#9746`;
            li.btn1.ul = li.btn2.ul = li.btn3.ul = li.ul;// <-- this is required in case a draggable is dropped on it.
            li.append(li.btn3, li.btn2, li.btn1, catObj.name, li.ul);
            li.btn3.classList.add("hidden");
            uiHandler.aelFor.catLi(li);
            li.isOpened = li.btn1.isOpened = li.btn2.isOpened = li.btn3.isOpened = function() {return li.isOpenedState};
            li.openCat = li.btn1.openCat = li.btn2.openCat = li.btn3.openCat = function () { uiHandler.snl.openCat(catObj); li.isOpenedState = true};
            li.closeCat = li.btn1.closeCat = li.btn2.closeCat = li.btn3.closeCat = function () { uiHandler.snl.closeCat(catObj); li.isOpenedState = false;};
            return li;
        }
    },
    messageBox: Object.assign(document.querySelector("#MessageBox"), {
        clear() { uiHandler.messageBox.innerHTML = null; },
        write(tag, innerHTML, classesArray, isRemovedOnClick, isRemovedAfter) { let message = document.createElement(tag); message.innerHTML = innerHTML; message.classList.add(classesArray); if (isRemovedOnClick || isRemovedAfter) uiHandler.aelFor.msg(message, isRemovedOnClick, isRemovedAfter); uiHandler.messageBox.appendChild(message); },
        welcome(name) { this.clear();this.write("h3",`Welcome, ${name}`,["message"], true, 10); }
    }),
    aelFor: {//addEventListener(s)
        msg(msg, isRemovedOnClick, isRemovedAfter) {
            if (isRemovedOnClick) msg.addEventListener("click", uiHandler.listener.remove, false);
        },
        catLi(li) {
            li.addEventListener("dragstart", uiHandler.listener.dragStart,false);
            li.addEventListener("dragend", uiHandler.listener.dragEnd,false);
        },
        snl() {
            const snl = uiHandler.snl.list;
            snl.addEventListener("drop", uiHandler.listener.drop,false);
            snl.addEventListener("dragenter", uiHandler.listener.dragEnter,false);
            snl.addEventListener("dragleave", uiHandler.listener.dragLeave,false);
            snl.addEventListener("dragover", uiHandler.listener.dragOver,false);
            snl.addEventListener("click", uiHandler.listener.click,false);
        },
        snSearch() {
            const search = uiHandler.nav.side.elems.search;
            search.addEventListener('input', uiHandler.listener.resSearch,false);
            search.addEventListener('keydown', uiHandler.listener.resSearchNav,false);
        },
        snRemarks() {
            const remarks = uiHandler.nav.side.elems.remarks;
            remarks.addEventListener('click',uiHandler.listener.click, false);
        }
    },
    config:{
        minSearchNChars: 2
    },
    listener: {
        resSearchNav(e) {
            if (e.key == "Escape") { uiHandler.nav.side.elems.search.value = ""; uiHandler.snl.reset(); }
            if (e.key == "Enter" && e.target.value.length >= uiHandler.config.minSearchNChars) uiHandler.page.goto(`resources/search/${e.target.value}`);
        },
        resSearch(e) {
            document.querySelectorAll(".searchResult").forEach((elem) => elem.classList.remove("searchResult"));
            const minChars = uiHandler.config.minSearchNChars;
            if (e.target.value.length < minChars) {
                uiHandler.snl.reset();
                if(e.target.value.length > 0) e.target.responseBox.innerHTML  = `Minimum ${minChars} letters required`;
                return false;
            }
            const cIsValid = isDefined(dataHandler.categories);
            const itmCount = dataHandler.countSearchItems(e.target.value);
            if (cIsValid) {
                uiHandler.snl.clear();
                const cats = dataHandler.categories;
                let catCount = 0;
                Object.entries(cats).forEach(([key, value]) => {
                    if (value.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                        let li = uiHandler.snl.showCat(value);
                        li.classList.add("searchResult");
                        catCount += 1;
                    }
                })
                uiHandler.nav.side.elems.remarks.innerHTML = `${catCount} categories; ${itmCount} items${itmCount?"<br>Press Enter to display":""}`;
            }
        },
        remove(e) {
            const parent = e.target.parentNode;
            console.log(parent)
            parent.removeChild(e.target);
        },
        click(e) {
            const id = e.target.id;
            if (id == "SideNavRemarks") {uiHandler.nav.side.elems.search.focus();}
            else if (id.startsWith("catB1")) {uiHandler.page.goto(`categories/${id.substring(5)}`)}
            else if (id.startsWith("cat") && e.target.isOpened()) { e.target.closeCat(); }
            else if (id.startsWith("cat") && !e.target.isOpened()) { e.target.openCat(); }
        },
        dragStart(e) {
            e.dataTransfer.setData('text/plain',e.target.id);
            e.target.classList.add("dragged");
            setTimeout(() => {e.target.classList.add("hidden");})
        },
        dragEnd(e) {
            e.target.classList.remove("dragged");
            e.target.classList.remove("hidden")
        },
        dragEnter(e) {
            e.preventDefault();
            e.target.classList.add("dragOver");
        },
        dragOver(e) { e.preventDefault(); },
        dragLeave(e) { e.preventDefault(); e.target.classList.remove("dragOver");
        },
        drop(e) {
            e.preventDefault();
            let elem = document.getElementById(e.dataTransfer.getData('text/plain'));
            e.target.classList.remove("dragOver");
            const ul = e.target.ul;
            if (e.target == uiHandler.snl.list) ul.appendChild(elem);
            else ul.insertBefore(elem,ul.firstElementChild);
            if (elem.id.includes("catLi") &&
                (e.target.id.includes("catLi") || e.target.id.includes("SideNavList"))) {
                    const id = elem.id.substring(5);
                    const newPId = e.target.id.includes("catLi") ? e.target.id.substring(5) : null;
                    const chgObj = { id: id, newPId: newPId }
                    if (isDefined(dataHandler.categories[id]["pId"])) {
                        chgObj["oldPId"] = dataHandler.categories[id]["pId"];
                    }
                    dataHandler.catChg.add(chgObj);
                }
        }
    },
    insertAfter(newElem, refElem) {
        refElem.parentNode.insertBefore(newElem, refElem.nextElementSibling);
    }
}
}
uiHandler.snl.init();
uiHandler.aelFor.snl();
uiHandler.nav.side.init();
uiHandler.page.goto("categories");