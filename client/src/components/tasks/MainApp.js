'use strict';

var React = require('react');
var AppAction = require('../actions/appAction');
var TaskStore = require('../stores/taskStore');
var TaskForm = require('./TaskForm');

function getMainAppState(){
	return {
		tasks: TaskStore.getTasks().editing
	}
}


var MainApp = React.createClass({
	getInitialState: function(){
		return getMainAppState();
	},
	render: function () {
		return (
			<div>
				<a onClick={this.handleClick}>New Task</a>
				<TaskForm editing={this.state.editing} />
			</div>
		),
		handleClick: function(){
			AppAction.newTask();
		}
	}
});

module.exports = MainApp;