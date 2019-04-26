import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Bmap from './components/Map';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'BasicBmap'}
                pathtitles={['Bmap', 'basic']}
                description={description}
            >
                <Bmap />
            </PageHeader>
        );
    }
}
export default Chart;