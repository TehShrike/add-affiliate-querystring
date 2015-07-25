var url = require('url')

module.exports = function createAffiliateLinkFunction(domain, key, value) {
	return function(input) {
		var parsed = url.parse(input, true)

		if (parsed.hostname === domain) {
			parsed.query[key] = value
			delete parsed.search
			return url.format(parsed)
		}

		return input
	}

}
