import { PureComponent, Fragment } from 'react';
import { PageHeader, Card } from 'antd';
import ChartView from '@components/ChartView';
export default class echarts extends PureComponent {
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
            <Fragment>
                <PageHeader
                    title="Echarts"
                    breadcrumb={{ routes }}
                />
                <Card style={{ marginTop: 20 }}>
                    <ChartView />
                </Card>
            </Fragment>
        );
    }
} 