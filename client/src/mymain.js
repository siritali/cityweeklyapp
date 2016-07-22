'use strict';

var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var browserHistory = require('react-router').browserHistory;
var App = require('./components/MainApp');

ReactDOM.render(
	<MainApp />,
	, document.getElementById('mymain')
);