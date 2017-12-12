/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyThaiStar.Application',

    name: 'MyThaiStar',

    requires: [
        // This will automatically load all classes in the MyThaiStar namespace
        // so that application classes do not need to require each other.
        'MyThaiStar.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyThaiStar.view.main.Main'
});
