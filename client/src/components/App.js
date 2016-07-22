'use strict';

var React = require('react');
var Header = require('./common/Navbar');


var App = React.createClass({
	render: function () {
		return (
			<div>
				<Navbar />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = App;