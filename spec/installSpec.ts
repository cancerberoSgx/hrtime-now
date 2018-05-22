import { resolve } from 'path';
import { cd, cp, exec, ls, mkdir, rm, tempdir, config, pwd } from 'shelljs';

// config.silent = true
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

describe('npm instal of this packed project in several technologies', () => {
  it('npm install from npmjs.org should work for user js projects', () => {

    const projectPath = tempdir()+'/'+'jsproject'+Date.now()

    // console.log('Temp project path: '+projectPath)
    const thisDir = pwd()
    mkdir('-p',  projectPath)
    cp('spec/assets/hrtime-now-testproject-js/*', projectPath)
    rm('-rf', '*.tgz')
    expect(exec('npm pack').code).toBe(0)
    const packed = ls('*.tgz').find(f=>true)
    if(!packed){
      return fail('.npm pack did not generate tgz')
    }
    const thisProject = resolve(packed)
    cd(projectPath)
    expect(exec('npm install').code).toBe(0)
    expect(exec(`npm install --save ${thisProject}`).code).toBe(0)
    const p = exec(`node index`)
    expect(p.code).toBe(0)
    expect(parseInt(p.stdout)).toBeGreaterThan(0)
    cd (thisDir)
  })


  it('npm install from npmjs.org should work for user ts projects', () => {

    const projectPath = tempdir()+'/'+'tsproject'+Date.now()
    // console.log('Temp project path: '+projectPath)
    const thisDir = pwd()
    mkdir('-p',  projectPath)
    cp('-r', 'spec/assets/hrtime-now-testproject-ts/*', projectPath)
    rm('-rf', '*.tgz')
    expect(exec('npm pack').code).toBe(0)
    const packed = ls('*.tgz').find(f=>true)
    if(!packed){
      return fail('npm pack did not generate tgz')
    }
    const thisProject = resolve(packed)
    cd(projectPath)
    expect(exec('npm install').code).toBe(0)
    expect(exec(`npm install --save ${thisProject}`).code).toBe(0)
    rm('-rf', 'build')
    
    expect(exec('npm run build').code).toBe(0)
    const p = exec(`node dist/src/index`)
    expect(p.code).toBe(0)
    expect(parseInt(p.stdout)).toBeGreaterThan(0)
    cd (thisDir)
  })
})