import { PureComponent } from 'react';
import { connect } from 'dva';
import { YBar } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        return (
            <PageHeader
                title={'YBar'}
                routes={['Echarts','YBar']}
            >
                <Panel type={'A'}>
                <YBar  data={this.props.yBar_data} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;