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


// EX : Hello world => 2
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

//======================================================================
//======================================================================

//EX 2nd Floor =>> 2 Floor
var removeNthFromWord = function(word) {
    var matchNumber = "[0-9]{1,}"
    var matchNth = "\\s*(s\\s*t|n\\s*d|r\\s*d|t\\s*h)"
    numberedTokens = word.match(new RegExp(matchNumber + matchNth))
    if(s_node_js_utils.isEmptyArray(numberedTokens)) {
        return word
    }

    var splits = word.split(numberedTokens[0])
    var newWord = splits.shift() + numberedTokens[0].replace(new RegExp(matchNth), " ")
    if(splits.length >= 1) {
        newWord += splits.join(" ")
    }

    newWord = newWord.replace(/\s\s+/g, " ")
    return removeNthFromWord(newWord)
}
module.exports.removeNthFromWord = removeNthFromWord

//======================================================================
//======================================================================




