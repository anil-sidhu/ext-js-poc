Ext.define("StudentApp.controller.AppController",{
	extend: 'Ext.app.Controller',
	init: function (application){
		this.control( {
		"#loginButton": {
			click: 'callOnClick'
			}
		});
	},
	callOnClick: function(component, event, eOpts){ 
		alert("on click of login button.");
	}
});