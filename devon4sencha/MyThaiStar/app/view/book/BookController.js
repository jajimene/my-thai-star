Ext.define('MyThaiStar.view.book.BookController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.book',

    fieldsDisabled: false,

    onDisableTap: function(btn) {
        var fieldset1 = this.lookup('fieldset1'),
            fieldset2 = this.lookup('fieldset2'),
            disabled = this.fieldsDisabled;

        fieldset1.setDisabled(!disabled);
        fieldset2.setDisabled(!disabled);
        btn.setText(!disabled ? 'Enable fields' : 'Disabled fields');
        this.fieldsDisabled = !disabled;
    },
    onResetTap: function() {
        
        var name = this.lookup('name');
        var date = this.lookup('date');
        var email = this.lookup('email');
        var adults = this.lookup('adults');
        var kids = this.lookup('kids');
        var accept = this.lookup('accept');
        
        if(date!=undefined){
            date.setValue(new Date());
        }
        if(name!=undefined){
            name.reset();
        }
        if(email!=undefined){
            email.reset();
        }
        if(adults!=undefined){
            adults.reset();
        }
        if(kids!=undefined){
            kids.reset();
        }
        if(accept!=undefined){
            accept.reset();
        }
        
    }
});