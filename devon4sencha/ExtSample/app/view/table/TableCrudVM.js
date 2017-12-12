Ext.define('Sample.view.table.TableCrudVM', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.table-crud-model',

    data:{
        table: {
            id : null,
            number: null,
            state:null
        }
    },

    formulas : {

        isValid: function(get){
            var number=-1;
            try {
                number = parseInt(get('table.number'), 10);
            }catch(e){}
            return number>0;
        }
    },

    tableId: null,

    stores: {
        states: {
            fields: ['code'],
            data: [{
                'code': 'FREE'
            }, {
                'code': 'OCCUPIED'
            }, {
                'code': 'RESERVED'
            }]
        }
    }

});
