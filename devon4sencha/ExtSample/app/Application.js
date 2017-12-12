/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 *
 *
 */
Ext.define('Sample.Application', {
    extend: 'Devon.Application',

    name: 'Sample',

    requires:[
      'Sample.Simlets'
      ],

    controllers: [
        'Sample.controller.main.MainController',
        'Sample.controller.table.TablesController',
        'Sample.controller.cook.CookController'
    ],

    defaultToken : 'home',

    launch: function() {
        Devon.Log.trace('Sample.app launch');
        console.log('Sample.app launch');

        if (document.location.toString().indexOf('useSimlets')>=0){
          Sample.Simlets.useSimlets();
        }
        //always call parent launch for framework initialization
        this.callParent(arguments);
    }
});
