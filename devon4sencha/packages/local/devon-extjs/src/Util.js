Ext.define('Devon.Util', {
    singleton: true,

    constructor: function() {
        this.uuidGenerator = Ext.data.identifier.Uuid.createRandom();
    },

    getUUID: function() {
        return this.uuidGenerator();
    }
});

/* some global utilities */
q = function(str){
    var result= Ext.ComponentQuery.query(str);
    if (result.length==1){
        return result[0];
    }
    return result;
}
