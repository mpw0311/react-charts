import { PureComponent } from 'react';
import { Tabs } from 'antd';
import fetch from 'dva/fetch';
const TabPane = Tabs.TabPane;
export default class es6 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {
        const arr2 = [1, 2, [3, 4]];
        const arr3 = [1, 2, [3, 4, [5, 6]]];
        const { data } = this.state;
        const test = async () => {
            if (this.state.data === undefined) {
                const data = await fetch('https://randomuser.me/api/').then(res => res.json());
                console.log(data);
                this.setState({
                    data
                });
            }
        };
        test();
        return (
            <Tabs defaultActiveKey="1" tabPosition="left" >
                <TabPane tab="flat" key="1">
                    {JSON.stringify(arr2.flat())}
                    <br />
                    {JSON.stringify(arr3.flat(2))}
                    <br />
                    {JSON.stringify(data, null, 4)}
                </TabPane>
            </Tabs>
        );
    }
} 