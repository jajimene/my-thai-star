Ext.define('MyThaiStar.controller.CustomDishesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customdishescontroller',

    

    addToOrder: function () {
        //alert('controller');
        var actionSheet = Ext.create('Ext.ActionSheet', {
        items: [
           { xtype: 'container',
                layout: {
                    type:'vbox'
                //    flex:1
                },
                items: [{
                    xtype:'label',
                    userCls: 'resume',
                    html:'RESUME BOOKING',
                    width: '100%'
                },
                {
                    xtype:'label',
                    userCls: 'order',
                    html:'ORDER MENU'
                },
                {xtype: 'container',
                //flex:1,
                reference: 'subMenu',
                name: 'subMenu',
                id: 'subMenu',
                layout: {
                    type:'hbox'
                //    flex:1
                },
                items: [
                            {
                    xtype:'button',
                    ui:'round',
                    userCls: 'closeBtn',
                    text:'X',
                    listeners: {
                        tap: function ( me, e, eOpts ) {
                           var btn = Ext.getCmp('subMenu');
                           btn.hide();
                        }  
                    }
                },{xtype: 'container',
                //flex:1,
                reference: 'subMenu2',
                name: 'subMenu2',
                id: 'subMenu2',
                    layout: {
                        type:'vbox'
                    //    flex:1
                    },
                        items: [
                            {
                            xtype:'label',
                            userCls: 'resume',
                            html:'Red Curry'
                            //width: '100%'
                        },
                        {xtype:'button',
                            text:'Add comment',
                        userCls: 'resume',
                        id: 'btnAddComment',
                        handler: function(){
                            /*Ext.Msg.confirm('ADD A COMMENT', 'Here you can add a short comment to our cookers about how to prepare your dish',
                            function (answer) {
                                console.log('Confirmation: ', answer);
                            });*/
                            Ext.Msg.prompt('ADD A COMMENT', 'Here you can add a short comment to our cookers about how to prepare your dish', function (btn, value) {
                                //debugger;
                                if(btn==='ok'){
                                    //console.log(btn + ' ' + 'ok');
                                    var btn = Ext.getCmp('btnAddComment');
                                    btn.setUserCls('btnPress');
                                }
                                //console.log(btn + ' ' + value);
                            });
                        }
                    
                
            }]},
                {xtype:'button',
                    ui:'round',
                    userCls: 'closeBtn',
                    text:'-',
                    listeners: {
                        tap: function ( me, e, eOpts ) {
                           var num = Ext.getCmp('numberBook');
                           if(num.getValue()>0){
                            num.setValue(num.getValue()-1);
                           }
                        }  
                    }
                },
                 {
                    xtype: 'numberfield',
                    //label: 'Age',
                    value: 1,
                    //width: '20px',
                    name: 'numberBook',
                    id: 'numberBook',
                    
                },
                {xtype:'button',
                    ui:'round',
                    userCls: 'closeBtn',
                    text:'+',
                    listeners: {
                        tap: function ( me, e, eOpts ) {
                           var num = Ext.getCmp('numberBook');
                           num.setValue(num.getValue()+1);
                        }  
                    }
                }]
                }]
            },
            {
                text: 'Save draft'
            },
            {
                text: 'Cancel',
                ui  : 'confirm'
            }
        ],
        side: 'right',
        flex:'100%'
        //width: '20%'
    });

    Ext.Viewport.add(actionSheet);
    actionSheet.show();

    }
});