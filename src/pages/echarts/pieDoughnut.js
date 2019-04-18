import { PureComponent } from 'react';
import { connect } from 'dva';
import { PieDoughnut } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {

        return (
            <PageHeader
                title={'PieDoughnut'}
                routes={['Echarts', 'PieDoughnut']}
            >
                <Panel type={'B'}>
                    <PieDoughnut data={this.props['pieDoughnut_data']} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;