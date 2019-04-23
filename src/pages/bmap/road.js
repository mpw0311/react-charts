import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Road from './components/Road';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'Road'}
                pathtitles={['Bmap', 'Road']}
                description={description}
            >
                <Road />
            </PageHeader>
        );
    }
}
export default Chart;