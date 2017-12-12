Ext.define('Devon.view.main.Loader', {
    extend: 'Ext.Panel',
    alias: 'widget.loader-view',

	constructor: function(args){
		this.callParent([args]);
	},

    html: '** Loading app. Checking server session...'
});
