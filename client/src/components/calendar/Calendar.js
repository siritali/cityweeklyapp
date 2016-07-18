'use strict';

var React = require('react');
var TodoList = require('../todos/TodoList');
var Link = require('react-router').Link;
var TodoStore = require('../../stores/todoStore');


var CalendarPage = React.createClass({

	getInitialState: function () {
		return {
			todos: TodoStore.getAllTodos()
		}
	},

	componentWillMount: function () {
		TodoStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function () {
		TodoStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		this.setState({
			todos: TodoStore.getAllTodos()
		});
	},

	render: function () {
		return (
			<div>
				<h2>Calendar</h2>
				<TodoList 
					todos={this.state.todos} 
				/>
			</div>
		);
	}
});

module.exports = CalendarPage;

