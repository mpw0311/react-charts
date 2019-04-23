import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import TrafficLayer from './components/TrafficLayer';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'TrafficLayer'}
                pathtitles={['Bmap', 'TrafficLayer']}
                description={description}
            >
                <TrafficLayer />
            </PageHeader>
        );
    }
}
export default Chart;