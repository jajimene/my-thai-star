Ext.define('Devon.view.main.Loader', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.loader-view',

	constructor: function(args){
		this.callParent([args]);
	},

    //layout:'vbox',

    dockedItems : [{
            dock :'bottom',
            height: '20',
            html: i18n.loader.loading
    }]
});
