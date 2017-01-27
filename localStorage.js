_.storage = {
	_prefix: 'prefix_',
	_debug: true,
	check: function () {
		return _.isUndefined(localStorage) ? false : true;
	},
	get: function (key, hasPrefix) {
		if (!this.check()) return;
		key = (!hasPrefix) ? this._key(key) : key;
		return this.onGet(localStorage.getItem(key));
	},
	getAll: function () {
		if (!this.check()) return ({});

		var self = this;
		var items = _.map(_.keys(localStorage), function (key) {
			return self.get(key, true);
		});

		return items;
	},
	set: function (key, value) {
		if (!this.check()) return;
		try {
			this.remove(key);
			localStorage.setItem(this._key(key), this.onSet(value));
			return true;
		} catch (e) {
			return false;
		}
	},
	remove: function (key) {
		if (!this.check()) return;
		localStorage.removeItem(this._key(key));
	},
	removeByKeyContains: function (key) {
		if (!this.check()) return;

		_.each(_.keys(localStorage), function (e) {
			e.indexOf(key) >= 0 && this.remove(e);
		}, this);
	},
	clear: function () {
		if (!this.check()) return;
		localStorage.clear();
	},
	onSet: function (value) {
		return _.isFunction(value) ? null : _.isObject(value) || _.isArray(value) ? JSON.stringify(value) : value;
	},
	onGet: function (value) {
		try {
			value = JSON.parse(value);
		} catch (e) {
			if ( this._debug ) {
				console.error(e);
			}
		}
		return value;
	},
	_key: function (key) {
		return this._prefix + (_.isArray(key) || _.isObject(key) ? key.join(".") : key);
	}
};
