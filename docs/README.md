
hrtime-now
==========

Friendly API for `process.hrtime`.

Install
-------

    npm install --save hrtime-now
    

Usage
-----

Using `now()` :

    import {now} from 'hrtime-now'
    const t0 = now()
    // execute some task to measure time
    console.log(`the task took ${now()-t0}` milliseconds`)
    

**Important**: the number returned by `now` doesn't mean anything special, i.e, is not `performance.now()` !

    import {time} from 'hrtime-now'
    const t1 = time()
    // execute some task to measure time
    const t2 = time(t1)
    console.log(`Task took ${t2}` milliseconds`)

## Index

### External modules

* ["index"](modules/_index_.md)

---

