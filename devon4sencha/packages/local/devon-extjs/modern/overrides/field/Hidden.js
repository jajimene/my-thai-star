/*
This override is needed for hidden fields in Modern prior to versions 6.2.1 of sencha
So now is only required for the GPL version distributed with the devon 2.1 release
*/
Ext.define('MyApp.overrides.field.Hidden',{

    override: 'Ext.field.Hidden',
    config: {
        triggers: null
    }
});