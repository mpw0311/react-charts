import { PureComponent, Fragment } from 'react';
import { PageHeader, Card } from 'antd';
export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {
        const { title, routes, children } = this.props;
        return (
            <Fragment>
                <PageHeader
                    title={title}
                    breadcrumb={{ routes }}
                />
                <Card style={{ marginTop: 20 }}>
                    {children}
                </Card>
            </Fragment>
        );
    }
};