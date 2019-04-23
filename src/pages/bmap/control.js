import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Control from './components/Control';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'Control'}
                pathtitles={['Bmap', 'Control']}
                description={description}
            >
                <Control />
            </PageHeader>
        );
    }
}
export default Chart;