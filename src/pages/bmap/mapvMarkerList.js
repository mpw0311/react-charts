import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import MapvMarkerList from './components/mapv-marker-list';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'MapvMarkerList'}
                pathtitles={['Bmap', 'MapvMarkerList']}
                description={description}
            >
                <MapvMarkerList />
            </PageHeader>
        );
    }
}
export default Chart;