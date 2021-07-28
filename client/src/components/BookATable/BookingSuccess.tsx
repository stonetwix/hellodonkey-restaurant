import { Result, Button } from 'antd';
import React from 'react';

class BookingSuccess extends React.Component {

    render() {
        return (
            <Result
                status="success"
                title="Tack för din bokning och välkommen till Hello Donkey!"
                subTitle="Ditt bokningsnummer är: 738456837585328"
                // extra={[
                // <Button type="primary" key="console">
                //     Go Console
                // </Button>,
                // <Button key="buy">Buy Again</Button>,
                // ]}
            />
        )
    }
}

export default BookingSuccess;