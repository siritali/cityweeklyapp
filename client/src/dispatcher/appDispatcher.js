'use strict';

var Dispatcher = require('flux').Dispatcher;
var Assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(),{
	handleViewAction: function(action){
		var payload = {
			source: 'VIEW_ACTION',
			action: action
		};
		this.dispatch(payload);
	}
});

module.exports = new AppDispatcher();