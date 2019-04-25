import { PureComponent } from 'react';
import { connect } from 'dva';
import { Candlestick } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, candlestick_data } = this.props;
        return (
            <PageHeader
                title={'k线图'}
                pathtitles={['Echarts', 'candlestick']}
                description={description}
            >
                <Panel type={['basic','title','grid','toolbox']}>
                    <Candlestick data={candlestick_data} height={400} seriesLayoutBy={'column'}/>
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;