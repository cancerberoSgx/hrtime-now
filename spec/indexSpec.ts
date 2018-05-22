import { now, time } from '../src'
describe('time', () => {
  it('now', (done) => {
    const t0 = now()
    setTimeout(() => {
      const duration = now() - t0
      // console.log(duration/1000000);
      expect(duration/1000000 >= 40).toBe(true)
      done()
    }, 40);
  })
  it('time', (done) => {
    const t0 = time()
    setTimeout(() => {
      const duration = time(t0)
      // console.log(duration/1000000);      
      expect(duration/1000000).toBeGreaterThanOrEqual(100)
      done()
    }, 100);
  })
})