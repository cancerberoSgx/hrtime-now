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
export function time () : [number, number]
export function time (input: [number, number] ) : number
export function time (input?: [number, number] | void): number | [number, number] {
  if (!input) {
    return process.hrtime()
  } else {
    let hrtime = process.hrtime(input)
    const nanoseconds = (hrtime[0] * 1e9) + hrtime[1]
    return nanoseconds
  }
}

const t0: any = time()
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
export const now = (): number => {
  return time(t0) as number
}



import prettyMs from 'pretty-ms'
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
export function timeFrom(ns: number): string {
  return prettyMs((now() - ns) / 1000000)
}
/**
 * Example: 
 * ```javascript
 * const log = (msg)=>((prettyMs)=>console.log(`${msg} took ${prettyMs}`))
 * fromNow(()=>this.doHeavyTask_4(options), log('heavy-task-subsection-4'))
 * ```
 * @param work 
 * @param onEnd 
 */
export function fromNow<T>(work: ()=>T, onEnd: (prettyMs:string, msElapsed: number, t0: number, t1: number )=>any):T {
  const t0 = now()
  const result = work()
  const t1 = now()
  const ms = (t1-t0) / 1000000
  onEnd(prettyMs(ms), ms, t0, t1)
  return result
}


//TODO: the same as fromNow but async - promises