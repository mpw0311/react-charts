import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import ThickRay from './components/thick-ray';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'ThickRay'}
                pathtitles={['Bmap', 'ThickRay']}
                description={description}
            >
                <ThickRay />
            </PageHeader>
        );
    }
}
export default Chart;