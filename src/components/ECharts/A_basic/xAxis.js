/**
 * author：mpw
 * E-mail: mpw0311@163.com
 */
export default (props) => {
    const { xAxis } = props;

    return {
        type: 'category',
        ...xAxis
    };
}