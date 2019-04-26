import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import PointLabel from './components/PointLabel';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'PointLabel'}
                pathtitles={['Bmap', 'PointLabel']}
                description={description}
            >
                <PointLabel />
            </PageHeader>
        );
    }
}
export default Chart;