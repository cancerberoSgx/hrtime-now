"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('ihgh level - pretty utils', () => {
    it('fromNow', async (done) => {
        const console_log = jasmine.createSpy('console_log', (s) => console.log('hshshshs', s));
        const log = (module = '') => ((prettyMs, fnHint) => console_log(`${module} ${fnHint}`));
        function doHeavyTask_4(param1, param2) {
            return { name: 'seba' };
        }
        let result = await src_1.fromNow(async () => doHeavyTask_4(1, '2'), log('module_43'));
        expect(result.name).toBe('seba');
        expect(console_log).toHaveBeenCalledWith('module_43 async () => doHeavyT');
        done();
    });
    xit('no msgs', (done) => {
        const log = (t, hint) => console.log(`Function ${hint} took ${t}`);
        const took = async (fn) => await src_1.fromNow(fn, log);
        const compileSass = (src) => {
            return { error: false };
        };
        // const result = await took(() => compileSass('./src/**/*.scss'))
        // will log something like "Function ()=>compileSass took 1s"
        done();
    });
});
//# sourceMappingURL=prettySpec.js.map