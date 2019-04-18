import { PureComponent } from 'react';
import { Link } from 'umi';
import { Menu } from 'antd';
import Icon from '@components/Icon';
import menuList from './menus.config';

export default class extends PureComponent {
    static defaultProps = {
        mode: 'inline'
    }
    renderMenu = (list) => {
        const { mode } = this.props;
        return list.map(item => {
            const { path, name, icon, children } = item;
            if (children) {
                const subMenu = this.renderMenu(children);
                return (
                    <Menu.SubMenu
                        key={name}
                        text={name}
                        title={<span><Icon type={icon} />{mode === 'inline' ? <span>{name}</span> : null}</span>}
                    >
                        {subMenu}
                    </Menu.SubMenu>
                );
            } else {
                return (<Menu.Item key={path}>
                    <Link to={path}>
                        {
                            icon ? <Icon type={icon} /> : ''
                        }
                        <span>{name}</span>

                    </Link>
                </Menu.Item>);
            }
        });
    }
    render() {
        return (
            <Menu
                style={{ width: 200 }}
                defaultSelectedKeys={['1']}
                mode="inline"
                theme='dark'
            >
                {this.renderMenu(menuList)}
                {/* {
                    menuList.map(item => {
                        const { path, name } = item;
                        return (<Menu.Item key={path}>
                            <Link to={path}>{name}</Link>
                        </Menu.Item>);
                    })
                } */}
            </Menu>
        );
    }
}