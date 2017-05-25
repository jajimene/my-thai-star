Ext.define('Sample.view.main.MainVM', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-view',

    data: {
        name: 'Sample',
		user : {
			name : 'guest'
		}
    },

    stores: {
    }

});
