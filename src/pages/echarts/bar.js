import { PureComponent } from 'react';
import { connect } from 'dva';
import { Bar } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        
        return (
            <PageHeader
                title={'bar'}
                routes={['Echarts','Bar']}
            >
                <Panel type={'A'}>
                    <Bar data={this.props['bar_data']} showLabel />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;