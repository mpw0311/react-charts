import { Layout } from 'antd';
import Menu from './menu';
const {
  Sider, Content,
} = Layout;
function BasicLayout(props) {

  return (
    <Layout>
      <Layout style={{ height: '100vh' }}>
        <Sider>
          <Menu />
        </Sider>
        <Content >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
