'use strict';

var React = require('react');
var TodoList = require('../todos/TodoList');
var Link = require('react-router').Link;
var TodoStore = require('../../stores/todoStore');


var Tiles = React.createClass({

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

				

				<div className="hl-2-col">
				    <div className="col-md-6">
				        <div className="main-card">
				            <div className="view overlay hm-white-slight">
				                <img src="http://mdbootstrap.com/images/reg/reg%20(38).jpg" className="img-fluid" alt=""/>
				                <a>
				                    <div className="mask"></div>
				                </a>
				            </div>
				            <div className="card-block">
				                <a><h2>Tile 1</h2></a>
				                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod esse animi impedit in fuga minima a magni qui nulla consequatur repellendus.</p>
				            </div>
				        </div>
				    </div>

				    <div className="col-md-6">
				        <div className="main-card">
				            <div className="view overlay hm-white-slight">
				                <img src="http://mdbootstrap.com/images/reg/reg%20(42).jpg" className="img-fluid" alt=""/>
				                <a>
				                    <div className="mask"></div>
				                </a>
				            </div>
				            <div className="card-block">
				                <a><h2>Tile 2</h2></a>
				                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod esse animi impedit in fuga minima a magni qui nulla consequatur repellendus.</p>
				            </div>
				        </div>
				    </div>
				</div>


			

			</div>
		);
	}
});

module.exports = Tiles;