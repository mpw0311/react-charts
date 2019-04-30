import { PureComponent } from 'react';
import { Layout } from 'antd';
import Menu from './menu';
import styles from './index.less';
import StartedModal from './startedModal';
import Logo from './logo';
const {
    Sider, Content,
} = Layout;

class BasicLayout extends PureComponent {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <Layout style={{ height: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={this.onCollapse}
                        style={{ height: '100vh' }}
                    >
                        <Logo collapsed={collapsed} />
                        <Menu {...this.props} inlineCollapsed={collapsed} />
                    </Sider>
                    <Content className={styles.content}>
                        {this.props.children}
                        <StartedModal />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;
