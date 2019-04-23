import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import DrivingRoute from './components/driving-route';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'DrivingRoute'}
                pathtitles={['Bmap', 'DrivingRoute']}
                description={description}
            >
                <DrivingRoute />
            </PageHeader>
        );
    }
}
export default Chart;