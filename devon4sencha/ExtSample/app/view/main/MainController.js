/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtSample.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    routes: {
        'list' : {
            action     : 'onList'
            // before     : 'beforeShowTab'
        }
    },

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onList: function(id) {
        debugger;
        var tabPanel = this.getTabPanel(),
            child, childTabPanel;

        if (!id) {
            //no id was specified, use 0 index to resolve child
            id = 0;
        }

        child = tabPanel.getComponent(id);

        childTabPanel = child.child('tabpanel');

        tabPanel.setActiveTab(child);

        if (childTabPanel) {
            if (!subid) {
                subid = 0;
            }

            childTabPanel.setActiveTab(subid);
        }
    }
});
