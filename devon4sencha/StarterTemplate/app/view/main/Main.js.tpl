Ext.define('{appName}.view.main.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main-view',

	constructor: function(args){
		this.callParent([args]);
	},

    requires: [
        '{appName}.view.main.MainVM',
        '{appName}.view.main.MainVC'
    ],
	viewModel : 'main-view',
	controller : 'main-view',
	bodyStyle: 'background: white; ',
    layout: 'fit',

	dockedItems: [{ 
		xtype: 'main-header',
		dock: 'top'
	},{ 
		xtype: 'main-menu',
		dock: 'top'
	},{
		xtype: 'main-leftsidepanel',
		dock: 'left'
	}],
	items: [{ 
		xtype: 'main-content'
	}]

});

