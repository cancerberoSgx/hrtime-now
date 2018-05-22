"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('time', () => {
    it('now', (done) => {
        const t0 = src_1.now();
        setTimeout(() => {
            const duration = src_1.now() - t0;
            // console.log(duration/1000000);
            expect(duration / 1000000 >= 40).toBe(true);
            done();
        }, 40);
    });
    it('time', (done) => {
        const t0 = src_1.time();
        setTimeout(() => {
            const duration = src_1.time(t0);
            // console.log(duration/1000000);      
            expect(duration / 1000000).toBeGreaterThanOrEqual(100);
            done();
        }, 100);
    });
});
//# sourceMappingURL=indexSpec.js.map