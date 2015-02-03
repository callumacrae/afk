# AFK.js

A library to tell whether your user is active or not and when they were last
active.

## Install

```
$ npm install --save afk.js
```

## Usage

```js
afk.on('inactive', function () {
	console.log('User has gone inactive');
}).on('active', function () {
	console.log('User has become active');
});

afk.lastActive; // Time the user was last active (or -1)
afk.isActive(); // Pretty descriptive, returns boolean
```

The active event won't fire multiple times in a row, the inactive event has to
fire before it fires again.

### Config

```js
afk.config.activeTime = 10000;
```

The number of ms until the user is considered inactive.

```js
afk.config.visibility = true;
```

If true, the page visibility API will be used to set the user inactive if the
page goes out of focus (e.g. the user changes to a different tab).

## License

Released under the MIT license.