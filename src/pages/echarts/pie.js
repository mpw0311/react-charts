import { PureComponent } from 'react';
import { connect } from 'dva';
import { Pie } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {

        return (
            <PageHeader
                title={'Pie'}
                routes={['Echarts', 'Pie']}
            >
                <Panel type={'B'}>
                    <Pie data={this.props['pie_data']} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;