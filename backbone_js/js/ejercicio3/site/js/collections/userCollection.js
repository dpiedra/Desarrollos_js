/**
 * Created by davidpr on 07/02/14.
 */

var app = app || {};

app.UserCollection = Backbone.Collection.extend({
    model: app.User
});