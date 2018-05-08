"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('time', () => {
    it('now', (done) => {
        const t0 = src_1.now();
        setTimeout(() => {
            const t1 = src_1.now();
            expect(t1 - t0 >= 40).toBe(true);
            done();
        }, 40);
    });
    it('time', (done) => {
        const t0 = src_1.time();
        setTimeout(() => {
            const t1 = src_1.time(t0);
            expect(t1 >= 0).toBe(true);
            done();
        }, 40);
    });
});
//# sourceMappingURL=indexSpec.js.map