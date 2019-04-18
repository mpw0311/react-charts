import { PureComponent } from 'react';
import { connect } from 'dva';
import { Sankey } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {

        return (
            <PageHeader
                title={'Sankey'}
                routes={['Echarts', 'Sankey']}
            >
                <Panel type={'B'}>
                    <Sankey data={this.props['sankey_data']} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;