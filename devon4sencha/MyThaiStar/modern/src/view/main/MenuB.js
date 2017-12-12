Ext.define(
    'MyThaiStar.view.main.MenuB', {
    extend: 'Ext.panel.Panel',
    //xtype: 'layout-vertical-box',
    xtype: 'menuOptionB',

    requires: [
        'Ext.layout.HBox',
        'Ext.Img',
        'MyThaiStar.view.book.BookController'
    ],
    controller: 'book',
    bodyPadding: 10,
    defaultType: 'panel',
    //height: 400,
    //width: 400,
    hidden: true,
    layout: {
        type: 'hbox'
    },

    defaults: {
        bodyPadding: 10,
        border: true
    },
buttons: [
            {
                name: 'reset',
                text: 'Reset',
                handler: 'onResetTap'
            }
            ,{
                name: 'booktable',
                text: 'Book table',
                reference: 'booktable',
                handler: 'onResetTap',
                id: 'booktableID',
                disabled: 'true'
            }],
items: [{xtype:'image',
         //left:'40%',
        // src: '../../../../resources/green-curry.jpg',
        src: './resources/green-curry.jpg',
        flex:1
         //width: 50,
        //height: 51
},
        {xype: 'vbox',
        flex: 1  ,
        border: false  
        },
        {
        xtype: 'fieldset',
        reference: 'fieldset1',
        title: '<h1>BOOK YOUR TABLE</h1><br/><h2>You can book a table and an order menu</h2>',
        //instructions: 'Please enter the information above.',
        

        items: [
            {
            xtype: 'datepickerfield',
            //dateFormat: 'ISO8601Short',
            destroyPickerOnHide: true,
            name: 'date',
            label: 'Date and time',
            reference: 'date',
            value: new Date(),
            edgePicker: {
                yearFrom: 1990
            }
        },
            {
            xtype: 'textfield',
            name: 'name',
            label: 'Name',
            reference: 'name',
            placeholder: 'Tom Roy',
            autoCapitalize: true,
            required: true,
            clearable: true
        }, {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email',
            reference: 'email',
            placeholder: 'me@sencha.com',
            clearable: true
        },
        {
            xtype: 'spinnerfield',
            name: 'adults',
            label: 'Adults',
            reference: 'adults',
            minValue: 0,
            maxValue: 10,
            required: true,
            clearable: true,
            stepValue: 1,
            cycle: true
        },
        {
            xtype: 'spinnerfield',
            name: 'kids',
            label: 'Kids',
            reference: 'kids',
            minValue: 0,
            maxValue: 10,
            required: true,
            clearable: true,
            stepValue: 1,
            cycle: true
        },
        {
            xtype: 'checkboxfield',
            name: 'accept',
            label: 'Accepts terms',
            reference: 'accept',
           // listener: 'onClickCbox'
            /*platformConfig: {
                '!desktop': {
                    bodyAlign: 'end'
                }
            }*/
            listeners: {
                change: function (checkbox, newValue, oldValue, eOpts) {
                    debugger;

                    var btn = Ext.getCmp('booktableID');
                    if(checkbox.isChecked() === true){
                        btn.setDisabled(false);
                    }else{
                        btn.setDisabled(true);
                    }
                       
                }
            }
        }
        ]
    }]

    
});