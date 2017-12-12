Ext.define('MyThaiStar.view.store.CustomDishesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.CustomDishesStore',
    fields: ['price'],
    data: [
        { 'price': '25€'}
        //, desc: "sacar a pasear al perro"},
        //{ done: false, desc: "comerme un chivito"},
        //{ done: true, desc: "preparar curso de Sencha"}
    ]


});