import React, { ContextType, CSSProperties } from 'react';
import { Button, Form, Input } from 'antd';
import { BookingContext } from '../../contexts/BookingContext';

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

export interface ContactInfo {
    name: string;
    email: string;
    phone: string;
    message: string;
}
interface Props {
    next(): void;
}

class ContactInformation extends React.Component<Props> {
    context!: ContextType<typeof BookingContext>
    static contextType = BookingContext;

    onFinish = (values: any) => {
        const contactInfo: ContactInfo= {
            name: values.user.name,
            email: values.user.email,
            phone: values.user.phone,
            message: values.user.message,

        };
        const { updateContactInfo } = this.context;
        updateContactInfo(contactInfo);
        this.props.next();
    };

    render() {
        return (
            <div style={containerStyle}>
                <Form 
                    {...layout} 
                    name="nest-messages" 
                    onFinish={this.onFinish} 
                    validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} label="Namn" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'phone']} label="Telefon" rules={[{ min: 10, max: 11, required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'message']} label="Meddelande">
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                        <Button type="primary" htmlType="submit" style={{ marginBottom: '8rem' }}>
                            Next
                        </Button>
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