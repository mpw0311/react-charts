import { PureComponent } from 'react';
import { Link } from 'umi';
import { Menu } from 'antd';
import Icon from '@components/Icon';
import menuList from './menus.config';
import Context from './context';
import styles from './index.less';
class MenuView extends PureComponent {
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
                return (
                    <Menu.Item key={path}>
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
        const { location: { pathname }, inlineCollapsed } = this.props;
        return (
            <Context.Consumer>
                {
                    ({ theme }) => (<Menu
                        defaultSelectedKeys={[pathname]}
                        mode="inline"
                        theme={theme}
                        className={styles.menu}
                        inlineCollapsed={inlineCollapsed}
                    >
                        {this.renderMenu(menuList)}
                    </Menu>)
                }
            </Context.Consumer>
        );
    }
}
export default MenuView;