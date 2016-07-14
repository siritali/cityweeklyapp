'use strict';

var React = require('react');


var CalendarPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>CALENDAR</h1>
				<table>
				    <tr>
					    <th>MONDAY</th>
					    <th>TUESDAY</th>
					    <th>WEDNESDAY</th>
					    <th>THURSDAY</th>
					    <th>FRIDAY</th>
					    <th>SATURDAY</th>
					    <th>SUNDAY</th>
				    </tr>
				</table>
			</div>
		);
	}
});

module.exports = CalendarPage;