/**
 * This view is an example list of people.
 */
Ext.define('MyThaiStar.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyThaiStar.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    plugins: [{
        type: 'pagingtoolbar'
    }],

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
