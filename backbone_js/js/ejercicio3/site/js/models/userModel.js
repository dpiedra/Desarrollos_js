var app = app || {};

app.userModel = Backbone.Model.extend({
    defaults: {
        userName: 'davidpr',
        passWord: 'dpiedra',
        name:'David',
        surname:'Piedra Ruiz'
    },

    initialize: function(attrs, opts){
        //console.log ('modelo de usuario inicializado');
    }
});