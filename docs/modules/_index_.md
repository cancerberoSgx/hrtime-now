[hrtime-now](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Functions

* [fromNow](_index_.md#fromnow)
* [now](_index_.md#const-now)
* [time](_index_.md#time)
* [timeFrom](_index_.md#timefrom)

## Functions

###  fromNow

▸ **fromNow**<**T**>(`work`: function, `onEnd`: function, `fnHintBuilder`: function): *Promise‹T›*

*Defined in [index.ts:77](https://github.com/cancerberoSgx/hrtime-now/blob/99c5df8/src/index.ts#L77)*

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

▪ **T**

**Parameters:**

▪ **work**: *function*

▸ (): *Promise‹T›*

▪ **onEnd**: *function*

▸ (`prettyMs`: string, `fnHint`: string, `msElapsed`: number, `t0`: number, `t1`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`prettyMs` | string |
`fnHint` | string |
`msElapsed` | number |
`t0` | number |
`t1` | number |

▪`Default value`  **fnHintBuilder**: *function*=  defaultFnHintBuilder

▸ (`fn`: function): *string*

**Parameters:**

▪ **fn**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

___

### `Const` now

▸ **now**(): *number*

*Defined in [index.ts:37](https://github.com/cancerberoSgx/hrtime-now/blob/99c5df8/src/index.ts#L37)*

Returns a timestamp like `Date.now()` but in this case the timestamp means nothing special.
Just extracting two `now()` calls will give the difference between the two in nanoseconds,
as shown in the following example:

```javascript
  let t0 = now()
  // execute some task...
  console.log(`the task took ${(now()-t0)/1000000} milliseconds`)
```

**Returns:** *number*

___

###  time

▸ **time**(): *[number, number]*

*Defined in [index.ts:13](https://github.com/cancerberoSgx/hrtime-now/blob/99c5df8/src/index.ts#L13)*

Usage:

```javascript
  let t1 = time()
  // execute some task....
  const t2 = time(t1)
  console.log(`the task took ${t2}` nanoseconds`)
```

**Returns:** *[number, number]*

▸ **time**(`input`: [number, number]): *number*

*Defined in [index.ts:14](https://github.com/cancerberoSgx/hrtime-now/blob/99c5df8/src/index.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [number, number] |

**Returns:** *number*

___

###  timeFrom

▸ **timeFrom**(`ns`: number): *string*

*Defined in [index.ts:55](https://github.com/cancerberoSgx/hrtime-now/blob/99c5df8/src/index.ts#L55)*

Pretty print the difference between given time (previouslytaken with `now()` and current time).
Example:

```javascript
var t0 = now()
something()
log(`something took ${timeFrom(t0)}`)
```

That could print something like *somehing took 1m 29s"

**Parameters:**

Name | Type |
------ | ------ |
`ns` | number |

**Returns:** *string*
