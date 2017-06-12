/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyThaiStar.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'MyThaiStar.view.main.MenuA',
        'MyThaiStar.view.main.MenuB',
        'MyThaiStar.view.main.MenuC'
    ],

    controller: 'main',
    viewModel: 'main',
    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    //tabBarPosition: 'bottom',

    /*onItemSelected: function(){
        alert('hola...');
        //var menu2 = Ext.ComponentQuery.query('menu2');
        //menu2[0].setHidden(true);
    },*/

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        ui: 'header',
        items: [{
            iconCls: 'x-fa fa-star-o'
        },{
            xtype: 'container',
            html: '<h3>My Thai Star</h3>'
        }, 
        '->',
        {
            text: '**Home',
            handler: function() {
                var menuOp = Ext.ComponentQuery.query('menuOptionA')[0];
                var bookOp = Ext.ComponentQuery.query('menuOptionB')[0];
                var homeOp = Ext.ComponentQuery.query('menuOptionC')[0];
                
                menuOp.setHidden(true);
                bookOp.setHidden(true);
                homeOp.setHidden(false);
            }       
        }, {
            text: '**Menu',
            handler: function() {
                var menuOp = Ext.ComponentQuery.query('menuOptionA')[0];
                var bookOp = Ext.ComponentQuery.query('menuOptionB')[0];
                var homeOp = Ext.ComponentQuery.query('menuOptionC')[0];
                
                menuOp.setHidden(false);
                bookOp.setHidden(true);
                homeOp.setHidden(true);
            }
        }, {
            text: '**Book table',
            handler: function() {
                var menuOp = Ext.ComponentQuery.query('menuOptionA')[0];
                var bookOp = Ext.ComponentQuery.query('menuOptionB')[0];
                var homeOp = Ext.ComponentQuery.query('menuOptionC')[0];

                bookOp.setHidden(false);
                menuOp.setHidden(true);
                homeOp.setHidden(true);
            }
        }, {
            iconCls: 'x-fa fa-user-circle'
        }, {
            iconCls: 'x-fa fa-list-ul'
        }]

    },
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            /*bind: {
                html: '{loremIpsum}'
            }*/
            items: [{
                xtype: 'menuOptionB'
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            
            items: [{
                xtype: 'menuOptionA'
            }]
        }/*,{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }*/
    ]
});