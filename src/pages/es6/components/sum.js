//找出数组中两数相加等于total的项
export const sum = (origin, total) => {
    const result = [];
    for (let i = 0, len = origin.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (origin[i] + origin[j] === total) {
                result.push([origin[i], origin[j]]);
            }
        }
    }
    return result;
};