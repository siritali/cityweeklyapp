'use strict';

var React = require('react');
var Tile = require('./Tile');
var Tiles = require('./Tiles');


var CalendarPage = React.createClass({

	render: function () {
		return (
			<div>
				<h2>Calendar</h2>
				<Tile />
				<Tiles />
			</div>
		);
	}
});

module.exports = CalendarPage;

