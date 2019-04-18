import { PureComponent } from 'react';
import { connect } from 'dva';
import { Line } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const routes = [
            {
                path: '/',
                breadcrumbName: 'Echarts',
            },
            {
                breadcrumbName: 'Line',
            },
        ];
        return (
            <PageHeader
                title={'Line'}
                routes={routes}
            >
                <Panel type={'A'}>
                    <Line data={this.props['line_data']} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;