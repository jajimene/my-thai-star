Ext.define("Sample.view.cook.Cook", {
    extend: "Ext.panel.Panel",
    alias: 'widget.cook',

    requires: [
        'Ext.grid.Panel',
        'Sample.view.cook.CookVC'
    ],

    controller: "cook-controller",
    title: i18n.cook.title,
    viewModel: {
        type: "cook-model"
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    closable: true,

    listeners: {
        render: 'loadData'
    },

    items: [{
            xtype: 'label',
            padding: 10,
            text: i18n.cook.availableOrder,
            border: false
        }, {
            xtype: 'grid',
            reference: 'availablegrid',
            allowDeselect: true,
            flex: 1,

            columns: [{
                text: i18n.cook.grid.columns.id,
                dataIndex: 'id'
            }, {
                text: i18n.cook.grid.columns.order,
                dataIndex: 'orderId'
            }, {
                text: i18n.cook.grid.columns.offer,
                dataIndex: 'offerName',
                flex: 1
            }, {
                text: i18n.cook.grid.columns.meal,
                dataIndex: 'XXmealName',
                flex: 1
            }, {
                text: i18n.cook.grid.columns.dish,
                dataIndex: 'XXdishName',
                flex: 1
            }],
            bind: {
                store: '{available}',
                selection: '{availableSelectedItem}'
            },
            bbar: ['->', {
                text: i18n.cook.grid.assign,
                handler: 'positionAssignClick',
                iconCls: 'x-fa fa-arrow-down',
                bind: {
                    disabled: '{!availableSelectedItem}'
                }
            }, {
                text: i18n.cook.grid.reject,
                iconCls: 'x-fa fa-arrow-up',
                margin: '0 10 0 20',
                handler: 'positionRejectClick',
                bind: {
                    disabled: '{!assignedSelectedItem}'
                }
            }]
        },
        {
            xtype: 'label',
            padding: 10,
            text: i18n.cook.assignedeOrder,
            border: false
        }, {
            xtype: 'grid',
            reference: 'assignedgrid',
            allowDeselect: true,
            flex: 1,

            columns: [{
                text: i18n.cook.grid.columns.id,
                dataIndex: 'id'
            }, {
                text: i18n.cook.grid.columns.order,
                dataIndex: 'orderId'
            }, {
                text: i18n.cook.grid.columns.offer,
                dataIndex: 'offerName',
                flex: 1
            }, {
                text: i18n.cook.grid.columns.meal,
                dataIndex: 'XXmealName',
                flex: 1
            }, {
                text: i18n.cook.grid.columns.dish,
                dataIndex: 'XXdishName',
                flex: 1
            }],
            bind: {
                store: '{assigned}',
                selection: '{assignedSelectedItem}'
            },

            bbar: {
                items: [
                    '->', {
                        text: i18n.cook.grid.done,
                        handler: 'positionDoneClick',
                        bind: {
                            disabled: '{!assignedSelectedItem}'
                        }
                    }
                ]
            }
        }
    ]
});