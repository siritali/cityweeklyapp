'use strict';

var React = require('react');
var AppAction = require('../../actions/AppAction');
var EventStore = require('../../stores/EventStore');

var Event = React.createClass({
	render: function(){
		return(
			<div>
				EVENT
			</div>
		)
	}
});

module.exports = Event;