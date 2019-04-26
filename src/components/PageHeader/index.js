import { PureComponent, Fragment } from 'react';
import { PageHeader, Card } from 'antd';
import Icon from '@components/Icon';
export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {
        const { title, pathtitles, description, children } = this.props;
        const list = pathtitles.map(item => ({ breadcrumbName: item }));
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