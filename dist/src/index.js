"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pretty_ms_1 = __importDefault(require("pretty-ms"));
function time(input) {
    if (!input) {
        return process.hrtime();
    }
    else {
        let hrtime = process.hrtime(input);
        const nanoseconds = (hrtime[0] * 1e9) + hrtime[1];
        return nanoseconds;
    }
}
exports.time = time;
const t0 = time();
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
exports.now = () => {
    return time(t0);
};
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
function timeFrom(ns) {
    return pretty_ms_1.default((exports.now() - ns) / 1000000);
}
exports.timeFrom = timeFrom;
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
async function fromNow(work, onEnd, fnHintBuilder = defaultFnHintBuilder) {
    const t0 = exports.now();
    const result = await work();
    const t1 = exports.now();
    const ms = (t1 - t0) / 1000000;
    onEnd(pretty_ms_1.default(ms), defaultFnHintBuilder(work), ms, t0, t1);
    return result;
}
exports.fromNow = fromNow;
const defaultFnHintBuilder = (fn) => {
    let fnHint = fn.toString();
    fnHint = fnHint.substring(0, Math.min(fnHint.length, fnHintTrunc));
    // TODO: trunk with a regex till the end of the function name if any
    return fnHint;
};
const fnHintTrunc = 20;
//TODO: the same as fromNow but async - promises
//# sourceMappingURL=index.js.map