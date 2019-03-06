/**
 * @author：M
 * @E-mail: mpw0311@163.com
 * @version: 1.0.0
 * @description： 
 */
import { PureComponent } from 'react';
import Chart from '../../B_basic';
class Index extends PureComponent {
    static defaultProps = {
        data: {},
        dataType: 'special',
        type: 'sankey',
        loading: false,
        tooltip: {
            // trigger: 'item',
            // triggerOn: 'mousemove',
        }
    }
    render() {
        const { data: { nodes, links } } = this.props;
        const series = [
            {
                type: 'sankey',
                layoutIterations: 64,
                orient: 'horizontal',
                layout: 'none',
                data: nodes,
                links: links,
                // nodeWidth: 40,
                // nodeHeight: 100,
                focusNodeAdjacency: 'allEdges',
                nodeAlign: 'left',
                draggable: true,
                right: 200,
                left: 20,
                label: {
                    // show: false
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ];
        return (
            <Chart
                {...this.props}
                series={series}
            />
        );
    }
}
export default Index;