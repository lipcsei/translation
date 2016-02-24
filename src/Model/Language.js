'use strict';

class Language {

    constructor(key) {
        this.key          = key;
        this.translations = [];
    }

    add(translation) {
        this.translations.push(translation);
        return this;
    }
}

module.exports = Language;