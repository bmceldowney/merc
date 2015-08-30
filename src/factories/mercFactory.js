var merc = require('../models/merc');

function getMerc (config) {
	var instance = Object.create(merc);

	for(var key in config) {
		if (config.hasOwnProperty(key)) {
			instance[key] = config[key];
		}
	}

	return instance;
}

module.exports = {
	getMerc: getMerc
};
