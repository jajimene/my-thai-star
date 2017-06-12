Ext.define('MyThaiStar.view.main.CustomDishes', {
    extend: 'Ext.Panel',
    xtype: 'customDishes',
    requires: ['MyThaiStar.controller.CustomDishesController',
        //'MyThaiStar.view.main.CustomDishesModel',
        //'MyThaiStar.view.store.CustomDishesStore',
//        'Ext.grid.plugin.CellEditing',
        //'MyThaiStar.view.main.CustomActionSheet'
        ],
    controller: 'customdishescontroller',
    //viewModel: 'customDishes',
    /*store: {
            type: 'customDishesStr'
        },*/
    items:[{
        
        xtype: 'panel',
        layout: 'hbox',
        
        //weigth: 200,
        //height: 200,
        flex:1,
        label: 'panel01',
        items: [
            {xtype: 'image',
            flex:1,
            src: './resources/dish.png'
        },
        {
            xtype: 'fieldset',
            label: 'fieldset01',
            flex:1,
            layout: {
                type: 'vbox',
                //align: 'left'
            },
            items:[
                {xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'right'
            },
            
            border: false,
            items: [
                /*ejemplo de grid-store*/
                    /*        {
                    xtype: 'grid',
                    reference: 'todo-list',
                    flex: 1,
                    height: 100,
                    //hideHeaders: true,

                    
                    store: {
                        type: 'CustomDishesStore'
                    },

                    columns: [
                        
                        {   text: 'Descripción',
                            dataIndex: 'price',
                            //tooltip: 'sdsdfsdfsdf',
                            flex: 1,
                            editable: true
                        }
                    ]
                            }  ,fin ejemplo */
                {
                 xtype: 'label',
                 name: 'price',
                 dataIndex: 'price',
                 html: '5€'
            }]
            },
                {
                 xtype: 'label',
                 name: 'title',
                 html: 'RED CURRY'
            },
                {
                 xtype: 'label',
                 name: 'subtitle',
                 html: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un imp'
            },
            {xtype: 'fieldset',
            label: 'fieldset01',
            flex:1,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            items:[{
                xtype: 'checkboxfield',
                name: 'tofu',
                label: 'Tofu +1€',
                reference: 'tofu',
                //bodyAlign: 'start',
                labelAlign: 'right'},
                {
                xtype: 'checkboxfield',
                name: 'chiken',
                label: 'Chiken +1€',
                reference: 'chiken',
                labelAlign: 'right'},
                {
                xtype: 'checkboxfield',
                name: 'pork',
                label: 'Pork +1€',
                reference: 'pork',
                labelAlign: 'right'
                }]},
            {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'right'
            },
            border: false,
            items: [{
                xtype: 'button',
                name: 'btnAdd',
                text: 'ADD TO ORDER',
                handler: 'addToOrder'
            }]}
        ]
    }
        ]
    }]
}); 