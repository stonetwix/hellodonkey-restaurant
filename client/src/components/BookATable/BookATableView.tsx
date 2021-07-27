import React, { CSSProperties } from 'react';
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Third',
        content: 'Third-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
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
    marginTop: '10rem',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}