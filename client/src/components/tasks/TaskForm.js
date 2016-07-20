'use strict';

var React = require('react');
var AppAction = require('../actions/appAction');
var TaskStore = require('../stores/taskStore');


var TaskForm = React.createClass({
	componentDidMount: function(){
		TaskStore.addChangeListner(this._onChange);
	},
	componentUnMount: function(){
		TaskStore.removeChangeListner(this._onChange);
	},
	render: function () {
		if(this.props.editing){
			var x = 123;
		} else {
			var x = 456;
		}
		return (
			<div>
				<a onClick={this.handleClick}>New Task</a>
				{x}
			</div>
		),
		handleClick: function(){
			AppAction.newTask();
		}
	}
});

module.exports = TaskForm;