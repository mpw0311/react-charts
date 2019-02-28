/**
 * author：M
 * E-mail: mpw0311@163.com
 */
export default (props) => {
    const { yAxis, YName, YUnit, showY2, Y2Name, Y2Unit, showY2SplitLine } = props;
    if (showY2) {
        return [
            {
                name: YName,
                axisLabel: {
                    formatter: `{value}${YUnit}`
                },
            },
            {
                name: Y2Name,
                axisLabel: {
                    formatter: `{value}${Y2Unit}`
                },
                splitLine: {
                    show: showY2SplitLine,
                    lineStyle: {
                        type: 'dashed',
                        color: '#ddd'
                    }
                }
            }

        ];
    } else {
        return {
            name: YName,
            axisLabel: {
                formatter: `{value}${YUnit}`
            },
            ...yAxis,
        };
    }
}