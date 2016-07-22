'use strict';

var React = require('react');
var AppAction = require('../../actions/AppAction');
var EventStore = require('../../stores/EventStore');
var EventFormEdit = require('./EventFormEdit');
var EventFormNew = require('./EventFormNew');
var EventList = require('./EventList');
var Navbar = require('../common/Navbar');

function getMainAppState(){
	return {

	}
}


var MainApp = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function(){

	},
	componentUnmount: function(){

	},
	render: function () {
		return (
			<div className="wrapper">
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-12-md">
						<EventFormNew />
						<EventList />
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = MainApp;