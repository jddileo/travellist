sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        ZTSTFunction: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
