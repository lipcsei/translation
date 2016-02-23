'use strict';

var GoogleSpreadsheet = require("google-spreadsheet");
var _                 = require('lodash');

//var my_sheet = new GoogleSpreadsheet('1ZWcJ1KyWvvBE8xSzrHsZCn2TUnqYMc8BYypGUD9EGoY');

var creds = {
    private_key_id : "5f470ca7b69459d5556bd44ab04794060a03be4f",
    private_key    : "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCfYOtAous+4qOn\npwbcpWKIcKmTQ+keOM9Ug0mPFHVxhBOGNN91TNmYHKGCqwPPNfsufZvFYAT4cuhk\nhYzdJ1L9v7F3T07jZ/ZXVEnfsY0fZqLCKNszAttDp2gHFq6EuMxKtcBmYiRRwZf5\nUwCCqvPuRChfncNb3khT7vZEgTQOcbtIrFJxdMLr+//J5SiELTSsIHLfW0hsEuaZ\nmNPVnmxAcxf8gF8Wmt0EUgD0cO/x4GYnX1So3LkznCVNaj0eSn8dD6UoJRvCWjEz\nU8RT3C9Q4KKAMtl0TvJGVc+q6uYKD2tzBWmjGIHvJv+aJvt2l33arYcQWkXP+h6H\nQrTRvy03AgMBAAECggEAG8+hvYmwWyzZOewfemkxpHVkYdo715Y6N5khQOJlDAXs\nEkMvqxxZ6/0zAcYtx/63cglhITP8Kg6DFudnCUBPbxAAO72PGoeNqPeAXJRy98PF\nKvROK7yX3lpcAMCoe2hz3aWRiUwe4lVR26PsNuD15+Hk2aqB6IoFPQA54QJavxo5\nXzX2JUIY3ASXDE3M4aCAlnh4Rdnm0UeXVgLt9IY+LOcbW1XQ/0gOEaxxOshNZ1XH\nTfrkDpA9BMU0m6ZlJfuWv5LoKBusFDGUFk7pTjltlX7/dBgalwv5nTVDKbKuUzOi\netUO1Ull18lu+rwDCmRvDrn7guSxJ7yc+YcRP3xDwQKBgQD6Z733TFVqNR7GrBnW\nAC0pNMPVNVdivCOOQPwMbqCIQBaHUl9RlxjG+aiGHJHWw+lH3t6pF1lCZKrkqS26\n6raX1wl9jR4zLNIJ0j46XUOf6HlDq1PVEwXO/6fw/WWnSM7iv2bL+DHrrDeH5zI4\nuY3Hk7aixTUck39KAWgUyWE5DwKBgQCi8Ia5zuNlStgj3/3MIE8mcPsLHy1AJI3R\n/2DJYmuyrtmPREs4L1g9Zr6L9ozOJtH9KHyvS+7VhWD4RcrFzA0Jf0syjT3LILt0\nei2iYfwijJDOmZq55ndqhl5ZMbuBx5DQukGLcCf40goWz6HOJV2rdiEx6Bt9TnAo\npOyPluI5WQKBgGeIZ1INnK9aIUxxsgj6b7G+4E2STXxEX8sccVpOj09meCohU8nv\nWE5EwXoZ6+7Jd/XAX324aq554vLCRGcpTq+/OGxR4a+1E27+H76P+zrtqt3gw7uw\nrtEkgXKxwssE3o2AJ+ejyjgwL5GgdPJhPg7Ls1LfiRM0pQebR0Z48RrfAoGACAVC\n/H58nw3SGeH6wkOM4d2J3gBI3/Fssbuabg9UMdV9jBnWgguCknMuSgF26ObsS0Pk\n71QTi5snLNFyq83hjmgfsXtWYVtZHuCswmOEX8b/kcvp2+DGXA4FMurJyheiv0OL\n2mtI7GyaZokN8/HO7JPCCozcXYyw5K9Jnb/VnvECgYAmyDNNdQKR4N1/cckjOYDu\nEu9WgBIPujStGh/BKdO+iGSg41QzlYaG54J4r2Z16abkcS2EEZY/i/7VroBavd4t\nzZYl6lB7k6oijk9qe0eQju6LyZ39Wj0NRV697RjbvYMO41geK73q9ggT/PZXabvk\ngtHfXRMgr3H+7UObERYCWQ==\n-----END PRIVATE KEY-----\n",
    client_email   : "336584384250-m52hl8j67n9mep450qkr7fu37pmb5mon@developer.gserviceaccount.com"
};

//my_sheet.useServiceAccountAuth(creds, function (err) {
//    // getInfo returns info about the sheet and an array or "worksheet" objects
//    my_sheet.getInfo(function (err, sheet_info) {
//        console.log(sheet_info);
//
//    });
//
//});


class TranslateProvider {

    constructor() {
        this.sheet = new GoogleSpreadsheet('1ZWcJ1KyWvvBE8xSzrHsZCn2TUnqYMc8BYypGUD9EGoY');
        var creds = {
            private_key_id : "5f470ca7b69459d5556bd44ab04794060a03be4f",
            private_key    : "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCfYOtAous+4qOn\npwbcpWKIcKmTQ+keOM9Ug0mPFHVxhBOGNN91TNmYHKGCqwPPNfsufZvFYAT4cuhk\nhYzdJ1L9v7F3T07jZ/ZXVEnfsY0fZqLCKNszAttDp2gHFq6EuMxKtcBmYiRRwZf5\nUwCCqvPuRChfncNb3khT7vZEgTQOcbtIrFJxdMLr+//J5SiELTSsIHLfW0hsEuaZ\nmNPVnmxAcxf8gF8Wmt0EUgD0cO/x4GYnX1So3LkznCVNaj0eSn8dD6UoJRvCWjEz\nU8RT3C9Q4KKAMtl0TvJGVc+q6uYKD2tzBWmjGIHvJv+aJvt2l33arYcQWkXP+h6H\nQrTRvy03AgMBAAECggEAG8+hvYmwWyzZOewfemkxpHVkYdo715Y6N5khQOJlDAXs\nEkMvqxxZ6/0zAcYtx/63cglhITP8Kg6DFudnCUBPbxAAO72PGoeNqPeAXJRy98PF\nKvROK7yX3lpcAMCoe2hz3aWRiUwe4lVR26PsNuD15+Hk2aqB6IoFPQA54QJavxo5\nXzX2JUIY3ASXDE3M4aCAlnh4Rdnm0UeXVgLt9IY+LOcbW1XQ/0gOEaxxOshNZ1XH\nTfrkDpA9BMU0m6ZlJfuWv5LoKBusFDGUFk7pTjltlX7/dBgalwv5nTVDKbKuUzOi\netUO1Ull18lu+rwDCmRvDrn7guSxJ7yc+YcRP3xDwQKBgQD6Z733TFVqNR7GrBnW\nAC0pNMPVNVdivCOOQPwMbqCIQBaHUl9RlxjG+aiGHJHWw+lH3t6pF1lCZKrkqS26\n6raX1wl9jR4zLNIJ0j46XUOf6HlDq1PVEwXO/6fw/WWnSM7iv2bL+DHrrDeH5zI4\nuY3Hk7aixTUck39KAWgUyWE5DwKBgQCi8Ia5zuNlStgj3/3MIE8mcPsLHy1AJI3R\n/2DJYmuyrtmPREs4L1g9Zr6L9ozOJtH9KHyvS+7VhWD4RcrFzA0Jf0syjT3LILt0\nei2iYfwijJDOmZq55ndqhl5ZMbuBx5DQukGLcCf40goWz6HOJV2rdiEx6Bt9TnAo\npOyPluI5WQKBgGeIZ1INnK9aIUxxsgj6b7G+4E2STXxEX8sccVpOj09meCohU8nv\nWE5EwXoZ6+7Jd/XAX324aq554vLCRGcpTq+/OGxR4a+1E27+H76P+zrtqt3gw7uw\nrtEkgXKxwssE3o2AJ+ejyjgwL5GgdPJhPg7Ls1LfiRM0pQebR0Z48RrfAoGACAVC\n/H58nw3SGeH6wkOM4d2J3gBI3/Fssbuabg9UMdV9jBnWgguCknMuSgF26ObsS0Pk\n71QTi5snLNFyq83hjmgfsXtWYVtZHuCswmOEX8b/kcvp2+DGXA4FMurJyheiv0OL\n2mtI7GyaZokN8/HO7JPCCozcXYyw5K9Jnb/VnvECgYAmyDNNdQKR4N1/cckjOYDu\nEu9WgBIPujStGh/BKdO+iGSg41QzlYaG54J4r2Z16abkcS2EEZY/i/7VroBavd4t\nzZYl6lB7k6oijk9qe0eQju6LyZ39Wj0NRV697RjbvYMO41geK73q9ggT/PZXabvk\ngtHfXRMgr3H+7UObERYCWQ==\n-----END PRIVATE KEY-----\n",
            client_email   : "336584384250-m52hl8j67n9mep450qkr7fu37pmb5mon@developer.gserviceaccount.com"
        };
    }

    _connect() {
        return new Promise((resolve, reject) => {
            this.sheet.useServiceAccountAuth(this.creds, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this);
                }
            })
        })
    }

    _getInfo(sheet) {
        return new Promise((resolve, reject) => {
            sheet.getInfo(function (err, sheet_info) {
                if (err) {
                    reject(err);
                } else {
                    resolve(sheet_info);
                }
            });
        });
    }

    _getCells(sheet){
        return new Promise((resolve, reject) => {
            sheet.getCells((err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }


    process() {
        return this._connect()
            .then(data => this._getInfo(data.sheet))
            .then(data => this._getCells(data.worksheets[0]))
            .catch((err)=> console.log(err))
    }

}

let tp = new TranslateProvider();

