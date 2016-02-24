'use strict';

let TranslateProvider = require('./TranslateProvider');
let Transformer       = require('./Transformer');


let tp = new TranslateProvider();
tp.process().then(sheet => {
    let t = new Transformer(sheet);
    t.createTranslation()


});
