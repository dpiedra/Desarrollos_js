var ModeloTodo = Backbone.Model.extend({

	defaults : {
		//title : '',
		completed : false
	},
	initialize: function () {
		console.log ('El modlelo se ha iniciado correctamente');
		this.on ('change:title',function(){
			console.log( 'El tutulo ha sido cambiado por ' + this.get('title') );
		});
	},
    validate:function(attrs){
        if(attrs.title===undefined){
            return ('Recuerda que tienes que actualizar el título del modelo antes de grabarlo');
        }
    },
    	setTitle: function (newTitle) {
		this.set ({ title:newTitle });
	}

});

var modeloTodo = new ModeloTodo ();

//actualizo el modelo formzando que salte la excepción por el validador
modeloTodo.set ('completed',true,{validate:true});

var todo1Attributes = modeloTodo.toJSON();

console.log( todo1Attributes );

modeloTodo.set('title','esto es otra prueba');

console.log( JSON.stringify(modeloTodo) );

modeloTodo.setTitle('Cambio Directo');


