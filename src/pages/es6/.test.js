
import { unique_0, unique_1, unique_2, unique_3 } from './components/unique';
import { sum } from './components/sum';
describe('es6 methods', () => {
    const arr = [1, 2, 3, 4];
    it('array基本用法', () => {
        //判断是否是数组
        expect(Array.isArray(arr)).toBe(true);
        //true 判断数组中是否包含某项
        expect(arr.includes(2)).toBe(true);
        //找出符合条件的数组成员并返回数组下标，找不到返回-1
        expect(arr.findIndex(d => d === 3)).toBe(2);
        // 3 找出第一个符合条件的数组成员并返回, 找不到返回 undefined
        expect(arr.find(d => d === 3)).toBe(3);
        // es5 其他还有 filter map forEach 等，这里不做举例。
        expect(arr.filter(d => d > 2)).toEqual([3, 4]);
        //每一项都满足条件则返回 true
        expect(arr.every(d => d > 2)).toBe(false);
        //只要有一项满足条件则返回 true
        expect(arr.some(d => d > 2)).toBe(true);
        //reduce
        expect(arr.reduce((pre, curr, index, array) => [...pre, curr], ['time'])).toEqual(['time', 1, 2, 3, 4]);
    });
    it('flat', () => {
        //扁平化数组，将数组转为一维数组
        expect([1, 2, [3, 4]].flat()).toEqual([1, 2, 3, 4]);
        // 默认展开一层,参数为2时展开两层
        expect([1, 2, [3, 4, [5, 6]]].flat(2)).toEqual([1, 2, 3, 4, 5, 6]);
        //flatMap():在数组执行 map 方法后执行 flat, 用的不多，其实可以写 map 后写 flat 更好懂点。
        expect([2, 3, 4].flatMap(x => [x, x * 2])).toEqual([2, 4, 3, 6, 4, 8]);
    });
    const obj = { name: 'guodada' };
    it('对象转数组', () => {
        expect(Object.keys(obj)).toEqual(['name']);
        expect(Object.values(obj)).toEqual(['guodada']);
        expect(Object.entries(obj)).toEqual([['name', 'guodada']]);
    })
    const arr4 = [4, 5, 6, 4];
    it('解构赋值', () => {
        //求最大值
        expect(Math.max(...arr4)).toBe(6);
    })
    it('数组去重', () => {
        //数组去重
        expect([...new Set(arr4)]).toEqual([4, 5, 6]);
        expect(unique_0(arr4)).toEqual([4, 5, 6]);
        expect(unique_1(arr4)).toEqual([4, 5, 6]);
        expect(unique_2(arr4)).toEqual([4, 5, 6]);
        expect(unique_3(arr4)).toEqual([4, 5, 6]);
    })
    it('求两数之和等于5', () => {
        expect(sum([1, 2, 3, 4, 5, 6], 5)).toEqual([[1, 4], [2, 3]]);
    })
});
