'use strict';

var React = require('react');
var AppAction = require('../../actions/AppAction');
var EventStore = require('../../stores/EventStore');

var Navbar = React.createClass({
	render: function(){
		return(
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
					        <li className="active"><Link to="/">Home</Link></li>
							<li><Link to="/">Events List</Link></li>
							<li><Link to="/">Create Event</Link></li>
					    </ul>
			    	</div> 
			    </div> 
			</div>
		)
	}
});

module.exports = Navbar;