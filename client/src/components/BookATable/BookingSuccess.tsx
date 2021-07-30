import { Result } from 'antd';
import React from 'react';

class BookingSuccess extends React.Component {

    render() {
        return (
            <Result
                status="success"
                title="Thank you for your reservation and welcome to Hello Donkey!"
                subTitle="Your reservation number is: 738456837585328"
                style={{ marginBottom: '10rem' }}
            />
        )
    }
}

export default BookingSuccess;