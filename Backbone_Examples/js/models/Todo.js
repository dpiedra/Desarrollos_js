/**
 * @author David Piedra
 */



var Todo = Backbone.Model.extend ({
	initialize: function(){
		this.on ('change',function(){
			console.log ('ha cambiado un valor');	
		});
		this.on ('change:title',function(){
			console.log ('ha cambiado el valor del título');	
		});
	},
	
	defaults: {
		title: 'valor del título por defecto',
		completed: false
	},
	
	setTitle: function (nuevoValor){
		this.set({title: nuevoValor});
	}
	
});


var todo1 = new Todo();

console.log (JSON.stringify (todo1) );


var todo2 = new Todo ({
	title :'Este es el título del modelo 2',
	completed: true
});

console.log (JSON.stringify(todo2));
console.log(todo2.toJSON());

todo2.set ('completed',false);
todo2.set ('title','este es el nuevo título');

todo2.setTitle ('Nuevo título de la colección');
console.log(todo2.toJSON());






var Todo3 = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attributes){
    if(attributes.title === undefined){
        return "Remember to set a title for your todo.";
    }
  },

  initialize: function(){
    console.log('This model has been initialized.');
    this.on("invalid", function(model, error){
        console.log(error);
    });
  }
});

var myTodo = new Todo3();
myTodo.set('completed', true, {validate: true}); // logs: Remember to set a title for your todo.
console.log('completed: ' + myTodo.get('completed')); // completed: false

var emptyTodo = new Todo3(null, {validate: true});
console.log(emptyTodo.validationError);


// We can also provide raw markup to setElement
// as follows (just to demonstrate it can be done):
var view = new Backbone.View;
view.setElement('<p><a><b>test</b></a></p>');
view.$('a b').html(); // outputs "test"

