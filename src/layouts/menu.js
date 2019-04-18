import { PureComponent } from 'react';
import { Link } from 'umi';
import { Menu } from 'antd';
import menuList from './menus.config';

export default class extends PureComponent {
    render() {
        return (
            <Menu
                style={{ width: 200 }}
                defaultSelectedKeys={['1']}
                mode="inline"
                theme='dark'
            >
                {
                    menuList.map(item => {
                        const { path, name } = item;
                        return (<Menu.Item key={path}>
                            <Link to={path}>{name}</Link>
                        </Menu.Item>);
                    })
                }
            </Menu>
        );
    }
}