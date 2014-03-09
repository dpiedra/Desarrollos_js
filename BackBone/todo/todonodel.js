// Define a Todo Model
var Todo = Backbone.Model.extend({
    defaults:{
        tittle: '',
        completed: false
    }

});

var myTodo = new Todo({
    tittle:'titulo del modelo Todo'
});

