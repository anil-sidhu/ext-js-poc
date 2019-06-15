Ext.define('StudentApp.controller.LoginController', {
    extend: 'Ext.app.Controller',
    models: [],
    views: ['StudentApp.view.Login'],
    init: function () {
    	console.log("regiter listeners...");
        this.control({
        	"#loginButton": {
			click: this.doLogin,
			}
        });
    },
    doLogin: function () {
    	var username =Ext.getCmp("username").getValue();
    	var password =Ext.getCmp("password").getValue();
    	 Ext.Ajax.request({
		    url: 'http://localhost:4000/api/users/login',
		    method: 'POST',
	      	params: { 
	   		'username':username,'password':password
			},
		     success: function(response, opts) {
		         var obj = Ext.decode(response.responseText);
		         console.dir(obj.result);
                 if(obj.result == 'success'){
                     Ext.History.add('#main');
                 }else{
                     alert('Login failed');
                 }
		     },

		     failure: function(response, opts) {
		         console.log('server-side failure with status code ' + response.status);
		     }
		 });
    }
});
