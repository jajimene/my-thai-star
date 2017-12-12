Ext.define('Devon.view.login.LoginVM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-login',

    // Just some data to seed the process. This might be pulled from a cookie or other
    // in a real app.
    data: {
        defaultOrg: 1,
        username: 'waiter',
		password: '',
		validationStarted: false
    },

	formulas: {
		isUserValid : function(get){
			return !get('validationStarted') || (''+get('username')).length;
		},
		isPasswordValid : function(get){
			return !get('validationStarted') || (''+get('password')).length;
		},

		isLoginEnabled: function(get){
			return (''+get('username')).length>0 && (''+get('password')).length>0;
		}
	},

    stores: {}
});
