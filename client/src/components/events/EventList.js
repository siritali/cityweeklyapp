'use strict';

var React = require('react');
var AppAction = require('../../actions/AppAction');
var EventStore = require('../../stores/EventStore');
var Event = require('./Event.js');

var EventList = React.createClass({
	render: function(){
		return(
			<div>
				EVENTLIST
			</div>
		)
	}
});

module.exports = EventList;