Ext.define('Devon.I18nBundle', {
	requires : [
		'Devon.I18n'
	],
    constructor: function() {
        this.callParent(arguments);
        Devon.I18n.addBundle(this);
    }
});
