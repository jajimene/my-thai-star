Ext.define("Sample.view.table.TableList", {
    extend: "Ext.panel.Panel",
    alias: 'widget.tables',
	header: false,

    requires: [
        'Ext.grid.Grid',
        'Devon.grid.plugin.Pagination',
        'Sample.view.table.TableListVM',
        'Sample.view.table.TableListVC'
    ],

 applyHeader: function (newHeader, oldHeader) {
        var me = this,
            header = oldHeader;

        me.allowHeader = newHeader !== false;

        if (!me.allowHeader) {
            if (header) {
                me.remove(header);
                header = null;
            }
        } else if (newHeader) {
            if (header) {
                if (newHeader !== true) {
                    header.setConfig(newHeader);
                }
            } else {
                // add() will ensure we sort the header to the front by its "weight"

                header = me.add(me.createHeader(newHeader));
            }
        }

        return header || null;
    },
    
    privates: {
        ensureHeader: function () {
            var me = this,
                header;

            me.getViewModel();
            me.getItems();

            header = me.getHeader();

            if (!header && me.allowHeader) {
                me.setHeader(true);
                header = me.getHeader();
            }

            return header;
        }
    },
    //closable: true,
    controller: "table-tables",

    title: i18n.tables.title,

    viewModel: {
        type: "table-tables"
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'label',
        padding: 10,
        html: i18n.tables.html
    }, {
        xtype: 'grid',
        reference: 'tablesgrid',
        flex: 1,
        padding: '0 10 10 10',
        allowDeselect: true,
        columns: [{
            text: 'NUMBER',
            dataIndex: 'number'
        }, {
            text: i18n.tables.grid.state,
            dataIndex: 'state',
            flex: 1
        }],

        bind: {
            store: '{tables}',
            selection: '{selectedItem}'
        },
       plugins: ['pagination'],

        listeners: {
            beforeitemdblclick: 'onEditDblclick'
        }
    },{
		xtype: 'toolbar',
		docked: 'bottom',
		defaults : {
			xtype: 'button'
		},
		items: [{
			text: i18n.tables.buttons.add,
			handler: 'onAddClick'
		}, {
			text: i18n.tables.buttons.edit,
			bind: {
				disabled: '{!selectedItem}'
			},
			handler: 'onEditClick'
		}, {
			text: i18n.tables.buttons.del,
			bind: {
				disabled: '{!selectedItem}'
			},
			handler: 'onDeleteClick'
		}, '-', {
			text: i18n.tables.buttons.editOrder,
			bind: {
				disabled: '{!selectedItem}'
			},
			handler: 'onEditOrderClick'
		}, {
			text: i18n.tables.buttons.reserve,
			handler: 'onMarkAsReserved',
			bind: {
				disabled: '{!canReserve}'
			}
		}, {
			text: i18n.tables.buttons.cancel,
			handler: 'onCancelReserve',
			bind: {
				disabled: '{!canCancel}'
			}

		}, {
			text: i18n.tables.buttons.occupy,
			handler: 'onMarkAsOccupied',
			bind: {
				disabled: '{!canOcuppy}'
			}

		}, {
			text: i18n.tables.buttons.free,
			handler: 'onMarkAsFree',
			bind: {
				disabled: '{!canFree}'
			}

		}]
	}]
});
