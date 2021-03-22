sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "PruebaNorthwind/PruebaNorthwind/util/Services",
        "PruebaNorthwind/PruebaNorthwind/util/Constants"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,JSONModel,Services,Constants) {
		"use strict";

		return Controller.extend("PruebaNorthwind.PruebaNorthwind.controller.mainService", {
			onInit: function () {
                this.loadModelBase();
            },

            loadModelBase: async function(){
                //Crear modelo con promesa asincrona
                //Usar component para mas detallado
                var oComponent = this.getOwnerComponent();
                const oResponse = await Services.getoData(Constants.routes.oData.Northwind);
                const oData = oResponse[0];
                var oNameModel = new JSONModel();
                oNameModel.setData(oData);

                oComponent.setModel(oNameModel,Constants.model.orderModel);
            },

            onPressItem: async function(oEvent){

                var oItem = oEvent.getSource();
                var oBindingContext = oItem.getBindingContext(Constants.model.orderModel);
                var oModel = this.getView().getModel(Constants.model.orderModel);
                var oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());

                //Obtener ID
                let oIdItem = oProductoSeleccionado.OrderID;
                var oComp= this.getOwnerComponent();
                const oResponse = await Services.getoDataByID(Constants.routes.oData.Northwind,oIdItem);
                const oData = oResponse[0];
                //Setear Nuevo Modelo con los datos del ID proporcionado
                let oIdModel = new JSONModel();
                oIdModel.setData(oData);
                //ver que llego y setear
                oComp.setModel(oIdModel,Constants.model.orderModelId);
                //Navegar a detalle
                var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
                oRoute.navTo(Constants.routes.detalle);
            },

            cambiarLenguaje: function(){
                if(sap.ui.getCore().getConfiguration().getLanguage() == 'EN'){
                     sap.ui.getCore().getConfiguration().setLanguage("ES")
                }else{
                    //Setear lenguaje al español si esta en ingles.
                    sap.ui.getCore().getConfiguration().setLanguage("EN")
                }
            }
		});
	});
