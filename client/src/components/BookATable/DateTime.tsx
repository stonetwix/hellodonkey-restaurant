import React from 'react';
import {
    Form,
    DatePicker,
    InputNumber,
    TimePicker,
  } from 'antd';
  
import moment from 'moment';

function onChangeTime(time: any, timeString: any) {
    console.log(time, timeString);
}

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

class DateTime extends React.Component {

    render() {
        return (
            <>
                <Form
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 20 }}
                    layout="inline"
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'number']} label="Antal" rules={[{ required: true }]}>
                        <InputNumber defaultValue={2}/>
                    </Form.Item>
                    <Form.Item name={['user', 'date']} label="Datum" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>            
                    <Form.Item name={['user', 'time']} label="Tid" rules={[{ required: true }]}>
                        <TimePicker onChange={onChangeTime} format= 'HH:mm' defaultValue={moment('18:00', 'HH:mm')} minuteStep={30} showNow={false}/>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default DateTime;