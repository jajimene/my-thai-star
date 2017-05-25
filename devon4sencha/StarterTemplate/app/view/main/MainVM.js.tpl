Ext.define('{appName}.view.main.MainVM', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-view',

    data: {
        name: '{appName}',
		user : {
			name : 'guest'
		}
    },

    stores: {
    }

});
