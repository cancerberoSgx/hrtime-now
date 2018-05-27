/**
 * Usage:
 *
 * ```javascript
 *   let t1 = time()
 *   // execute some task....
 *   const t2 = time(t1)
 *   console.log(`the task took ${t2}` nanoseconds`)
 * ```
 */
export declare function time(): [number, number];
export declare function time(input: [number, number]): number;
/**
 * Returns a timestamp like `Date.now()` but in this case the timestamp means nothing special.
 * Just extracting two `now()` calls will give the difference between the two in nanoseconds,
 * as shown in the following example:
 *
 * ```javascript
 *   let t0 = now()
 *   // execute some task...
 *   console.log(`the task took ${(now()-t0)/1000000} milliseconds`)
 * ```
 */
export declare const now: () => number;
/**
 * Pretty print the difference between given time (previouslytaken with `now()` and current time).
 * Example:
 *
 * ```javascript
 * var t0 = now()
 * something()
 * log(`something took ${timeFrom(t0)}`)
 * ```
 *
 * That could print something like *somehing took 1m 29s"
 */
export declare function timeFrom(ns: number): string;
/**
 * Example:
 * ```javascript
 * const result = fromNow(
 *   ()=>compileSass('*.scss),
 *   t=>console.log(`sass compilation took ${t}`)
 * )
 * ```
 * or implement a logger function factory and don't worry about messages anymore:
 *
 * ```js
 * const logTime = (fn) => fromNow(fn, (t, hint) => console.log(`Function ${hint} took ${t}`))
 * // use logTime() instead of fromNow from now on without worrying to pass any msg
 * const result = logTime(() => compileSass('*.scss'))
 * // will log something like "Function ()=>compileSass took 1s"
 * ```
 * @param work
 * @param onEnd
 */
export declare function fromNow<T>(work: () => T, onEnd: (prettyMs: string, fnHint: string, msElapsed: number, t0: number, t1: number) => any, fnHintBuilder?: (fn: typeof work) => string): T;
