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
};

version65 = {
  "version": "6.5.0.775",
  "pad": 0,
  "shortVersion": "650775",
  "releaseValue": 0,
  "parts": [
    6,
    5,
    0,
    775
  ],
  "major": 6,
  "minor": 5,
  "patch": 0,
  "build": 775
};