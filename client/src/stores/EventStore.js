'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';
var _ = require('lodash');
var toastr = require('toastr');

var _events = {
	list: [],
	editing: false,
	mainState: 'default'
};

var EventStore = Object.assign({}, EventEmitter.prototype, {

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	getAllEvents: function () {
		return _events;
	},

	getTaskById: function (eventId) {
		return _.find(_events, {_id: eventId})
	}

});

Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.actionType) {

		case AppConstants.NEW_EVENT:
			_event = editing = true;
			_event.mainState = 'new';
			EventStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.EDIT_EVENT:
			_event = editing = true;
			_event.mainState = 'new';
			_event.selectedId = action.itemId;
			EventStore.emit(CHANGE_EVENT);
			break;
		
	}
	return true;
});

module.exports = EventStore;
