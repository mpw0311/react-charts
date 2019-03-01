import { Form, Checkbox, Input, Select } from 'antd';
function MyForm(props) {
    const { form, config, handleSubmit = () => { } } = props;
    const { getFieldDecorator } = form;
    const list = config.map((item, i) => {
        const { prop, value, type, component, des } = item;
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
        switch (component) {
            case 'Checkbox':
                return <Form.Item
                    {...formItemLayout}
                    label={prop}
                >
                    {getFieldDecorator(prop, {
                        initialValue: value,
                    })(
                        <Checkbox > {prop} </Checkbox>
                    )}
                </Form.Item>;
            case "Input":
                return <Form.Item
                    {...formItemLayout}
                    label={prop}
                >
                    {getFieldDecorator(prop, {
                        initialValue: value,
                        rules: [{ message: 'Please input your username!' }],
                    })(
                        <Input placeholder={prop} value={Input} />
                    )}
                </Form.Item>;
            case "Select":
                return <Form.Item
                    {...formItemLayout}
                    label={prop}
                >
                    {getFieldDecorator(prop, {
                        initialValue: value[0],
                    })(
                        <Select>
                            {value.map((item, i) => <Select.Option value={item} key={i}>{item}</Select.Option>)}
                        </Select>
                    )}
                </Form.Item>;
            default:
                return null;
        }
    });
    return (
        <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            {list}
        </Form>
    );
}
export default Form.create()(MyForm);