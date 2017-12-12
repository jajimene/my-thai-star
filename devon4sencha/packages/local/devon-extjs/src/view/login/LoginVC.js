Ext.define('Devon.view.login.LoginVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-login',

    requires: ['Devon.view.login.i18n.Login_en_EN',
        'Devon.view.login.i18n.Login_es_ES',
        'Devon.view.login.LoginVM',
        'Devon.view.login.Login'
    ],

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },

    onLoginClick: function() {
        this.doLogin();
    },

    doLogin: function() {

		var vm = this.getViewModel();

		vm.set('validationStarted', true);

        if (vm.get('isUserValid') && vm.get('isPasswordValid')) {
            this.mask(i18n.login.loginText);
            this.getViewModel().set("lastError", "");


            Devon.Security.loginOperation({
                user: vm.get('username'),
                password: vm.get('password'),
                scope: this,
                success: this.onLoginSuccess,
                failure: this.onLoginFailure
            });

        }
    },

    onLoginFailure: function(response, options) {
        this.mask();
        var errStatus = response.status;
        this.getViewModel().set("lastError", i18n.login.errors[errStatus]);
    },

    onLoginSuccess: function(user) {
        this.mask();
        this.fireViewEvent('eventLoginSuccess', this.getView(), user);

    },

    mask: function(text) {
		if (Ext.isModern){
			this.maskModern(text);
		}else{
			this.maskClassic(text);
		}
	},

    maskClassic: function(text) {
        if (text === undefined) {
            this.getView().unmask();
        } else {
            this.getView().mask(text);
        }
    },

    maskModern: function(text) {
        if (text === undefined) {
            this.getView().setMasked(false);
        } else {
			this.getView().setMasked({
				xtype: 'loadmask',
				message: text
			});
        }
    }
});
