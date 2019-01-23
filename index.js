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



var extractNumberListFromString = function(value) {
	if (isEmptyString(value)) {
		return ""
	}

	return value.match(/[-+]?[0-9]*\.?[0-9]+/g)
}
module.exports.extractNumberListFromString = extractNumberListFromString


var extractNumberFromString = function(value) {
	if (isEmptyString(value)) {
		return ""
	}

	var numberList = value.match(/[-+]?[0-9]*\.?[0-9]+/g);
	if (isEmptyArray(numberList)) {
		return ""
	}
	return numberList[0]
}
module.exports.extractNumberFromString  = extractNumberFromString















