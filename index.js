var url = require('url')

module.exports = function createAffiliateLinkFunction(domain, key, value) {
	domain = domain.toLowerCase()

	return function(input) {
		var parsed = url.parse(input, true)

		if (hostMatchesDomain(parsed.hostname, domain)) {
			parsed.query[key] = value
			delete parsed.search
			return url.format(parsed)
		}

		return input
	}
}

function hostMatchesDomain(host, domain) {
	host = host.toLowerCase()
	var domainWithPeriod = '.' + domain
	return host === domain || host.substr(-domainWithPeriod.length) === domainWithPeriod
}
