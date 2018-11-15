var jsonConcat = require('json-concat');

jsonConcat(
    {
        
        src:  ["mock/DBs/categoryDB.json", "mock/DBs/expenseDB_2018.json","mock/DBs/expenseDB_2019.json"],
        //src: "mock/DBs",
        dest: "mock/allDB.json",
    },
    function (json) {
        console.log(json);
    }
);