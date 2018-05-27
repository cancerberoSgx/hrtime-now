import { fromNow, timeFrom } from "../src";

describe('igh level - pretty utils', () => {
  it('fromNow', (done) => {

    const log = (msg: string) => ((prettyMs: string) => console.log(`${msg} took ${prettyMs}`))
    function doHeavyTask_4(param1:Number, param2:string) {
      return {name: 'seba'}
    }
    let result =  fromNow(()=>doHeavyTask_4(1,'2'), log('heavy-task-subsection-4'))
    expect(result.name).toBe('seba')
    done()

    // TODO: assert
  })

  xit('timeFrom', (done) => {

  })

})