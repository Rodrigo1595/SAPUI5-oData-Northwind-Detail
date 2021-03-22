sap.ui.define([],function(){

    'use strict';

    return{
        //Modelos
        model:{
            I18n:'i18n',
            orderModel:'orderModel',
            orderModelId:'orderModelId'

          
        },

        //Propiedades del modelo , getProperty
        properties: {
            
        },

        ids: {
            Northwind:"Northwind"

            
        },

        routes:{
            detalle:"RouteDetalle",
            main:"RouteMain",
            oData:{
                Northwind:"PruebaNorthwind/PruebaNorthwind/util/Services.js"
            },
            order:{
                orders:"/V3/Northwind/Northwind.svc/Order_Details"
            }
        }
    }
},true);