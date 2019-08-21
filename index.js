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


var isString = function(value) {
	return typeof value == "string"
}
module.exports.isString = isString

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


//======================================================================
var timeStamp = function() {
	return new Date().getTime();
}
module.exports.timeStamp  = timeStamp
//======================================================================
//======================================================================
var removeAllSpaces = function(value) {
	if (isEmptyString(value)) {
		return ""
	}

	return value.replace(/\s/g,'')
}
module.exports.removeAllSpaces  = removeAllSpaces
module.exports.removeAllSpace  = removeAllSpaces
//======================================================================
//======================================================================
var replaceSpace = function(string, replacement) {
	if (isEmptyString(string)) {
		return ""
	}
	if (isNull(replacement) || !isString(replacement)) {
		replacement = ""
	}
	return string.replace(/\s/g, replacement);
}
module.exports.replaceSpace  = replaceSpace
module.exports.replaceSpaceChar  = replaceSpace
//======================================================================
//======================================================================

var replaceSpecialChar = function(string, replacement) {
	if (isEmptyString(string)) {
		return ""
	}
	if (isNull(replacement) || !isString(replacement)) {
		replacement = ""
	}
	return string.replace(/[\~\!\@\#\$\%\^\&\*\(\\)\\\|\?\<\>\{\}\[\]\`\;\:\'\"\/\.\,]/g, replacement);
}
module.exports.replaceSpecialChar = replaceSpecialChar
//======================================================================
//======================================================================

var removeMultipleSpace = function(string) {
	if (isEmptyString(string)) {
		return ""
	}
	return string.replace(/\s\s+/g, " ");
}
module.exports.removeMultipleSpace = removeMultipleSpace
//======================================================================
//======================================================================

var formatFileName = function(fileName) {
	if (isEmptyString(fileName)) {
		return ""
	}
	var dotIndex = fileName.lastIndexOf(".")
	var extension = ""
	if (dotIndex != -1) {
		extension = fileName.substring(dotIndex, fileName.length)
		fileName = fileName.substring(0, dotIndex)
	}

	fileName = replaceSpace(fileName, "_");
	fileName = replaceSpecialChar(fileName,"_");

	return fileName + extension;
}
module.exports.formatFileName  = formatFileName

//======================================================================
//======================================================================


module.exports.wordsCount = wordsCount;
module.exports.wordCount = wordsCount;
function wordsCount(my_string) {
	if (isEmptyString(my_string)) {
		return -1
	}
	my_string = my_string.trim()
	my_string = removeMultipleSpace(my_string)

	return my_string.split(" ").length
}






