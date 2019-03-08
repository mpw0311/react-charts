import { PureComponent } from 'react';
import { Tabs, Icon, Input, message } from 'antd';
import styles from './tab.less';

const { TabPane } = Tabs;
const { TextArea } = Input;
export default class MyTabs extends PureComponent {
    static defaultProps = {
        rows: 14,
        onBlur: () => { },
    }
    render() {
        const { data, onBlur, rows, ...rest } = this.props;
        const handleBlur = (e) => {
            const { value } = e.target;
            const res = value.replace(/｛/g, "{")
                .replace(/｝/g, "}")
                .replace(/：/g, ":")
                .replace(/，/g, ",")
                .replace(/；/g, ";")
                .replace(/“/g, "\"")
                .replace(/”/g, "\"")
                .replace(/‘/g, "\"")
                .replace(/’/g, "\"");
            let data = {};
            try {
                /*eslint-disable-next-line*/
                data = eval(`(${res})`);
            } catch (err) {
                console.log("err", err);
                message.error('数据格式有误！');
            }
            onBlur(data);
        };
        const tab = (e) => {
            const { keyCode, target } = e;
            const { selectionStart, selectionEnd, value } = target;
            if (keyCode === 9) {
                const postion = selectionStart + 4;
                target.value = `${value.substr(0, selectionStart)}    ${value.substr(selectionEnd)}`;
                target.selectionStart = postion;
                target.selectionEnd = postion;
                e.preventDefault();
            }
        };


        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="bar-chart" />数据</span>} key="1">
                    <TextArea rows={rows} defaultValue={JSON.stringify(data)} onBlur={handleBlur} onKeyDown={tab} className={`${styles.TextArea} scrollbar`} spellCheck="false" {...rest} />
                </TabPane>
                <TabPane tab={<span><Icon type="setting" />option</span>} key="2">
                    <TextArea rows={rows} defaultValue={'{}'} onKeyDown={tab} onBlur={() => { }} className={`${styles.TextArea} scrollbar`} spellCheck="false" disabled {...rest} />
                </TabPane>
            </Tabs>
        );
    }
}