
Doesn't throw errors on bad urls (just returns them without modification)

Will only apply changes on the domain/host you specify.

# Usage

```js

var createAdderFunction = require('./')
var addAffiliateCode = createAdderFunction('shoppingsite.com')

addAffiliateCode('http://shoppingsite.com/thing', 'code', 'my-money-making-code') // => 'http://shoppingsite.com/thing?code=my-money-making-code'

addAffiliateCode('http://google.com/thing', 'code', 'my-money-making-code') // => 'http://google.com/thing'
```

# License

[WTFPL](http://wtfpl2.com/)
