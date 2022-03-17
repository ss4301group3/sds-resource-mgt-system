var isDefined = function(variable) {return !(typeof variable === 'undefined' || variable === null); }

var dataHandler = {
    user: {
        name: null,
        faculty: null,
        email: null,
        isSignedIn: false,
        roles: []
    },
    countSearchItems(criterion) {
        let count = 0;
        Object.entries(dataHandler.items).forEach(([key, value]) => {
            if (value.name.toLowerCase().includes(criterion.toLowerCase()))  {
                count += 1;
            }
        })
        return count;
    },
    searchItems(criterion) {
        let iObjs = {};
        let cObjs = {};
        Object.entries(dataHandler.items).forEach(([key, value]) => {
            if (value.name.toLowerCase().includes(criterion.toLowerCase()))  {
                iObjs[`${key}`] = value;
                if (isDefined(value.cId)) cObjs[`${value.cId}`] = dataHandler.categories[value.cId];
                else cObjs["uncategorized"] = {name: "Uncategorized"};
            }
        })
        const obj = {
            name: "Search results - Resources",
            iObjs: iObjs,
            cObjs: cObjs
        };
        return obj;
    },
    catChg: {
        heap: {},
        add({id, oldPId, newPId}) {
            if (Object.keys(this.heap).includes(`${id}`)) this.heap[id].newPId = newPId;
            else this.heap[id] = {oldPId: oldPId, newPId: newPId};
            const obj = dataHandler.categories[id]
            obj["pId"] = newPId;
            if (isDefined(newPId)) {
                const newPObj = dataHandler.categories[newPId];
                if (newPObj["cIds"]) newPObj["cIds"].push(id);
                else newPObj["cIds"] = [id];
                obj["p"] = newPObj;
            }
            if (isDefined(oldPId)) {
                const oldPObj = dataHandler.categories[oldPId];
                oldPObj["cIds"].splice(oldPObj["cIds"].indexOf(id), 1);
            }
        },
        commit() {
            //send changes to server
            heap = {};
        }
    },
    getMainCategoryObj() {
        const obj = {
            cIds: [],
            name: "Categories"
        };
        Object.entries(this.categories).forEach(([key, value]) => {
            if (!isDefined(value.pId)) obj.cIds.push(key);
        })
        return obj;
    },
    categoriesInit() {
        Object.entries(dataHandler.categories).forEach(([key, value]) => {
            if (isDefined(value["pId"])) {
                dataHandler.categories[key]["p"] = dataHandler.categories[value.pId];
            }
        });
        Object.entries(dataHandler.items).forEach(([key, value]) => {
            if (isDefined(value["cId"])) {
                if (isDefined(dataHandler.categories[value.cId]["iIds"])) dataHandler.categories[value.cId]["iIds"].push(key)
                else dataHandler.categories[value.cId]["iIds"] = [key];
            }
        });

    },
    //mock data
    items: {
        0: {
            id: 0,
            cId: 3,
            name: "classic work emitter"
        },
        1: {
            id: 1,
            cId: 2,
            name: "Mini laser emitter"
        }
    },
    categories: {
        0: {
            id: 0,
            cIds: [1,2],
            name: "Electronics"
        },
        1: {
            pId: 0,
            id: 1,
            cIds: [3],
            name: "Laptops"
        },
        2: {
            pId: 0,
            id: 2,
            name: "Projectors"
        },
        3: {
            pId: 1,
            id: 3,
            name: "Old Laptops"
        }
    }
}

dataHandler.categoriesInit();