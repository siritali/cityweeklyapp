'use strict';

var React = require('react');
var TodoList = require('../todos/TodoList');
var Link = require('react-router').Link;
var TodoStore = require('../../stores/todoStore');


var Tile = React.createClass({

	getInitialState: function () {
		return {
			todos: TodoStore.getAllTodos()
		}
	},

	componentWillMount: function () {
		TodoStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function () {
		TodoStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		this.setState({
			todos: TodoStore.getAllTodos()
		});
	},

	render: function() {
		return (
			<div>

				<div className="horizontal-listing z-depth-1 ">

				    <div className="row">
				        <div className="col-sm-4">
				            <div className="view overlay hm-white-slight">
				                <img src="http://mdbootstrap.com/images/reg/reg%20(54).jpg" className="img-fluid" alt=""/>
				                <a>
				                    <div className="mask"></div>
				                </a>
				            </div>
				        </div>
				        <div className="col-sm-8">
				            <a><h2>Card title</h2></a>
				            <div className="card-data">
				                <ul>
				                    <li><i className="fa fa-clock-o"></i> 05/10/2015</li>
				                    <li><a><i className="fa fa-comments-o"></i>12</a></li>
				                    <li><a><i className="fa fa-facebook"> </i>21</a></li>
				                    <li><a><i className="fa fa-twitter"> </i>5</a></li>
				                </ul>
				            </div>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis incidunt accusantium maxime odit nemo corporis, magnam quam eos quasi architecto inventore provident hic neque aspernatur, ipsa tempore vero numquam totam.</p>
				        </div>
				    </div>

				</div>
			

			</div>
		);
	}
});

module.exports = Tile;