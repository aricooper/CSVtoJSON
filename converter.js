const path = require('path');
const fs = require('fs');

var jsonList = [];
const csv = require('csvtojson');
csv()
        .fromFile('customer-data (Autosaved).csv')

        .on('json', (jsonObj, rowIndex) => {
            jsonList[rowIndex] = jsonObj;

        })
        .on('done', () => {
            console.log('done');
            fs.writeFileSync('customer-data.json', JSON.stringify(jsonList, null, 2));
        });



