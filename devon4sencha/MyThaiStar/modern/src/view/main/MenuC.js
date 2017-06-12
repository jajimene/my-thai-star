Ext.define('MyThaiStar.view.main.MenuC', {
    extend: 'Ext.panel.Panel',
    xtype: 'menuOptionC',
    flex:1,
    items:[{
        xtype: 'componentdataview',
        store: [
         { name: 'Peter',  age: 26 },
         { name: 'Ray',   age: 21 },
         { name: 'Egon', age: 24 },
         { name: 'Winston', age: 24 }
         ],
         itemConfig: {
            xtype: 'button'
        },
        itemDataMap: {
            '#': {
                text: 'name'
            }
        }
    }]
});
