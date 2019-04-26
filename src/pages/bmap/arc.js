import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Arc from './components/arc';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'Arc'}
                pathtitles={['Bmap', 'Arc']}
                description={description}
            >
                <Arc />
            </PageHeader>
        );
    }
}
export default Chart;