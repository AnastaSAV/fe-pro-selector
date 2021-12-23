const selector = function (obj, keys) {
	for (let i = 0; i < keys.length; i++) {
		if (!obj[keys[i]]) return '';
		else obj = obj[keys[i]];
	}
	return obj;
};

module.exports = selector;
