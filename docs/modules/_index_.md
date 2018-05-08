[hrtime-now](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Functions

* [now](_index_.md#now)
* [time](_index_.md#time)

---

## Functions

<a id="now"></a>

### `<Const>` now

▸ **now**(): `number`

*Defined in index.ts:33*

returns a timestamp like `Date.now()` but in this case this timestamp means nothing special. Just extracting two now() calls will give the millisecond difference: for example:

      let t0 = now()
      execute some task...
      console.log(`the task took ${now()-t0}` milliseconds`)

**Returns:** `number`

___
<a id="time"></a>

### `<Const>` time

▸ **time**(input?: *[`number`, `number`] |`void`*): `number` |[`number`, `number`]

*Defined in index.ts:12*

Usage:

      let t1 = time()
      execute some task....
      const t2 = time(t1)
      console.log(`the task took ${t2}` milliseconds`)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` input | [`number`, `number`] |
`void`
 | 

**Returns:** `number` |
[`number`, `number`]

___

