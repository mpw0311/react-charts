import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Polygon from './components/Polygon';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'Polygon'}
                pathtitles={['Bmap', 'Polygon']}
                description={description}
            >
                <Polygon />
            </PageHeader>
        );
    }
}
export default Chart;