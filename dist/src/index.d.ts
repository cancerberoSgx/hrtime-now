/**
 * Usage:
 *
 * ```javascript
 *   let t1 = time()
 *   // execute some task....
 *   const t2 = time(t1)
 *   console.log(`the task took ${t2}` milliseconds`)
 * ```
 */
export declare function time(): [number, number];
export declare function time(input: [number, number]): number;
/**
 * Returns a timestamp like `Date.now()` but in this case the timestamp means nothing special.
 * Just extracting two `now()` calls will give the millisecond difference, as shown in the following example:
 *
 * ```javascript
 *   let t0 = now()
 *   // execute some task...
 *   console.log(`the task took ${now()-t0}` milliseconds`)
 * ```
 */
export declare const now: () => number;
