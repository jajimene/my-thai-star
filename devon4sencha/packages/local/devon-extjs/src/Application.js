/*
  Define core Devon dependencies here, application should not deal (require) with this dependencies

  flow of application start:

  - onBeforeLaunch
      checks if there is a valid user session checkExistingSession

*/
Ext.define('Devon.Application', {
    extend: 'Ext.app.Application',

    statics: {
        viewport: null,
        currentUser: null,
        /* Displays the provided panel on the main content panel of the application
         */
        openInContentPanel: function(panel, options) {
			if (Ext.isModern){
				return this.openInNavigationView(panel, options);
			}
            try {
                var content = Ext.ComponentQuery.query('main-content')[0];
                content.add(panel);
                content.setActiveItem(panel);
                Ext.GlobalEvents.fireEvent('openedInContentPanel', panel, options);
            } catch (e) {
                Devon.Log.error("Couldn't open panel", e);
            }
        },

		openInNavigationView: function(panel, options){
			try{
				var content = Ext.ComponentQuery.query('navigationview')[0];
				content.push(panel);
				Ext.GlobalEvents.fireEvent('openedInContentPanel', panel, options);
				Ext.Viewport.hideMenu('left');
			} catch (e) {
				Devon.Log.error("Couldn't open panel", e);
			}
		}
    },


    requires: [
        'Devon.Config',
        'Devon.I18n',
        'Devon.I18nBundle',
        'Devon.i18n.Devon_en_EN',
        'Devon.view.main.i18n.Loader_en_EN',
        'Devon.view.main.i18n.Loader_es_ES',
        'Devon.Array',
        'Devon.Object',
        'Devon.Log',
        'Devon.Url',
        'Devon.Util',
        'Devon.Data',
        'Devon.data.proxy.Rest',
        'Devon.Ajax',
        'Devon.Security',
        'Devon.Class',


        // select the default Devon Security mechanism
        'Devon.Security',
        //'Sample.Security'

        'Devon.view.login.LoginVC'
    ],

    onLaunch: function(){
	    console.log("devonfw app.js onLaunch");
    },

    launch: function() {
        Devon.app = this; //required to identify the app from Devon code
	    console.log("devonfw app.js launch");
    },

    onBeforeLaunch: function() {
	    console.log("devonfw app.js onBeforeLaunch");
        this.callParent(arguments);
        Devon.Log.trace("App launch");
        if (Ext.isIE8) {
            Ext.Msg.alert('Not Supported', 'This example is not supported on Internet Explorer 8. Please use a different browser.');
            return;
        }

        this.checkExistingSession();

    },

    isModern: function(){
	return Ext.grid && Ext.grid.Grid;
    },

    showMainView: function(){
		if (Ext.isModern){
			//To match default Main.js xtype
			//Ext.Viewport.setActiveItem('app-main');
        		Ext.Viewport.setActiveItem('main-view');
		}else{
			Devon.app.getApplication().setMainView(Devon.app.getName()+'.view.main.Main');
		}
    },

    checkExistingSession: function() {
        Ext.ClassManager.getByAlias('app-security').checkExistingSession({
            scope: this,
            success: this.checkSessionOK,
            failure: this.checkSessionNotOK
        });
    },

    /**
     * Called when the login controller fires the "login" event.
     *
     * @param loginController
     * @param user
     */
    onLogin: function() {
        this.login.destroy();
        this.checkExistingSession();
    },

    checkSessionNotOK: function() {
	    console.log("checkSessionNotOK");
        Devon.Log.trace("AppController::onExistingSessionNotValid");
        if (this.login) {
            Devon.Log.debug("already showing login window");
            return;
        }
		if (Ext.isModern){
            //Sample.getApplication().getMainView().destroy();
			this.login = Ext.widget('main-login', {
			listeners: {
				scope: this,
				eventLoginSuccess: 'onLogin'
			}
			});
			Ext.getCmp('ext-viewport').setActiveItem(this.login);
		}else{
			this.login = Ext.widget('main-login', {
			session: this.session,
			autoShow: true,
			listeners: {
				scope: this,
				eventLoginSuccess: 'onLogin'
			}
			});
            var loader = Ext.ComponentQuery.query('loader-view')[0];
            if (loader && loader.destroy) {
                loader.destroy();
            }
		}
    },

    checkSessionOK: function(currentUser) {
	    console.log("checkSessionOK");
        this.currentUser = currentUser;
        var mainView = Devon.app.getApplication().getMainView()
        if (mainView) mainView.destroy();
		this.showMainView();
    }
});
