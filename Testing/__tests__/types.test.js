const {
    isNumber,
    castToNumber,
    getCaster
} = require('../../lib/types.js');

describe('validator module', () => {
    describe('map test validation', () => {
        it('maps through an array and applies a function to each element', () => {
            expect(map()).toBeTruthy();
            expect(isNumber('hi')).toBeFalsy();
        });
    });

//     describe('casters', () => {
//         it('can cast values to a number', () => {
//             expect(castToNumber(3)).toEqual(3);
//             expect(castToNumber('3')).toEqual(3);
//             expect(castToNumber(true)).toEqual(1);
//             expect(castToNumber(false)).toEqual(0);
//         });

//         it('throws if value is not castable to number', () => {
//             expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
//             expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
//         });
//     });

//     it('can get the right caster', () => {
//         expect(getCaster(Number)).toEqual(castToNumber);
//         expect(getCaster(Promise)).toBeNull();
//     });
// });
