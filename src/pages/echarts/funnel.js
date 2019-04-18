import { PureComponent } from 'react';
import { connect } from 'dva';
import { Funnel } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {

        return (
            <PageHeader
                title={'Funnel'}
                routes={['Echarts', 'Funnel']}
            >
                <Panel type={'B'}>
                    <Funnel data={this.props['funnel_data']} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;