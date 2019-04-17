import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const {
  Sider, Content,
} = Layout;
function BasicLayout(props) {
  const menuList = (
    <Menu
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      theme='dark'
    >
      <Menu.Item key="1">
        <Link to='/echarts'>Echarts</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/bmap'>百度地图</Link>
      </Menu.Item>
      {/* <Menu.Item key="es6">
        <Link to='/es6'>es6</Link>
      </Menu.Item> */}
    </Menu>
  );
  return (
    <Layout>
      <Layout style={{ height: '100vh' }}>
        <Sider>
          {menuList}
        </Sider>
        <Content >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
