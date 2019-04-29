import { PureComponent } from 'react';
import { Layout } from 'antd';
import Menu from './menu';
import styles from './index.less';
import StartedModal from './startedModal';
import Context from './context';
import logo from '../assets/logo.png';
const {
  Header, Sider, Content,
} = Layout;


class BasicLayout extends PureComponent {
  state = {
    theme: 'dark'
  }
  render() {
    const header = <Header className={styles.header}>
      <span className={styles.logo}>
        <img src={logo} alt="可视化" />
      </span>
      <h2 className={styles.title}>数据可视化</h2>
    </Header>;

    return (
      <Context.Provider value={{ theme: this.state.theme }}>
        <Layout>
          <Layout style={{ height: '100vh' }}>
            <Sider style={{ height: '100vh' }}>
              {header}
              <Menu {...this.props} />
            </Sider>
            <Content className={styles.content}>
              {this.props.children}
              <StartedModal />
            </Content>
          </Layout>
        </Layout>
      </Context.Provider>
    );
  }
}

export default BasicLayout;
