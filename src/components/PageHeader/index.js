import { PureComponent, Fragment } from 'react';
import { PageHeader, Card, Icon } from 'antd';
export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {
        const { title, routes, description, children } = this.props;
        const list = routes.map(item => ({ breadcrumbName: item }));
        return (
            <Fragment>
                <PageHeader
                    title={title}
                    breadcrumb={{ routes: list }}
                >
                    {description ? <p><Icon type="notification" /> {description}</p> : null}
                </PageHeader>
                <Card style={{ marginTop: 20 }}>
                    {children}
                </Card>
            </Fragment>
        );
    }
};