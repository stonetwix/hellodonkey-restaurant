import React, { CSSProperties } from 'react';
import { Steps, Button, message, Row, Col } from 'antd';
import DateTime from './DateTime';
import ContactInformation from './ContactInformation';
import Summary from './Summary';
import BookingSuccess from './BookingSuccess';

export interface BookingInfo {
    numberOfGuests: number;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}

const { Step } = Steps;

const steps = [
    {
        title: 'Antal/datum',
        content: <DateTime />,
    },
    {
        title: 'Din information',
        content: <ContactInformation />,
    },
    {
        title: 'Summering',
        content: <Summary />,
    },
    {
        title: 'Klart!',
        content: <BookingSuccess />,
    },
];

const BookATable = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Row style={headlineContainerStyle}>
                <Col span={24} style={headlineColumnStyle}>
                    <h1>Book a table</h1>
                </Col>    
            </Row>
            <Steps current={current} style={stepsStyle}>
                {steps.map(item => (
                <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content" style={contentStyle}>{steps[current].content}</div>
            <div className="steps-action" style={buttonsStyle}>
                {current < steps.length - 1 && (
                <Button type="primary" style={{ margin: '3rem 1rem' }} onClick={() => next()}>
                    Next
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="primary" style={{ margin: '3rem 1rem' }} onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
                )}
                {current > 0 && (
                <Button style={{ margin: '3rem 1rem' }} onClick={() => prev()}>
                    Previous
                </Button>
                )}
            </div>
        </>
    );
};

export default BookATable;

const stepsStyle: CSSProperties = {
    marginTop: '5rem',
    width: '80%',
    marginLeft: '10%',
}

const contentStyle: CSSProperties = {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const buttonsStyle: CSSProperties = {
    marginTop: '5rem',
    marginBottom: '10rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const headlineContainerStyle: CSSProperties = {
    marginTop: '12rem',
}

const headlineColumnStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
}