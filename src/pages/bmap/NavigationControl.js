import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import NavigationControl from './components/NavigationControl';

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
                <NavigationControl />
            </PageHeader>
        );
    }
}
export default Chart;