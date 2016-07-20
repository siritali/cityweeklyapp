'use strict';

var React = require('react');
var AppAction = require('../actions/appAction');
var TaskStore = require('../stores/taskStore');

function getMainAppState(){
	return {
		tasks: TaskStore.getTasks().editing
	}
}


var MainApp = React.createClass({
	getInitialState: function(){
		return getMainAppState();
	},
	componentDidMount: function(){
		TaskStore.addChangeListner(this._onChange);
	},
	componentUnMount: function(){
		TaskStore.removeChangeListner(this._onChange);
	},
	render: function () {
		return (
			<div>
				<a onClick={this.handleClick}>New Task</a>
				<TaskForm />
			</div>
		),
		handleClick: function(){
			AppAction.newTask();
		}
	}
});

module.exports = MainApp;