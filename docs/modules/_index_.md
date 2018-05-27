[hrtime-now](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Functions

* [fromNow](_index_.md#fromnow)
* [now](_index_.md#now)
* [time](_index_.md#time)
* [timeFrom](_index_.md#timefrom)

---

## Functions

<a id="fromnow"></a>

###  fromNow

▸ **fromNow**T(work: *`function`*, onEnd: *`function`*, fnHintBuilder?: *`function`*): `T`

*Defined in [index.ts:76](https://github.com/cancerberoSgx/hrtime-now/blob/d6cd79e/src/index.ts#L76)*

Example:

```javascript
const result = fromNow(
  ()=>compileSass('*.scss),
  t=>console.log(`sass compilation took ${t}`)
)
```

or implement a logger function factory and don't worry about messages anymore:

```js
const logTime = (fn) => fromNow(fn, (t, hint) => console.log(`Function ${hint} took ${t}`))
// use logTime() instead of fromNow from now on without worrying to pass any msg
const result = logTime(() => compileSass('*.scss'))
// will log something like "Function ()=>compileSass took 1s"
```

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| work | `function` | - |  - |
| onEnd | `function` | - |   |
| `Default value` fnHintBuilder | `function` |  defaultFnHintBuilder |

**Returns:** `T`

___
<a id="now"></a>

### `<Const>` now

▸ **now**(): `number`

*Defined in [index.ts:35](https://github.com/cancerberoSgx/hrtime-now/blob/d6cd79e/src/index.ts#L35)*

Returns a timestamp like `Date.now()` but in this case the timestamp means nothing special. Just extracting two `now()` calls will give the difference between the two in nanoseconds, as shown in the following example:

```javascript
let t0 = now()
  // execute some task...
  console.log(`the task took ${(now()-t0)/1000000} milliseconds`)
```

**Returns:** `number`

___
<a id="time"></a>

###  time

▸ **time**(): [`number`, `number`]

▸ **time**(input: *[`number`, `number`]*): `number`

*Defined in [index.ts:11](https://github.com/cancerberoSgx/hrtime-now/blob/d6cd79e/src/index.ts#L11)*

Usage:

```javascript
let t1 = time()
  // execute some task....
  const t2 = time(t1)
  console.log(`the task took ${t2}` nanoseconds`)
```

**Returns:** [`number`, `number`]

*Defined in [index.ts:12](https://github.com/cancerberoSgx/hrtime-now/blob/d6cd79e/src/index.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | [`number`, `number`] |

**Returns:** `number`

___
<a id="timefrom"></a>

###  timeFrom

▸ **timeFrom**(ns: *`number`*): `string`

*Defined in [index.ts:54](https://github.com/cancerberoSgx/hrtime-now/blob/d6cd79e/src/index.ts#L54)*

Pretty print the difference between given time (previouslytaken with `now()` and current time). Example:

```javascript
var t0 = now()
something()
log(`something took ${timeFrom(t0)}`)
```

That could print something like *somehing took 1m 29s"

**Parameters:**

| Param | Type |
| ------ | ------ |
| ns | `number` |

**Returns:** `string`

___

