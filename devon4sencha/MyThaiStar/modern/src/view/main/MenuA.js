Ext.define('MyThaiStar.view.main.MenuA', {
    extend: 'Ext.panel.Panel',
    //xtype: 'layout-vertical-box',
    xtype: 'menuOptionA',
    controller:'menu',
    requires: [
        'Ext.layout.VBox',
        'Ext.panel.Collapser',
        'MyThaiStar.view.menu.MenuController',
        'MyThaiStar.view.main.CustomDishes'
        //'MyThaiStar.view.store.CustomDishes'
    ],

    bodyPadding: 10,
    defaultType: 'panel',
    //height: 400,
    //width: 400,
    hidden: true,
    layout: {
        type: 'vbox'
    },

    defaults: {
        bodyPadding: 10,
        border: true
    },

    items: [
        {
        xtype: 'panel',
        docked: 'top',
        //bodyPadding: 20,
        //width: '50%',
        title: 'FILTERS',
        //html: '',
        collapsible: {
            collapsed: true,
            direction: 'top'
        }
        ,items:[{
            xtype: 'container',
            title: 'Panel 0',
            layout: 'vbox',
            autoSize: true,
            items:[{
                xtype: 'container',
                title: 'Panel 1',
                layout: 'hbox',
                autoSize: true,
                items:[{
                    xtype: 'checkboxfield',
                    name: 'maindishes',
                    label: 'Main dishes',
                    reference: 'maindishes',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'starter',
                    label: 'Starter',
                    reference: 'starter',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'dessert',
                    label: 'Dessert',
                    reference: 'dessert',
                    labelAlign: 'right',
                },
                {
                    xtype: 'checkboxfield',
                    name: 'noodle',
                    label: 'Noodle',
                    reference: 'noodle',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'rice',
                    label: 'Rice',
                    reference: 'rice',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'curry',
                    label: 'Curry',
                    reference: 'curry',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'vegan',
                    label: 'Vegan',
                    reference: 'vegan',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'vegetarian',
                    label: 'Vegetarian',
                    reference: 'vegetarian',
                    labelAlign: 'right'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'favourites',
                    label: 'Favourites',
                    reference: 'favourites',
                    labelAlign: 'right'
                }]
               
            },{
                xtype: 'container',
                title: 'Panel 1',
                layout: 'hbox',
                flex:1,
                //autoSize: true,
                items:[{
                    xtype: 'sliderfield',
                    reference: 'sliderPrice',
                    minValue: 1,
                    maxValue: 50,
                    label: 'Price',
                     flex:1,
                    listeners :{
                          change : function(me, newValue, oldValue, eOpts){
                                me.setLabel('Price');
                                me.setLabel(me.getLabel() + '  ' + newValue);
                          }
                    }},
                    
                    {
                    xtype: 'sliderfield',
                    reference: 'sliderLikes',
                    minValue: 0,
                    maxValue: 500,
                    label: 'Likes',
                    flex:1,
                    listeners :{
                          change : function(me, newValue, oldValue, eOpts){
                                me.setLabel('Likes');
                                me.setLabel(me.getLabel() + '  ' + newValue);
                        }}
                    }
                ]}
        
                
    ]
        
    
    }]
       }
    ,{
        xtype: 'panel',
        docked: 'right',
        border: false,
        items: [{
            xtype: 'button',
            text: 'CLEAR FILTERS',
            handler: 'onResetTap'
        },{
            xtype: 'button',
            text: 'APPLY FILTERS'
        }
        ]
    },{
        xtype: 'panel',
        title: 'panel contenedor',
        border: true,
        flex: 1,
        items: [
            {
            xtype: 'container',
                //title: 'Panel 1',
                layout: 'vbox',
                flex:1,
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items:[
                        {xtype:'customDishes',
                        name:'cd00',
                        flex:1},
                        {xtype:'customDishes',
                        name:'cd01',
                        flex:1}
                    ]
                },
                { xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items:[
                        {xtype:'customDishes',
                        name:'cd10',
                        flex:1},
                        {xtype:'customDishes',
                        name:'cd11',
                        flex:1}
                    ]
                }]
            
            }
        ]
    }]
});