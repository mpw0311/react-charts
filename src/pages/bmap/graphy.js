import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import Graphy from './components/graphy';

@connect(({ bmap }) => bmap)
class Chart extends PureComponent {
    render() {
        const { description } = this.props;
        return (
            <PageHeader
                title={'Graphy'}
                pathtitles={['Bmap', 'Graphy']}
                description={description}
            >
                <Graphy />
            </PageHeader>
        );
    }
}
export default Chart;