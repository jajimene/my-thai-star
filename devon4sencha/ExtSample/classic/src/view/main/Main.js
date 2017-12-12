Ext.define('Sample.view.main.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main-view',

	constructor: function(args){
		this.callParent([args]);
	},

    requires: [
        'Sample.view.main.MainVM',
        'Sample.view.main.MainVC'
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

