'use strict';

var React = require('react');
var Link = require('react-router').Link;


var Header = React.createClass({
	render: function () {
		return (
			<div className="navbar scrolling-navbar navbar-inverse navbar-fixed-top" role="navigation">
			    <div className="container-fluid">
			    	<div className="navbar-header">
			      		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        	<span className="sr-only"></span>
				        	<span className="icon-bar"></span>
				        	<span className="icon-bar"></span>
				        	<span className="icon-bar"></span>
			      		</button>
			      		<Link to="/" className="navbar-brand">City Weekly App</Link>
			    	</div>
			    	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      		<ul className="nav navbar-nav navbar-right">
					        <li><Link to="/">Home</Link></li>
							<li className="active"><Link to="/todos-page">Events</Link></li>
							<li><Link to="/manage-todo">Create Event</Link></li>
							<li><Link to="/calendar-page">Calendar</Link></li>
							<li><Link to="/about-page">How It Works</Link></li>
							<li><Link to="/signUp-page">Sign Up</Link></li>
							<li><Link to="/logIn-page">Log In</Link></li>
							<li><Link to="/profile-page">Profile</Link></li>
					    </ul>
			    	</div> 
			    </div> 
			</div>
		);
	}
});

module.exports = Header;
