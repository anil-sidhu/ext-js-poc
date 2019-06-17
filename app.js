Ext.application({
    name: 'StudentApp',
    requires: [
        // 'StudentApp.view.main.Main'
    ],
    // extend:'StudentApp.Application',
    models: ['StudentApp.model.Customers'],
    stores: ['StudentApp.store.Customers'],
    controllers: [
        'StudentApp.controller.AppController',
         'StudentApp.controller.LoginController',
         'StudentApp.controller.CustomerController'
        ],
    views: [
        'StudentApp.view.Main',
        'StudentApp.view.Login',
        'StudentApp.view.Customers',
        'StudentApp.view.Viewport'],

    launch: function () {
        console.log("hello MVC App")
        //   'StudentApp.view.Login'
    },

    defaultToken: 'login',
    enableRouter: true,
    autoCreateViewport: true,

    // mainView: 'StudentApp.view.Login',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    routes: {
        'login': {
            action: 'goLogin',
            before: 'beforeLogin',
        },
        'main': {
            action: 'goMain',
            before: 'beforeMain',
        },
        'customers': {
            action: 'goCustomer',
            before: 'beforeCustomer',
        }
    },
    onUnmatchedRoute: function (hash) {
        alert(" Error 404 View not found " + hash);
    },
    beforeLogin: function (action) {
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goLogin: function () {
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        // menu.setHidden(true);
        target = viewport.down('#viewport-target');
        // target.removeAll();
        view = Ext.create('StudentApp.view.Login');
        target.add(view);
    },
    beforeMain: function (action) {
        Ext.log(">> beforeMain -- here check permissions");
        action.resume();
    },
    goMain: function () {
        Ext.log(">> goMain");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(false);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('StudentApp.view.Main');
        target.add(view);
    },


    beforeCustomer: function (action) {
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goCustomer: function () {
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(true);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('StudentApp.view.Customers');
        target.add(view);
    },

});