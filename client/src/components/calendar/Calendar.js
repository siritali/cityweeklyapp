'use strict';

var React = require('react');
var CalendarTile = require('./CalendarTile');


var CalendarPage = React.createClass({

	getInitialState: function(){
		return {tiles: []};
	},

	getCalendar: function(year, month){
		var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
		var date = new Date(year, month-1, 1);
		var result = [];
		while(date.getMonth() == month-1){
			result.push([date.getDate(), names[date.getDay()]]);
			date.setDate(date.getDate()+1);
		}
		return result;
	},

	buildCalendar: function(year, month){
		var calarr = this.getCalendar(year, month);
		return (
			<div>
				{calarr.map(function(i){
					return <CalendarTile date={i[0]} dow={i[1]} key={i} />
				})}
			</div>
		);

		// console.log(calarr);
		// var current = this.state.tiles
		// for(var i = 0; i < calarr.length; i++){
		// 	current.push("<CalendarTile date={calarr[i][0]} dow={calarr[i][1]} />");
		// }
		// console.log(current);
		// this.setState({tiles: current});
	},

	render: function() {

		return (
			<div>
				<h1>CALENDAR</h1>
				{this.buildCalendar(2016, 7)}
			</div>
		);
	}
});

module.exports = CalendarPage;