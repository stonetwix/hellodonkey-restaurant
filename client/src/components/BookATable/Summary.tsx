import { Button, Card, Col, Row } from 'antd';
import React, { ContextType } from 'react';
import { BookingContext } from '../../contexts/BookingContext';

class Summary extends React.Component {
    context!: ContextType<typeof BookingContext>
    static contextType = BookingContext;

    render() {
        return(
            <BookingContext.Consumer>
                {({ dateTimeInfo, contactInfo }) => {
                    return (
                        <Row>
                            <Col span={24}>
                                <Card title="Sammanfattning" style={{ width: 500 }}>
                                    <p>Antal personer: {dateTimeInfo?.numberOfPeople}</p>
                                    <p>Datum: {dateTimeInfo?.date}</p>
                                    <p>Tid: {dateTimeInfo?.time}</p>
                                    <p>Dina uppgifter: </p>
                                    <p>Namn: {contactInfo?.name} </p>
                                    <p>E-mail: {contactInfo?.email}  </p>
                                    <p>Telefon: {contactInfo?.phone} </p>
                                    <p>Meddelande: {contactInfo?.message} </p>
                                </Card>
                                <Button type="primary" style={{ marginTop: '2rem' }}>Boka nu!</Button>
                            </Col>
                        </Row>
                    );
                }}
            </BookingContext.Consumer>
        )
    }
}

export default Summary;