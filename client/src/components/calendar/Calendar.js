'use strict';

var React = require('react');
var $ = require('jquery');


var CalendarPage = React.createClass({

	// getCalendar: function(year, month) {
	// 	var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
	// 	var date = new Date(year, month-1, 1);
	// 	var result = [];
	// 	    while (date.getMonth() == month-1) {
	// 	    result.push([date.getDate(), names[date.getDay()]]);
	// 	    date.setDate(date.getDate()+1);
	// 	    }
	// 		return result;
	// },

	// buildCalendar: function(year, month) {
	// 	var calarr = this.getCalendar(year, month);
	// 	var calMain = $('<div ref="calMain"></div>');
	// 	for(var i = 0; 1 < calarr.length; i++){
	// 		calMain.append("<div className='calTile'>" + calarr[i][0] + "</div>")
	// 	}
	// 	return calMain;
	// },

	render: function() {
		return (
			<div>
				<h1>CALENDAR</h1>
			</div>
		);
	}
});

module.exports = CalendarPage;