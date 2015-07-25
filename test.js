var AffiliateLinkAdder = require('./')
var test = require('tape')

test('basic', function(t) {
	var add = AffiliateLinkAdder('amazon.com', 'tag', 'me')
	function testWithPrefix(prefix) {
		t.test('testing with prefix "' + prefix + '"', function(t) {
			t.equal(add(prefix + 'amazon.com/?existing=whatever'), prefix + 'amazon.com/?existing=whatever&tag=me')
			t.equal(add(prefix + 'amazon.com/'), prefix + 'amazon.com/?tag=me')
			t.equal(add(prefix + 'amazon.com/?tag=existing'), prefix + 'amazon.com/?tag=me')

			t.equal(add(prefix + 'other.com/?tag=existing'), prefix + 'other.com/?tag=existing')
			t.end()
		})
	}

	testWithPrefix('http://')
	testWithPrefix('https://')

	t.end()
})
