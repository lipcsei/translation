var Spreadsheet = require('edit-google-spreadsheet');
var _           = require('lodash');


var options = {
    debug            : true,
    prettify         : false,
    includeInfo      : false,
    headerIsFirstRow : true,
    worksheetId      : process.env.GOOGLE_WORKSHEET_ID || 'od6',
    spreadsheetId    : process.env.GOOGLE_SPREADSHEET_ID || '1ZWcJ1KyWvvBE8xSzrHsZCn2TUnqYMc8BYypGUD9EGoY',
    oauth2           : {
        client_id     : process.env.GOOGLE_CLIENT_ID || '336584384250-tj91ok6q6736nvic9eeasm8gff5sucmd.apps.googleusercontent.com',
        client_secret : process.env.GOOGLE_SECRET || '6KZ_yqudmNESRg7VWZQ8w3zk',
        refresh_token : process.env.GOOGLE_REFRESH_TOKEN || '1/9xQo7qkp8T2Im16eEw9ED6fur5NswLuVTj-oXpK-xlfBactUREZofsF9C7PrpE-j'
    }
};





var sync = function (err, sheet) {
    sheetReady(err, sheet)
        .then(fetchSheetData)
        .then(transformSheet)
        //.then(data => {
        //    console.log(data);
        //})

        .catch((err) => console.log(err));
};


var sheetReady = function (err, spreadsheet) {
    return new Promise(function (resolve, reject) {
        if (err) {
            reject(err);
        } else {
            resolve(spreadsheet);
        }
    });
};

var fetchSheetData = function (spreadsheet) {
    return new Promise(function (resolve, reject) {
        spreadsheet.receive(function (err, rows, info) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

var transformSheet = function (sheetData) {
    var header = createHeader(sheetData['1']);

    // delete header from sheet
    if (sheetData['1']) {
        delete sheetData['1'];
    }

    return _.object(_.map(header, function (language, index) {
        return [language, _.object(_.map(sheetData, function (row) {
            var token       = row['1'].trim().toLowerCase().split(".").join("_").split("-").join("_");
            var translation = row[(index + 2).toString()];
            if (translation) {
                return [token, translation];
            }
        }))];
    }));
};

var createHeader = function (headerRow) {
    var header = headerRow;
    if (header) {
        delete header["1"];
    }
    return _.values(header)
};


var nahat = () =>{
    //return  new Promise(resolve, reject){
    console.log(    Spreadsheet.load(options, sync));

};
nahat();
