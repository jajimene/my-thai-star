Ext.define('MyThaiStar.view.menu.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu',

    fieldsDisabled: false,
    onResetTap: function() {
        
        var maindishes = this.lookup('maindishes');
        var starter = this.lookup('starter');
        var dessert = this.lookup('dessert');
        var noodle = this.lookup('noodle');
        var rice = this.lookup('rice');
        var curry = this.lookup('curry');
        var vegan = this.lookup('vegan');
        var vegetarian = this.lookup('vegetarian');
        var favourites = this.lookup('favourites');
        var sliderPrice = this.lookup('sliderPrice');
        var sliderLikes = this.lookup('sliderLikes');
        
        if(maindishes!=undefined){
            maindishes.reset();
        }
        if(starter!=undefined){
            starter.reset();
        }
        if(dessert!=undefined){
            dessert.reset();
        }
        if(noodle!=undefined){
            noodle.reset();
        }
        if(rice!=undefined){
            rice.reset();
        }
        if(curry!=undefined){
            curry.reset();
        }
        if(vegan!=undefined){
            vegan.reset();
        }
        if(vegetarian!=undefined){
            vegetarian.reset();
        }
        if(favourites!=undefined){
            favourites.reset();
        }
        if(sliderPrice!=undefined){
            sliderPrice.reset();
            sliderPrice.setLabel('Price');
        }
        if(sliderLikes!=undefined){
            sliderLikes.reset();
            sliderLikes.setLabel('Likes');
        }
        
    }
});