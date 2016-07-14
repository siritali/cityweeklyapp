'use strict';

var React = require('react');
var Link = require('react-router').Link;


var Header = React.createClass({
	render: function () {
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">City Weekly App</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about-page">How It Works</Link></li>
						<li><Link to="/todos-page">Events</Link></li>
						<li><Link to="/manage-todo">Create Event</Link></li>
						<li><Link to="/calendar-page">Calendar</Link></li>
						<li><Link to="/signUp-page">Sign Up</Link></li>
						<li><Link to="/logIn-page">Log In</Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Header;
