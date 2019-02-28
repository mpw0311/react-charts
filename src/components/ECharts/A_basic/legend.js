/**
 * author：mpw
 * E-mail: mpw0311@163.com
 */
export default (props) => {
    const { legend, showLegend } = props;

    return {
        show: showLegend,
        ...legend
    };
}