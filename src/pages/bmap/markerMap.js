import { PureComponent } from 'react';
import { connect } from 'dva';
import MarkerMap from './components/Marker';
import PageHeader from '@components/PageHeader';
@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'MarkerMap'}
                pathtitles={['Bmap', 'MarkerMap']}
                description={description}
            >
                <MarkerMap />
            </PageHeader>
        );
    }
}
export default Chart;