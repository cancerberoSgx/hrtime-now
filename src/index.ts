
import prettyMs from 'pretty-ms'
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
export async function fromNow<T>(
  work: ()=>Promise<T>, 
  onEnd: (prettyMs:string, fnHint: string, msElapsed: number, t0: number, t1: number )=>any,  
  fnHintBuilder: (fn: typeof work)=>string = defaultFnHintBuilder
):Promise<T> {
  const t0 = now()
  const result = await work()
  const t1 = now()
  const ms = (t1-t0) / 1000000
  onEnd(prettyMs(ms), defaultFnHintBuilder(work), ms, t0, t1)
  return result
}

const defaultFnHintBuilder =  (fn:any) => {
  let fnHint = fn.toString()
  fnHint = fnHint.substring(0, Math.min(fnHint.length, fnHintTrunc))
  // TODO: trunk with a regex till the end of the function name if any
  return fnHint
}
const fnHintTrunc = 20

//TODO: the same as fromNow but async - promises