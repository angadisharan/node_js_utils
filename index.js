var isEmptyString = function(value) {
	if (isNull(value)) {
		return true
	}
	return !value || value == undefined || value == "" || value.length == 0 || !value.trim()
}
module.exports.isEmptyString = isEmptyString

var isNull = function(object) {
	return object == null || object == undefined
}
module.exports.isNull = isNull;




