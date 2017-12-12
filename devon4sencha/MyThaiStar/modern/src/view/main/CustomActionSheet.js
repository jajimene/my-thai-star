Ext.define('MyThaiStar.view.main.CustomActionSheet', {
    extend: 'Ext.ActionSheet',
    //alias: 'main.CustomActionSheet',
     xtype: 'CustomActionSheet',
     height: 400,
     weigth: 250,
     border: true,
     flex:1,
    items: [
        { xtype: 'container',
            layout: {type:'vbox'},
            items: [{
                xtype:'label',
                text:'RESUME BOOKING'
            }]
    },
        {
            text: 'Save draft'
        },
        {
            text: 'Cancel',
            ui  : 'confirm'
        }
    ]
});