const { Connection, Request } = require("tedious");

//reminder to reinsert credentials and server url in azure-sql.json
const config = require("./configs/dev-only/azure-sql")
const altLabels = require ("./configs/db-alt-prop-names");

class Connector {
    static options = {
        getCategories: `exec spGetCategories`,
        getConsumablesProtected: `exec spProtectedGetAllConsumables`,
        getConsumablesPublic: `exec spPublicGetAllConsumables`,
        getNonConsumablesProtected: `exec spProtectedGetAllNonConsumables`,
        getNonConsumablesPublic: `exec spPublicGetAllNonConsumables`,
        //...and so on
    }
    
    static async new(query) {
        return new Promise((resolve, reject) => {
            
            const connection = new Connection(config);
            
            connection.on("connect", err => {
                if (err) {
                    return reject(err);
                } else {
                    const request = new Request(
                        query,
                        (err, rowCount) => {
                            connection.close();
                            
                            if (err) {
                                console.error(err.message);
                            } else {
                                console.log(`${rowCount} row(s) affected`);
                            }
                        }
                        );
                        
                        const data = {};
                        request.on("row", columns => {
                            const id = columns[0].value;
                            data[id] = {};
                            columns.forEach(column => {
                                const hasAltLabel = typeof altLabels[column.metadata.colName] !== typeof undefined;
                                console.log("%s\t%s", column.metadata.colName, column.value);
                                data[id][
                                    hasAltLabel ? altLabels[column.metadata.colName] : column.metadata.colName
                                ] = column.value;
                            });
                        });
                        request.on("requestCompleted", () => {
                            connection.close();
                            return resolve(data);
                        });
                        
                        console.log("Executing...")
                        connection.execSql(request);
                    }
                });
                connection.connect();
            });
        }
    }
    
    module.exports = {
        Connector
        //expose functions, variables here
    }