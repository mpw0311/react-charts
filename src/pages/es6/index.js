import { PureComponent } from 'react';
import { Tabs, Input } from 'antd';
import fetch from 'dva/fetch';
import { unique_3 } from './components/unique';
import { sum } from './components/sum';
import PromiseTest from './components/promise';
const TabPane = Tabs.TabPane;
export default class es6 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    handleChange = (e) => { console.log('change:', e.target,e.target.value,e.target.name); }
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
        const random = Math.random().toString(16).substring(2, 15);
        return (
            <Tabs defaultActiveKey="1" tabPosition="left" >
                <TabPane tab="es6" key="1">
                    {JSON.stringify(arr2.flat())}
                    <br />
                    <br />
                    {JSON.stringify(arr3.flat(2))}
                    <br />
                    <br />
                    {JSON.stringify(data, null, 4)}
                    <br />
                    <br />
                    随机数：{random}
                    <br />
                    <br />
                    {JSON.stringify(unique_3([1, 2, 3, 2, 4, 4]))}
                    <br />
                    {JSON.stringify(sum([1, 2, 3, 4, 5, 6], 5))}
                    <PromiseTest />
                    <Input name={'myInput'} onChange={this.handleChange} />
                </TabPane>
            </Tabs>
        );
    }
} 