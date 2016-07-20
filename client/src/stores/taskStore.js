'use strict';

var AppDispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/appConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';
var _ = require('lodash');
var toastr = require('toastr');

var _tasks = {
	list: [],
	editing: false,
	mainState: 'default',
	selectedId = '';
};

var TaskStore = Object.assign({}, EventEmitter.prototype, {

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	getAllTasks: function () {
		return _tasks;
	},

	getTaskById: function (taskId) {
		return _.find(_tasks, {_id: taskId})
	}

});

Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.actionType) {

		case AppConstants.NEW_TASK:
			_task = editing = true;
			_task.mainState = 'new';
			TaskStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.EDIT_TASK:
			_task = editing = true;
			_task.mainState = 'new';
			_task.selectedId = action.itemId;
			TaskStore.emit(CHANGE_EVENT);
			break;
		
	}
	return true;
});

module.exports = TaskStore;
