// js/collections/todos.js

var app = app || {};

//Todo 컬렉션
//------

//todo 의 컬렉션은 서버에 저장되지 않고
// *localStorage*에 저장된다.
var TodoList = Backbone.Collection.extend({
	model: app.Todo,
	localStorage: new Backbone.LocalStorage('todos-backbone'),

	completed :function() {
		return this.filter(function(todo) {
			return todo.get('completed');
		})
	},

	remaining : function() {
		return this.without.apply(this, this.completed());
	},

	nextOrder : function() {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	comparator : function(todo) {
		return todo.get('order');
	}
});

app.Todos = new TodoList();