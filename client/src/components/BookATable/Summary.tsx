import { Button, Card, Col, Row } from 'antd';
import React, { ContextType } from 'react';
import { BookingContext } from '../../contexts/BookingContext';

interface Props {
    next(): void;
    prev(): void;
}

class Summary extends React.Component<Props> {
    context!: ContextType<typeof BookingContext>
    static contextType = BookingContext;

    onFinish = () => {
        console.log('Bokat!')
        this.props.next();
    }

    onBackClick = () => {
        this.props.prev();
    }

    render() {
        return(
            <BookingContext.Consumer>
                {({ dateTimeInfo, contactInfo }) => {
                    return (
                        <Row>
                            <Col span={24}>
                                <Card title="Sammanfattning" style={{ width: 500 }}>
                                    <p>Number of guests: {dateTimeInfo?.numberOfPeople}</p>
                                    <p>Date: {dateTimeInfo?.date}</p>
                                    <p>Time: {dateTimeInfo?.time}</p>
                                    <p>Your information: </p>
                                    <p>Name: {contactInfo?.name} </p>
                                    <p>E-mail: {contactInfo?.email}  </p>
                                    <p>Phone: {contactInfo?.phone} </p>
                                    <p>Message: {contactInfo?.message} </p>
                                </Card>
                                <Button type="primary" onClick={this.onFinish} style={{ marginTop: '2rem', marginBottom: '10rem', marginRight: '2rem' }}>Book now!</Button>
                                <Button onClick={this.onBackClick} style={{ marginTop: '2rem', marginBottom: '10rem' }}>Go back</Button>
                            </Col>
                        </Row>
                    );
                }}
            </BookingContext.Consumer>
        )
    }
}

export default Summary;