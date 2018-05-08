# hrtime-now

Friendly API for `process.hrtime`. 

## Install

```sh
npm install --save hrtime-now
```

## Usage

### Using `now()` : 

```javascript
import {now} from 'hrtime-now'
const t0 = now()
// execute some task to measure time
console.log(`the task took ${(now()-t0)/1000000} milliseconds`)
```

**Important**: the number returned by `now` doesn't mean anything special, i.e, is not `performance.now()` !

### Using `time()` : 

```javascript
import {time} from 'hrtime-now'
const t1 = time()
// execute some task to measure time
const t2 = time(t1)
console.log(`Task took ${t2/1000000}` milliseconds`)
```

**Note**:  If you are not using ecma6 modules, you can }require()` `now()` like this: 

```javascript
const now = require('hrtime-now').now
```

<script src="https://embed.runkit.com" data-element-id="my-element"></script>
<div id="my-element">
const now = require("hrtime-now").now
const t0 = now()
console.log(`the task took ${(now()-t0)/1000} milliseconds`)
</div>


## API documentation

https://github.com/cancerberoSgx/hrtime-now/blob/master/docs/modules/_index_.md