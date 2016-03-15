sap.ui.jsview("ui5vtpro.vAtv", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5vtpro.vAtv
	*/ 
	getControllerName : function() {
		return "ui5vtpro.vAtv";
	},
	
    
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5vtpro.vAtv
	*/ 
	createContent : function(oController) {
		
        
        // setting up model
	    var oDATAServiceURL = getUrl("/sap/opu/odata/SAP/ZUI5VTPRO_SRV/atividadeSet");  
	    //var oDATAServiceURL = "http://sapweb.noip.me:8200/sap/opu/odata/SAP/ZUI5VTPRO_SRV/";  
	    var oDATAServiceUserName = "wferreira";  
	    var oDATAServicePassword = "polly1";  
	    var oModel = new sap.ui.model.odata.ODataModel(oDATAServiceURL, false, oDATAServiceUserName, oDATAServicePassword, null);
	    if (oModel == undefined) {
	    	Log.console("não carregou o modelo");
	    } else {
	    	Log.console("Carregou o modelo OK");
	    }
        sap.ui.getCore().setModel(oModel);			          
      
    
        // setting up table
        var oTable = new sap.ui.table.Table({
            editable: false,
            toolbar: new sap.ui.commons.Toolbar({ 
                items: [ 
                    new sap.ui.commons.Button({
                        text: "Cria Atividade", 
                        press: function() {
                            openCreateDialog();
                        }, 
                    }),
                    new sap.ui.commons.Button({
                        text: "Atualiza ", 
                        press: function() {
                            var idx = oTable.getSelectedIndex();
                            if (idx == -1) return;
                            var rows = oTable.getRows();
                            var user = rows[idx].getCells();
                            openUpdateDialog(user);
                        }, 
                    }),
                    new sap.ui.commons.Button({
                        text: "Apaga atividade", 
                        press: function() {
                            var idx = oTable.getSelectedIndex();
                            if (idx == -1) return;
                            var rows = oTable.getRows();
                            var user = rows[idx].getCells();
                            openDeleteDialog(user[0].getValue());
                        }, 
                    })
                ]
            }),
        });
    
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Id"}),
            template: new sap.ui.commons.TextField().bindProperty("value", "idAtiv"),
            editable: false,
            sortProperty: "Id"
        }));
    
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Atividade"}),
            template: new sap.ui.commons.TextField().bindProperty("value", "descAtc"),
            sortProperty: "Atividade",
            editable: false,
        }));
    
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Ativo"}),
            template: new sap.ui.commons.TextField().bindProperty("value", "Ativo"),
            sortProperty: "Ativo",
            editable: false,
        }));
        
        oTable.setModel(oModel);
        oTable.bindRows("atividadeSet");
        oTable.placeAt("content");
        
        
		
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}

});

function getUrl(sUrl) {
	if (sUrl == "") {
		return sUrl;
	if (window.location.hostname == "localhost"
		 || window.location.hostname == "sapweb.noip.me:8200") {
			 return "proxy" + sUrl;
		 } else {
			 return sUrl;
		 }
	}
};