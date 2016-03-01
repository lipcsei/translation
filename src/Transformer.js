'use strict';

let TranslateProvider = require('./TranslateProvider');
let _                 = require('lodash');
let Language          = require('./Model/Language');
let Translation       = require('./Model/Translation');

class Transformer {

    constructor(data) {
        this.data   = _.groupBy(_.map(data, cell => ({row : cell.row, col : cell.col, value : cell.value})), 'row');
        this.header = _.map(this.data[1], r => r.value);
        delete this.data[1];
    }


    createTranslation() {
        //let translations = [];
        let i            = 2;
        let language     = {};
        _.forEach(this.header, header => {



           let translations = [];

            console.log(language);
            _.forEach(this.data, rows => {
                let key   = _.find(rows, {col : 1}).value;
                let value = _.find(rows, {col : i}).value;
                let t     = new Translation(key, value);

                translations.push(t);

            });
            console.log(translations);
            i++;

            //language = new Language(header, translations);
            //translations.push(language);
        });

//console.log(translations);
    }


}


module.exports = Transformer;