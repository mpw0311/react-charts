import { PureComponent } from 'react';
import { connect } from 'dva';
import { Area } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        return (
            <PageHeader
                title={'Area'}
                routes={['Echarts','Area']}
            >
                <Panel type={'A'}>
                    <Area data={this.props['area_data']} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;