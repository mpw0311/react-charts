import { PureComponent } from 'react';
import { Menu } from 'antd';
// const MenuItem = Menu.Item;

export default class PageMenu extends PureComponent {
    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
            >
                    
            </Menu>
        );
    }
}