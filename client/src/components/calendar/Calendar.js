'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoActionCreator = require('../../actions/todoActionCreator');
var TodoStore = require('../../stores/todoStore');

var CalendarPage = React.createClass({

	deleteTodo: function (todo, event) {
		event.preventDefault();
		TodoActionCreator.deleteTodo(todo);
	},

	updateTodo: function (todo, event) {
		event.preventDefault();
		todo.completed ? todo.completed = false : todo.completed = true;
		TodoActionCreator.updateTodo(todo);
	},

	render: function () {
		var output;

		var allTodos = TodoStore.getAllTodos();
		console.log(allTodos);

		var createTodoRow = function (todo) {
			var tdClass = '';
			var isDone = 'Mark as Done';
			var todoTitle = todo.title;
			var todoDescription = todo.description;
			var todoCity = todo.city;

			if (todo.completed) {
				tdClass = 'todo-done';
				isDone = 'Mark as Not Done';
				todoTitle = (<s>{todo.title}</s>);
				todoDescription = (<s>{todo.description}</s>);
				todoCity = (<s>{todo.city}</s>);
			}

			return (
				<tr key={todo._id}>
					<td className={tdClass}><Link to={'/manage-todo/' + todo._id}>{todoTitle}</Link></td>
					<td className={tdClass}>{todoDescription}</td>
					<td className={tdClass}>{todoCity}</td>
					<td><a href="#" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
					<td><a href="#" onClick={this.updateTodo.bind(this, todo)}>{isDone}</a></td>
				</tr>
			);
		};

		if (allTodos.length > 0) {
			output = allTodos.map(createTodoRow, this)
		} else {
			output = (<tr><td>There are no Event</td></tr>);
		}
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>City</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{output}
				</tbody>
			</table>
		);
	}
});

module.exports = CalendarPage;
