sap.ui.jsview("ui5vtpro.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5vtpro.main
	*/ 
	getControllerName : function() {
		return "ui5vtpro.main";
	},

	
	
	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5vtpro.main
	*/ 
	createContent : function(oController) {
		
		   //create the ApplicationHeader control
	/*
    var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader");
        oAppHeader.setLogoSrc("http://go.sap.com/dam/application/shared/logos/sap-logo.png.adapt.72_36.false.png");
        oAppHeader.setLogoText("UI5 - VTPro - Teste")
        oAppHeader.setDisplayWelcome(false);
        oAppHeader.setDisplayLogoff(false);
        oAppHeader.placeAt("content");
			*/
		var oMasterShell = new sap.ui.ux3.Shell("MainShell", {
			appTitle : "Employee Portal",
			showLogoutButton : true,
			showSearchTool : true,
			showInspectorTool : false,
			showFeederTool : false,
			designType : sap.ui.ux3.ShellDesignType.Crystal,

			headerItems : [ 
			         ],
			    
			// Content
			content : [ new sap.ui.view({
				id       : "vAtv",
				viewName : "ui5vtpro.vAtv",
				type     : sap.ui.core.mvc.ViewType.JS
			}),
/*			sap.ui.view({
				id       : "NotificationBar",
				viewName : "zui5_portal.NotificationBar",
				type     : sap.ui.core.mvc.ViewType.JS
			})
			*/
			 ],
			worksetItems : [ 
						    new sap.ui.ux3.NavigationItem("AT", {
							key  : "Atv",
							text : "Atividade"
						}), 
/*						
						new sap.ui.ux3.NavigationItem("TM", {
							key  : "TimeSheet",
							text : "Time Sheet"
						}), new sap.ui.ux3.NavigationItem("LR", {
							key  : "LeaveRequest",
							text : "Leave Request"
						}), new sap.ui.ux3.NavigationItem("ES", {
							key  : "EmployeeSearch",
							text : "Employee Directory"
						}), new sap.ui.ux3.NavigationItem("TP", {
							key  : "TripPlanner",
							text : "Travel Planning"
						}) */
						],
						worksetItemSelected : oController.worksetItemSelected,
						search: [oController.search, oController]
					});

					return oMasterShell;
				}

			});
