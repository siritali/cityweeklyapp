'use strict';

var React = require('react');

var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1>EXPLORE THE WORLD</h1>
				<h4>Where the party at?</h4>
				<Tile />
			</div>
		);
	}
});

module.exports = Home;