sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "PruebaNorthwind/PruebaNorthwind/util/Constants"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,History,Constants) {
		"use strict";

		return Controller.extend("MasterDetail.MasterDetail.controller.Detail", {
			onInit: function () {
                
            },
            
            onNavBack : function() {
			var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				// There is no history!
				// Naviate to master page
				this.getOwnerComponent().getRouter().navTo(Constants.routes.main);
			}
		}
		});
	});