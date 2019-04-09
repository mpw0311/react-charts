//数组去重，利用数组的 indexOf 属性
export const unique_0 = (origin) => {
    const result = [];
    for (const v of origin) {
        if (result.indexOf(v) === -1) {
            result.push(v);
        }
    }
    return result;
};
// 数组的 filter 属性
export const unique_1 = (origin) => {
    return origin.filter((item, index, array) => array.indexOf(item) === index);
};
//es6 set
export const unique_2 = (origin) => {
    return [...new Set(origin)];
};
//Object key value
export const unique_3 = (origin) => {
    const result = {};
    for (let value of origin) {
        result[value] = value;
    }
    return Object.values(result);
};