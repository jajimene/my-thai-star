Ext.define('Devon.view.main.Viewport', {
    extend: 'Ext.Panel',
    requires: [],

    xtype: 'main-viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        this.items = Devon.Array.defineIf([{
            defineIf: Devon.Class.isDefined('widget.main-header'),
            docked: 'top',
            xtype: 'main-header'
        }, {
            defineIf: Devon.Class.isDefined('widget.main-menu'),
            docked: 'top',
            xtype: 'main-menu'
        }, {
            layout: 'fit',
            xtype: 'main-content'
        }, {
            defineIf: Devon.Class.isDefined('widget.main-leftsidepanel'),
            docked: 'left',
            xtype: 'main-leftsidepanel'
        }]);
        this.callParent();
    }

});
