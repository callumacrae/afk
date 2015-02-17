var $ = require('jquery');
var watcher = require('visibility')();
var afterDelay = require('after-delay');

var afk = $({});

if (typeof window === 'object') {
	window.afk = afk;
}

if (typeof module === 'object' && module.exports) {
	module.exports = afk;
}

afk.config = {
	activeTime: 10000,
	visibility: true
};

var lastActive = -1;
var isActive;

afk.lastActive = function userLastActive() {
	return lastActive;
};

afk.isActive = function userIsActive() {
	return isActive;
};

function active() {
	lastActive = (new Date()).getTime();

	afterDelay('inactive', function () {
		inactive();
	}, afk.config.activeTime);

	if (!isActive) {
		isActive = true;
		afk.triggerHandler('active');
	}
}

function inactive() {
	afk.triggerHandler('inactive');
	isActive = false;
}

$(document).on({
	mousemove: active,
	mousedown: active,
	mouseup: active,
	keydown: active,
	keyup: active,
	scroll: active
});

watcher.on('show', function () {
	if (afk.config.visibility) {
		active();
	}
});

watcher.on('hide', function () {
	if (afk.config.visibility) {
		inactive();
	}
});