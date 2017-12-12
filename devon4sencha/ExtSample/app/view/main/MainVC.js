Ext.define('Sample.view.main.MainVC', {
    extend: 'Ext.app.ViewController',

    requires: [
    ],
    

    alias: 'controller.main-view',

	showMainMenu: function(){
		Ext.Viewport.toggleMenu('left');
	}

});
