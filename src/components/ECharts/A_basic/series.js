/**
 * author：mpw
 * E-mail: mpw0311@163.com
 */
import getType from './type';
export default (props) => {
    const { series, data: { rows }, type, seriesLayoutBy } = props;
    const setting = type.toLowerCase() === 'area' ? {
        stack: '总量',
        areaStyle: {},
    } : {};
    const _series = rows.map((item, i) => {
        if (i === 0) {
            return undefined;
        } else {
            return {
                type: getType(type),
                ...setting,
                seriesLayoutBy
            };
        }
    });
    return series || _series.filter(item => item !== undefined);
}