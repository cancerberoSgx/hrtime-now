"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
 * Just extracting two `now()` calls will give the millisecond difference, as shown in the following example:
 *
 * ```javascript
 *   let t0 = now()
 *   // execute some task...
 *   console.log(`the task took ${now()-t0}` milliseconds`)
 * ```
 */
exports.now = () => {
    return time(t0);
};
//# sourceMappingURL=index.js.map