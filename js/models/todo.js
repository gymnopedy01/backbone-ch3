// js /models/todo.js

var app= app || {};

//Todo 모델
//------
//우리의 기본 Todo 모델은 'title', 'order', 'completed' 속성을 가진다.

app.Todo = Backbone.Model.extend({
	// defaults 에 기본 속성을 정의함 으로써 todo 항목이 생성될때 'title' 과 completed' 키를 가지고 있음을 보장할 수있다.
	// 이 todo 항목의 'completed' 상태를 토글시킨다.
	defaults: {
		title: '',
		completed: false
	},

	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
})