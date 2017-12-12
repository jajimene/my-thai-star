Ext.define('Sample.view.main.Menu', {
    extend: 'Ext.menu.Menu',

    alias: 'widget.main-menu',

    requires: [
        'Ext.Toolbar',

        //by default use the Devon VC for this menu
        'Devon.view.main.MenuVC'
    ],

    controller: 'main-menu',
    cls:'main-menu',
    buttonAlign:'left',
    defaults : {
        ui: 'plain'
    },
    items: [{
        text: i18n.main.menu.tables,
        eventName: 'eventOpenTableList'
    },{
        text: i18n.main.menu.newTables,
        eventName: 'eventTableAdd'
    },{
    text: i18n.main.menu.positions,
    eventName: 'event_menuOpenPositions'
    }]

},function(){

});
