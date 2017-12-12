/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyThaiStar.Application', {
    // extend: 'Ext.app.Application',
    extend: 'Devon.Application',

    name: 'MyThaiStar',

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    launch: function() {
        Devon.Log.trace('MyThaiStar.app launch');
        console.log('MyThaiStar.app launch');

        if (document.location.toString().indexOf('useSimlets')>=0){
          MyThaiStar.Simlets.useSimlets();
        }
        //always call parent launch for framework initialization
        this.callParent(arguments);
    }
});
