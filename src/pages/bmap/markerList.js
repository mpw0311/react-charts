import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import MarkerList from './components/MarkerList';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'MarkerList'}
                pathtitles={['Bmap', 'MarkerList']}
                description={description}
            >
                <MarkerList />
            </PageHeader>
        );
    }
}
export default Chart;