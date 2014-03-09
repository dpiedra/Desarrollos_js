define([
    "lib/backbone"
],

function(Backbone) {
  var Item = Backbone.Model.extend({
    defaults: {
      price: 35,
      photo: "./css/img/placeholder.jpg"
    }
  });
  return Item;
}

);


