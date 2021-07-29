import React, { CSSProperties } from 'react';
import { Steps, Button, message, Row, Col } from 'antd';
import DateTime, { DateTimeInfo } from './DateTime';
import ContactInformation from './ContactInformation';
import Summary from './Summary';
import BookingSuccess from './BookingSuccess';


const BookATable = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const { Step } = Steps;

    const steps = [
        {
            title: 'Antal/datum',
            content: <DateTime next={next}/>,
        },
        {
            title: 'Din information',
            content: <ContactInformation next={next}/>,
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

const headlineContainerStyle: CSSProperties = {
    marginTop: '12rem',
}

const headlineColumnStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
}