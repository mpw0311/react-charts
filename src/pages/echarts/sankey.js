import { PureComponent } from 'react';
import { connect } from 'dva';
import { Sankey } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, sankey_data } = this.props;
        return (
            <PageHeader
                title={'桑基图'}
                routes={['Echarts', 'Sankey']}
                description={description}
            >
                <Panel type={'B'}>
                    <Sankey data={sankey_data} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;