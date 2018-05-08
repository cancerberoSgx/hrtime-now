"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const shelljs_1 = require("shelljs");
shelljs_1.config.silent = true;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
describe('npm instal of this packed project in several technologies', () => {
    it('npm install from npmjs.org should work for user js projects', () => {
        const projectPath = shelljs_1.tempdir() + '/' + 'jsproject' + Date.now();
        // console.log('Temp project path: '+projectPath)
        const thisDir = shelljs_1.pwd();
        shelljs_1.mkdir('-p', projectPath);
        shelljs_1.cp('spec/assets/hrtime-now-testproject-js/*', projectPath);
        shelljs_1.rm('-rf', '*.tgz');
        expect(shelljs_1.exec('npm pack').code).toBe(0);
        const packed = shelljs_1.ls('*.tgz').find(f => true);
        if (!packed) {
            return fail('.npm pack did not generate tgz');
        }
        const thisProject = path_1.resolve(packed);
        shelljs_1.cd(projectPath);
        expect(shelljs_1.exec('npm install').code).toBe(0);
        expect(shelljs_1.exec(`npm install --save ${thisProject}`).code).toBe(0);
        const p = shelljs_1.exec(`node index`);
        expect(p.code).toBe(0);
        expect(parseInt(p.stdout)).toBeGreaterThan(0);
        shelljs_1.cd(thisDir);
    });
    it('npm install from npmjs.org should work for user ts projects', () => {
        const projectPath = shelljs_1.tempdir() + '/' + 'tsproject' + Date.now();
        // console.log('Temp project path: '+projectPath)
        const thisDir = shelljs_1.pwd();
        shelljs_1.mkdir('-p', projectPath);
        shelljs_1.cp('-r', 'spec/assets/hrtime-now-testproject-ts/*', projectPath);
        shelljs_1.rm('-rf', '*.tgz');
        expect(shelljs_1.exec('npm pack').code).toBe(0);
        const packed = shelljs_1.ls('*.tgz').find(f => true);
        if (!packed) {
            return fail('npm pack did not generate tgz');
        }
        const thisProject = path_1.resolve(packed);
        shelljs_1.cd(projectPath);
        expect(shelljs_1.exec('npm install').code).toBe(0);
        expect(shelljs_1.exec(`npm install --save ${thisProject}`).code).toBe(0);
        shelljs_1.rm('-rf', 'build');
        expect(shelljs_1.exec('npm run build').code).toBe(0);
        const p = shelljs_1.exec(`node dist/src/index`);
        expect(p.code).toBe(0);
        expect(parseInt(p.stdout)).toBeGreaterThan(0);
        shelljs_1.cd(thisDir);
    });
});
//# sourceMappingURL=installSpec.js.map