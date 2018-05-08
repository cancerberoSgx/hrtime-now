# hrtime-now

Friendly API for `process.hrtime`. 

## Install

```sh
npm install --save hrtime-now
```

## Usage
Using `now()` : 

```javascript
import {now} from 'hrtime-now'
const t0 = now()
// execute some task to measure time
console.log(`the task took ${now()-t0}` milliseconds`)
```

**Important**: the number returned by `now` doesn't mean anything special, i.e, is not `performance.now()` !

```javascript
import {time} from 'hrtime-now'
const t1 = time()
// execute some task to measure time
const t2 = time(t1)
console.log(`Task took ${t2}` milliseconds`)
```