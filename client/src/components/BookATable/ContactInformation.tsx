import React, { CSSProperties } from 'react';
import { Form, Input } from 'antd';

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 24 },
};
  
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */


class ContactInformation extends React.Component {

    onFinish = (values: any) => {
        console.log(values);
    };

    render() {
        return (
            <div style={containerStyle}>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} label="Namn" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'phone']} label="Telefon" rules={[{ min: 10, max: 11, required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Meddelande">
                        <Input.TextArea rows={4} />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default ContactInformation;

const containerStyle: CSSProperties = {
    width: '50%',
}