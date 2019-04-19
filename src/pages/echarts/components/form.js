import { Form, Checkbox, Collapse, Select, Input } from 'antd';
import config from './config.json';
const Panel = Collapse.Panel;
function MyForm(props) {
    const { onChange, type } = props;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };
    const handleChange = (e) => {
        const t = e.target;
        const res = {
            [t.name]: t.value
        };
        onChange && onChange(res);
    };
    const checkboxChange = (e) => {
        const t = e.target;
        const res = {
            [t.name]: t.checked
        };
        onChange && onChange(res);
    };
    const selectChange = (value, name) => {
        const res = {
            [name]: value
        };
        onChange && onChange(res);
    };
    const getFormItem = (item, i) => {
        const { name, component, value, des } = item;
        switch (component) {
            case 'Checkbox':
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >
                    <Checkbox name={name} defaultChecked={value} onChange={checkboxChange}> {name} </Checkbox>
                </Form.Item>;
            case "Input":
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >

                    <Input name={name} placeholder={name} defaultValue={value} onChange={handleChange} />
                </Form.Item>;
            case "Select":
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >

                    <Select defaultValue={value[0]} onChange={(value) => { selectChange(value, name); }}>
                        {
                            value.map(
                                (item, i) => <Select.Option key={i} value={item}>{item}</Select.Option>
                            )
                        }
                    </Select>
                </Form.Item>;
            default:
                return null;
        }
    };
    const type_dict = {
        "A": [
            'basic',
            'title',
            'legend',
            'grid',
            'tooltip',
            'toolbox',
            'xAxis',
            'yAxis',
            'series'
        ],
        "B": [
            'basic',
            'title',
            'legend',
            'tooltip',
            'toolbox',
            'series'
        ]
    };
    return (
        <Form style={{ textAlign: 'left' }}>
            <Collapse accordion>
                {
                    type_dict[type || 'A'].map(name => {
                        return (
                            <Panel header={name} key={name}>
                                {
                                    config[name].map((item, i) => {
                                        return getFormItem(item, i);
                                    })
                                }
                            </Panel>
                        );
                    })
                }
            </Collapse>
        </Form>
    );
}
export default MyForm;