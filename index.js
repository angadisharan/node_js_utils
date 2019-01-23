var isEmptyString = function(value) {
	if (isNull(value) || !(typeof value == "string")) {
		return true
	}

	if (!value.trim()) {
		return true
	}

	return false;
}
module.exports.isEmptyString = isEmptyString

var isNull = function(object) {
	return object == null || object == undefined
}
module.exports.isNull = isNull;


var isEmptyArray = function(value) {
	if (isNull(value) || value.constructor !== Array) {
		return true
	}

	return !(value.length > 0);
}
module.exports.isEmptyArray  = isEmptyArray

