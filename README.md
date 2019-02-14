# strictEqual

Strict deep equality comparison of two variables

```javascript
const strictEqual = require("strict-equal");

strictEqual([1, 2, 3], new Array(1, 2, 3));
// true;

strictEqual(NaN, NaN);
// true;

strictEqual({ a: [1, 2, 3] }, { a: [1, 3, 2] });
// false;

strictEqual(Object.keys({ a: 1, b: 2 }), ["a", "b"]);
// true;

strictEqual(Buffer("xyz"), Buffer("xyz"));
// true;

strictEqual(null, undefined);
// false;
```

## Installation

    $ npm install strict-equal --save

## Dependencies

    No dependencies
