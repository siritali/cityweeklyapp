var react = require('react');

var CalendarTile = react.createClass({

	render: function(){
		return(
			<div date={this.props.date} dow={this.props.dow}>
				{this.props.date}
			</div>
		);
	}
})