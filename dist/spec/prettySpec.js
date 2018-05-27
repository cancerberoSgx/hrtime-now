"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('igh level - pretty utils', () => {
    it('fromNow', (done) => {
        const log = (msg) => ((prettyMs) => console.log(`${msg} took ${prettyMs}`));
        function doHeavyTask_4(param1, param2) {
            return { name: 'seba' };
        }
        let result = src_1.fromNow(() => doHeavyTask_4(1, '2'), log('heavy-task-subsection-4'));
        expect(result.name).toBe('seba');
        done();
        // TODO: assert
    });
    xit('timeFrom', (done) => {
    });
});
//# sourceMappingURL=prettySpec.js.map