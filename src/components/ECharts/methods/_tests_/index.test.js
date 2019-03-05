import { _formatNumer, _isData } from '..';
// import renderer from 'react-test-renderer';
const sum = (a, b) => a + b;
describe('methods', () => {
    it('_formatNumer', () => {
        expect(sum(1, 2)).toBe(3);
        expect(_formatNumer(10000)).toBe('10,000');
        expect(_isData({})).toBe(false);

    });
});
