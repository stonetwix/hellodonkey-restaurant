import React, { CSSProperties } from 'react';
import { Steps, Row, Col } from 'antd';
import DateTime from './DateTime';
import ContactInformation from './ContactInformation';
import Summary from './Summary';
import BookingSuccess from './BookingSuccess';


const BookATable = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 2);
    };

    const { Step } = Steps;

    const steps = [
        {
            title: 'Guests/date',
            content: <DateTime next={next}/>,
        },
        {
            title: 'Your information',
            content: <ContactInformation next={next}/>,
        },
        {
            title: 'Summary',
            content: <Summary next={next} prev={prev}/>,
        },
        {
            title: 'Done!',
            content: <BookingSuccess />,
        },
    ];

    return (
        <div style={{ height: '100vh' }}>
            <Row style={headlineStyle}>
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
        </div>
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

const headlineStyle: CSSProperties = {
    marginTop: '6.5rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0',
    background: '#eee',
}

const headlineColumnStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3.5rem',
    marginBottom: '2rem',
}