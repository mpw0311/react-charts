import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Boundary from './components/Boundary';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'Boundary'}
                pathtitles={['Bmap', 'Boundary']}
                description={description}
            >
                <Boundary />
            </PageHeader>
        );
    }
}
export default Chart;