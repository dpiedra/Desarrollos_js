/**
 * Created by davidpr on 01/02/14.
 */


var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: '/api/books'
});