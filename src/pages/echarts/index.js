import { PureComponent } from 'react';
import ChartView from '@components/ChartView';
import PageHeader from '@components/PageHeader';

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {
        const routes = [
            {
                path: '/',
                breadcrumbName: 'Echarts',
            },
            {
                breadcrumbName: 'view',
            },
        ];
        return (
            <PageHeader
                title={'Echarts'}
                routes={routes}
            >
                <ChartView />
            </PageHeader>
        );
    }
}