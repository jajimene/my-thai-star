Ext.define('Devon.view.login.Login', {
    extend: 'Ext.Panel',

    title:'login panel',
    requires: [
        'Ext.form.Panel',
        'Ext.Button',
        'Ext.field.Text'
    ],

    xtype: 'main-login',

    viewModel: 'main-login',

    controller: 'main-login',
    bodyPadding: 10,
    //title: i18n.login.title,
    closable: false,

    cls: 'login',

    items: [{
	html:'hello'
    },{
        xtype: 'formpanel',
        border: false,
        reference: 'form',
        items: [{
            xtype: 'label',
            hideEmptyLabel: false,
            html: i18n.login.enterData
        }, {
            xtype: 'textfield',
            value: 'waiter',
            name: 'username',
            bind: '{username}',
            fieldLabel: i18n.login.username,
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
			xtype: 'label',
			html: i18n.login.enterUsername,
			style: 'color:red',
			bind : {
				hidden: '{isUserValid}'
			}
		}, {
            xtype: 'textfield',
            value: 'waiter',
            name: 'password',
            bind: '{password}',
            inputType: 'password',
            fieldLabel: i18n.login.password,
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
			xtype: 'label',
			html: i18n.login.enterPassword,
			style: 'color:red',
			bind : {
				hidden: '{isPasswordValid}'
			}
		}, {
            xtype: 'label',
            style: 'color:red',
            ui: 'validation-error',
            hidden: true,
            hideEmptyLabel: false,
            bind: {
                html: 'error:{lastError}',
                hidden: '{!lastError}'
            }
        }]
    },
	{
	xtype: 'toolbar',
	docked: 'bottom',
	items :[{
	    text: i18n.login.loginButton,
	    listeners: {
			tap: 'onLoginClick'
	    },
		bind: {
			disabled: '{!isLoginEnabled}'
		}
	}]
    }]

});
