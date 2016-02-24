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
        let translations = [];

        _.forEach(this.header, header => {
            let language = new Language(header);

            
            _.forEach(this.data, rows => {
                _.forEach(rows, cell => {
                    
                    console.log(cell[0]);
                    
                })
            });
            //translations.push(language);
        });
    }


}


module.exports = Transformer;