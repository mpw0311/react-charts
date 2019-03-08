import { Form, Checkbox, Button } from 'antd';
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
    return (
        <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
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
            <Form.Item
                {...formItemLayout}
            >
                {getFieldDecorator('showToolbox', {
                    initialValue: false,
                })(
                    <Checkbox > {'showToolbox'} </Checkbox>
                )}
            </Form.Item>
            <Form.Item
                wrapperCol={{ span: 12, offset: 5 }}
            >
                <Button type="primary" htmlType="submit"> Submit </Button>
            </Form.Item>
        </Form>
    );
}
export default Form.create()(MyForm);