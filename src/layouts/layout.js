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
    static defaultProps = {
        isMobile: false
    };
    componentDidMount() {
        const { isMobile } = this.props;
        const { collapsed } = this.state;
        if (isMobile !== collapsed) {
            this.setState({ collapsed: isMobile });
        }
    }
    componentWillReceiveProps(nextProps) {
        const { isMobile } = nextProps;
        if (isMobile !== this.props.isMobile && isMobile !== this.state.collapsed) {
            this.setState({ collapsed: isMobile });
        }

    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        const { collapsed, } = this.state;
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
