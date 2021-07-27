import React from 'react';
import {
    Form,
    Button,
    DatePicker,
    InputNumber,
    TimePicker,
  } from 'antd';
  
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';

function onChange(time: any, timeString: any) {
    console.log(time, timeString);
}
  

class DateTime extends React.Component {

    render() {
        return (
            <>
                <Form
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 20 }}
                    layout="inline"
                >
                    <Form.Item label="Antal">
                        <InputNumber defaultValue={2}/>
                    </Form.Item>
                    <Form.Item label="Datum">
                        <DatePicker />
                    </Form.Item>            
                    <Form.Item label="Tid">
                        <TimePicker onChange={onChange} format= 'HH:mm' defaultValue={moment('18:00', 'HH:mm')} minuteStep={30} showNow={false}/>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default DateTime;