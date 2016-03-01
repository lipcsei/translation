'use strict';
let Translation = require('./Translation');

class Language {

    constructor(key) {
        this.key          = key;
        this.translations = [];
    }

    add(translation) {
        if (translation instanceof Translation) {
            this.translations.push(translation);
            return this;
        } else {
            throw new Error('Invalid Translation')
        }

    }
}

module.exports = Language;