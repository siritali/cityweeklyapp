'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');


var TodoForm = React.createClass({
	render: function () {
		console.log(this.props.errors);
		return (
			<form onSubmit={this.props.saveTodo}>
				<TextInput
					name="title"
					placeholder="Event Name"
					value={this.props.todo.title}
					saveTodoState={this.props.saveTodoState}
					error={this.props.errors.title}
				/>
				<TextInput
					name="description"
					placeholder="Description"
					value={this.props.todo.description}
					saveTodoState={this.props.saveTodoState}
					error={this.props.errors.description}
				/>
				<TextInput
					name="city"
					placeholder="City"
					value={this.props.todo.city}
					saveTodoState={this.props.saveTodoState}
					error={this.props.errors.city}
				/>
				<h6>Upload photo...</h6>
				<input type="file" value="Upload Photo" className="text-center center-block well well-sm btn btn-primary btn-sm" />
				<input type="submit" value="Save Event" className="btn btn-success btn-lg" />
				<input type="submit" value="Edit Event" className="btn btn-warning btn-lg" />
				<input type="submit" value="Delete Event" className="btn btn-danger btn-lg" />
			</form>
		);
	}
});

module.exports = TodoForm;