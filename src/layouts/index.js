import { Layout } from 'antd';
import Menu from './menu';
import styles from './index.less';
import StartedModal from './startedModal';
import logo from '../assets/logo.png';
const {
  Header, Sider, Content,
} = Layout;
function BasicLayout(props) {
  const header = <Header className={styles.header}>
    <span className={styles.logo}>
      <img src={logo} alt="可视化" />
    </span>
    <h2 className={styles.title}>数据可视化</h2>
  </Header>;
  return (
    <Layout>
      <Layout style={{ height: '100vh' }}>
        <Sider style={{ height: '100vh' }}>
          {header}
          <Menu {...props} />
        </Sider>
        <Content className={styles.content}>
          {props.children}
          <StartedModal />
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
