
// var customToolBar = Ext.create('Ext.toolbar.Toolbar', {
//     cls: "top-tool-bar",
//     items: [{
//         text: 'Home',
//         itemId: 'home-toolbar-btn',
//         handler: function () {
//             alert("here")
//             Ext.History.add('#customers')
//         }
//     }, {
//         text: 'Login',
//         itemId: 'login-toolbar-btn'
//     },
//     {
//         text: 'Register',
//         itemId: 'register-toolbar-btn',
//         handler: function () {
//             alert("persomn")
//             Ext.History.add('#person')
//         }
//     }],
//     layout: {
//         type: "hbox",
//         pack: "end",
//         // align: "right"
//     },
//     flex: 1

// });

// var logo = Ext.create('Ext.Img', {
//     src: 'https://docs.sencha.com/assets/images/sencha_logo_thumb.png',
//     height: 64,
//     width: 64
// });

// var component2 = Ext.create('Ext.Component', {
//     html: 'Body Part',
//     flex: 1
// });

// var component3 = Ext.create('Ext.Component', {
//     html: 'Footer',
//     layout: {
//         type: 'vbox',
//         align: 'stretch'
//     },
//     style: {
//         backgroundColor: '#e8e2e2'
//     },
//     flex: 1


// });

// nav = Ext.create('Ext.container.Container', {
//     style: { borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#3487c3' },
//     layout: {
//         type: "hbox",
//         // pack: "center",
//         // align: "center"
//     },
//     items: [
//         logo,
//         customToolBar,
//     ],
//     flex: 2
// });


Ext.define('StudentApp.view.Home', {


    extend: 'Ext.container.Viewport',
    requires: [
        // 'Ext.layout.container.Border',
        'Ext.toolbar.Toolbar',
        // 'Ext.panel.Panel'
    ],
    xtype: 'container',
    itemId: 'home-target',
    id:'home',
    fullscreen: true,
    items: [nav]
});



