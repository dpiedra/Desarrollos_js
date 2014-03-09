/**
 * Created by davidpr on 07/02/14.
 */

var app = app || {};

app.userView = Backbone.View.extend({
    template: _.template( $( '#userTemplate' ).html() ),
    el: $('#personal-data'),

    initialize: function( ) {
       this.render();
    },

    render: function() {
        this.model = new app.userModel();
        this.el = $('#personal-data');
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});

