/**
 * Created by davidpr on 01/02/14.
 */


var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/placeholder.jpg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    },

    parse: function( response ) {
        response.id = response._id;
        return response;
    }

});