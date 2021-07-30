import React, { ContextType } from 'react';
import {
    Form,
    DatePicker,
    InputNumber,
    TimePicker,
    Button,
  } from 'antd';
  
import moment from 'moment';
import { BookingContext } from '../../contexts/BookingContext';

export interface DateTimeInfo {
    numberOfPeople: number;
    date: string;
    time: string;
}
interface Props {
    next(): void;
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

class DateTime extends React.Component<Props> {
    context!: ContextType<typeof BookingContext>
    static contextType = BookingContext;

    onFinish = (values: any) => {
        const userDateTime: DateTimeInfo = {
            numberOfPeople: values.user.number,
            date: values.user.date.format('YYYY-MM-DD'),
            time: values.user.time.format('HH:mm'),
        };
        const { updateDateTimeInfo } = this.context;
        updateDateTimeInfo(userDateTime);
        this.props.next();
    };

    render() {
        return (
            <BookingContext.Consumer>
                {({ dateTimeInfo }) => {
                    return(
                        <>
                            <Form
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 20 }}
                                layout="inline"
                                validateMessages={validateMessages}
                                onFinish={this.onFinish}
                                style={{ marginBottom: '20rem' }}
                                initialValues={{
                                    user: {
                                    number: dateTimeInfo?.numberOfPeople,
                                    // date: moment(),
                                    // time: moment().minutes(Math.round(moment().minute() / 30) * 30),
                                    }
                                }}
                            >
                                <Form.Item name={['user', 'number']} label="Guests" rules={[{ required: true }]}>
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item name={['user', 'date']} label="Date" rules={[{ required: true }]}>
                                    <DatePicker disabledDate={(currentDate) => currentDate < moment()}/>
                                </Form.Item>            
                                <Form.Item name={['user', 'time']} label="Time" rules={[{ required: true }]}>
                                    <TimePicker format='HH:mm' minuteStep={30} showNow={false} disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23]}/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Next
                                    </Button>
                                </Form.Item>
                            </Form>
                        </>
                    );
                }}
            </BookingContext.Consumer>
        )
    }
}

export default DateTime;