import { PureComponent } from 'react';
import { connect } from 'dva';
import { Line } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        
        return (
            <PageHeader
                title={'Line'}
                routes={['Echarts','Line']}
            >
                <Panel type={'A'}>
                    <Line data={this.props['line_data']} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;