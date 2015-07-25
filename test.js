var AffiliateLinkAdder = require('./')
var test = require('tape')

test('basic', function(t) {
	var add = AffiliateLinkAdder('amazon.com')
	function testWithPrefix(prefix) {
		t.test('testing with prefix "' + prefix + '"', function(t) {
			t.equal(add(prefix + 'amazon.com/?existing=whatever', 'tag', 'me'), prefix + 'amazon.com/?existing=whatever&tag=me')
			t.equal(add(prefix + 'amazon.com/', 'tag', 'me'), prefix + 'amazon.com/?tag=me')
			t.equal(add(prefix + 'amazon.com/?existing=whatever', 'existing', 'me'), prefix + 'amazon.com/?existing=me')

			t.equal(add(prefix + 'other.com/?existing=whatever', 'existing', 'me'), prefix + 'other.com/?existing=whatever')
			t.end()
		})
	}

	testWithPrefix('http://')
	testWithPrefix('https://')

	t.end()
})
