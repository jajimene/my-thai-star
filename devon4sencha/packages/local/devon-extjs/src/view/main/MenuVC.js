/*
    When using this controller a button or menuitem with "eventName" configuration will fire a global event with that name

    This way we can decouple global menu actions from the controllers capturing those events 

*/
Ext.define('Devon.view.main.MenuVC', {
    extend: 'Ext.app.ViewController',

    requires: [],

    alias: 'controller.main-menu',

    control: {
        'button, menuitem': {
            click: 'menuClick',
            tap: 'menuClick'
        }
    },

    menuClick: function(menuItem) {
        if(menuItem && menuItem.eventName){
            Ext.GlobalEvents.fireEvent(menuItem.eventName, {});
        }
    }
});
