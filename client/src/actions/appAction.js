'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var API = require('../helpers/api');

// Action Creators

var appActons = {
	newTask: function(){
		appDispatcher.handleViewAction({
			actionType:appConstants.NEW_TASK
		});
	},
	editTask: function(){
		appDispatcher.handleViewAction({
			actionType:appConstants.EDIT_TASK,
			itemId: itemId
		});
	}
}