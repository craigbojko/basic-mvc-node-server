var _api
function API () {
	this._api = this
}

API.prototype.processHome = function () {
	return {
		response: true,
		status: 200,
		type: 'api',
		subtype: 'homepage 3'
	}
}


module.exports = function(){
	return _api || new API()
}