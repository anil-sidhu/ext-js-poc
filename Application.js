Ext.application({
  
   
    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onUnmatchedRoute'
            }
        }
    },
    routes: {
        'login' : {
                action     : 'goLogin',
                before     : 'beforeLogin',
            },
            'main' : {
                action     : 'goMain',
                before     : 'beforeMain',
            }
        },
    onUnmatchedRoute : function(hash) {
        alert(" Error 404 View not found " + hash);
    },
    beforeLogin: function(action){ 
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goLogin: function(){ 
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(true);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view= Ext.create('StudentApp.view.Login');
        target.add(view);
         },


         beforeMain: function(action){ 
            Ext.log(">> beforeMain -- here check permissions");
            action.resume();
        },
        goMain: function(){ 
            Ext.log(">> goMain");
            viewport = Ext.getCmp('viewport');
            menu = viewport.down('#main-nav-toolbar');
            menu.setHidden(false);
            target = viewport.down('#viewport-target');
            target.removeAll();
            view= Ext.create('StudentApp.view.Main');
            target.add(view);
        },
  
});