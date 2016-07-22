'use strict';

var React = require('react');
var AppAction = require('../actions/appAction');
var EventStore = require('../stores/EventStore');
var EventFormNew = require('./events/EventFormNew');

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
				<a onClick={this.handleClick}>New Event</a>
				<EventFormNew />
			</div>
		),
	}
});

module.exports = MainApp;