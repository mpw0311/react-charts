import { PureComponent } from 'react';
import { connect } from 'dva';
import { ChinaMap } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, chinaMap_data } = this.props;
        return (
            <PageHeader
                title={'地图'}
                pathtitles={['Echarts', '地图']}
                description={description}
            >
                <ChinaMap
                    title={'地域分析'}
                    seriesName={'地域分析'}
                    data={chinaMap_data}
                    style={{ height: 700 }}
                    target={'email'}
                />
            </PageHeader>
        );
    }
}
export default Chart;