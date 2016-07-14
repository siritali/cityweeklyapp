'use strict';

var React = require('react');


var SignUpPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Sign Up</h1>
				<form>
					<input type="text" placeholder="Name"/>
					<input type="text" placeholder="About"/>
				    <input type="text" placeholder="City"/>
				    <input type="submit" placeholder="Add Photo" className="upload_photo"/>
				    <input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
});

module.exports = SignUpPage;