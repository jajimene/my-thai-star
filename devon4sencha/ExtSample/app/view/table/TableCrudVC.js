Ext.define('Sample.view.table.TableCrudVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.table-crud-controller',

    onShow: function() {
        console.log("onShow tablecrud");
        var vm = this.getViewModel();
        var id = vm.get("tableId");

        if (id) {
            Devon.rest.tablemanagement.table.get({
                scope: this,
                uriParams: {
                    id: id
                },
                success: function(table) {
                    vm.set('table', table);
                }
            });
        }
    },

    onTableCrudDone: function() {
        //Fire close event
        var parent =  this.getView().up();
        
        //If window we fire event
        if(parent.xtype=='window'){
            parent.fireEvent('eventDone', parent);
        }
        //If tabpanel, we close the tab
        else{
            this.getView().close();
        }
    },
    
    tableCrudSubmit: function() {
        //Fire event table changed
        Ext.GlobalEvents.fireEvent('eventTablesChanged');
        
        //Fire close window event
        this.onTableCrudDone();
    },

    onTableCrudSubmit: function() {
        var form = this.getView().down('form');

        var data = this.getViewModel().get('table');

        /* Commented out. Fixed on 6.5 */
        // if (Ext.isModern) {
        //     //patch for bug EXTJS-19392 where binding to a selectfield doesn't get the value but the model object
        //     data.state = this.getViewModel().get('table').state.get('code');
        // }

        if (this.getViewModel().get('isValid')) {
            Devon.rest.tablemanagement.table.post({
                scope: this,
                jsonData: data,
                referenceView: 'panel',
                success: this.tableCrudSubmit
            });
        }
    }

});
