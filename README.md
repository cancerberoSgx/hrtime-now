# hrtime-now

Friendly API for `process.hrtime` with some high level - date-pretty format utilities. Ideal to measure how long it take to run a function /fragment of code.

## Install

```sh
npm install --save hrtime-now
```

## Usage

### Basic: Using `now()` : 

```javascript
import {now} from 'hrtime-now'
const t0 = now()
// execute synchronous some task to measure time
console.log(`the task took ${(now()-t0)/1000000} milliseconds`)
```

**Important**: the number returned by `now` doesn't mean anything special, i.e, is not `performance.now()` !
### High level: pretty times with timeFrom()

Pretty print the difference between given time (previouslytaken with `now()` and current time). Example: 

```javascript
var t0 = now()
something()
log(`something took ${timeFrom(t0)}`)
```

Could print : *"somehing took 1m 29s"*

### High level: single statement with fromNow()

Suppose you have a (synchronous) statement like the following

```js
const result = compileSass('./src/**/*.scss')
```
You want to measure how long it takes: 

```js
const result = fromNow(
  ()=>compileSass('./src/**/*.scss'), 
  t=>console.log(`sass compilation took ${t}`)
)
```

or create a log function factory and don't worry about msgs: 
```js
const logTime = (fn) => fromNow(fn, (t, hint) => console.log(`Function ${hint} took ${t}`))
// use logTime() instead of fromNow from now on without worrying to pass any msg 
const result = logTime(() => compileSass('./src/**/*.scss'))
// will log something like "Function ()=>compileSass took 1s"
```


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

### Working Example: 

<script src="https://embed.runkit.com" data-element-id="my-element"></script>
<div id="my-element">
const now = require("hrtime-now").now
const t0 = now()
console.log(`the task took ${(now()-t0)/1000} milliseconds`)
</div>


## API documentation

[API](https://github.com/cancerberoSgx/hrtime-now/blob/master/docs/modules/_index_.md)


## TODO

 * asynchronous
