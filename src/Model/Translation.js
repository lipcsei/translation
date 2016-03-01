'use strict';

class Translation {

    constructor(key, value) {
        this.key   = key.toLowerCase().replace(/[-., ]/g, '_');
        this.value = value;

    }
}

module.exports = Translation;
