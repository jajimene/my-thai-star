Ext.define("Sample.view.table.TableCrud", {
    extend: "Ext.Panel",
    alias: 'widget.tablecrud',
    requires: [
        'Ext.Panel',
        'Ext.form.Panel',
        'Ext.field.Hidden',
        'Sample.model.position.Position',
        'Sample.view.table.TableCrudVM',
        'Sample.view.table.TableCrudVC'
    ],

    listeners: {
        show: 'onShow'
    },

    controller: "table-crud-controller",

    viewModel: {
        type: "table-crud-model"
    },

    items: [{
        xtype: 'fieldset',
        title: i18n.tableCrud.title,
        margin: 10,
        items: [{
            xtype: 'formpanel',
            reference: 'panel',
            defaults: {
                margin: 5
            },
            bind: {
                values: '{table}'
            },
            items: [{
                xtype: 'hiddenfield',
                reference: 'id',
                name: 'id',
                bind: {
                    value: '{table.id}'
                }
            }, {
                xtype: 'textfield',
                reference: 'number',
                name: 'number',
                fieldLabel: i18n.tableCrud.number,
                bind: {
                    value: '{table.number}'
                },
                tabIndex: 1,
                minValue: 1
            }, {
                xtype: 'selectfield',
                name: 'state',
                reference: 'state',
                fieldLabel: i18n.tableCrud.state,
                tabIndex: 2,
                queryMode: 'local',
                displayField: 'code',
                valueField: 'code',
                bind: {
                    store: '{states}',
                    value: '{table.state}'
                }
            }]

        }]
    }, {
        docked: 'bottom',
        layout: 'hbox',
        defaults: {
            xtype: 'button',
            align: 'middle',
            style: 'margin: 1em',
            flex: 1
        },
        items: [{
            text: i18n.tableCrud.submit,
            handler: 'onTableCrudSubmit',
            bind: {
                disabled: '{!isValid}'
            }
        }, {
            text: i18n.tableCrud.cancel,
            handler: 'onTableCrudDone'
        }]
    }]
});