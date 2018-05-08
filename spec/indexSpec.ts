import { now, time } from '../src'
describe('time', () => {
  it('now', (done) => {
    const t0 = now()
    setTimeout(() => {
      const t1 = now()
      expect(t1 - t0 >= 40).toBe(true)
      done()
    }, 40);
  })
  it('time', (done) => {
    const t0 = time()
    setTimeout(() => {
      const t1 = time(t0)
      expect(t1 >= 40).toBe(true)
      done()
    }, 40);
  })
})