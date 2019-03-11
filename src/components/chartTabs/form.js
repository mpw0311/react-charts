import { Form, Checkbox, Button, Collapse, Select, Input } from 'antd';
import config from './config.json';
const Panel = Collapse.Panel;
function MyForm(props) {
    const { form, onChange } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                onChange && onChange(values);
            }
        });
    };
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
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
                    {getFieldDecorator(name, {
                        initialValue: value,
                    })(
                        <Checkbox > {name} </Checkbox>
                    )}
                </Form.Item>;
            case "Input":
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(name, {
                        initialValue: value,
                        rules: [{ message: 'Please input your username!' }],
                    })(
                        <Input placeholder={name} />
                    )}
                </Form.Item>;
            case "Select":
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(name, {
                        initialValue: value[0],
                    })(
                        <Select>
                            {value.map((item, i) => <Select.Option key={i}>{item}</Select.Option>)}
                        </Select>
                    )}
                </Form.Item>;
            default:
                return null;
        }
    };
    const pannelList = () => {
        const list = [];
        for (const name in config) {
            list.push(
                (<Panel header={name} key={name}>
                    {
                        config[name].map((item, i) => {
                            return getFormItem(item, i);
                        })
                    }
                </Panel>)
            );
        }
        return list;
    };
    return (
        <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <Collapse accordion>
                {pannelList()}
                <Panel header="Legend" key="1">
                    <Form.Item
                        {...formItemLayout}
                    >
                        {getFieldDecorator('showLegend', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox > {'showLegend'} </Checkbox>
                        )}
                    </Form.Item>
                </Panel>
                <Panel header="Toolbox" key="2">
                    <Form.Item
                        {...formItemLayout}
                    >
                        {getFieldDecorator('showToolbox', {
                            initialValue: false,
                        })(
                            <Checkbox > {'showToolbox'} </Checkbox>
                        )}
                    </Form.Item>
                </Panel>
                <Form.Item
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <Button type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
            </Collapse>
        </Form>
    );
}
export default Form.create()(MyForm);