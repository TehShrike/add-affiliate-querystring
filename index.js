var url = require('url')

module.exports = function createAffiliateLinkFunction(domain) {
	return function(input, key, value) {
		var parsed = url.parse(input, true)

		if (parsed.hostname === domain) {
			parsed.query[key] = value
			delete parsed.search
			return url.format(parsed)
		}

		return input
	}

}
