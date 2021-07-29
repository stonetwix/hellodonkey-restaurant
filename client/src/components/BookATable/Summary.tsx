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
                                    <p>Antal personer: {dateTimeInfo?.numberOfPeople}</p>
                                    <p>Datum: {dateTimeInfo?.date}</p>
                                    <p>Tid: {dateTimeInfo?.time}</p>
                                    <p>Dina uppgifter: </p>
                                    <p>Namn: {contactInfo?.name} </p>
                                    <p>E-mail: {contactInfo?.email}  </p>
                                    <p>Telefon: {contactInfo?.phone} </p>
                                    <p>Meddelande: {contactInfo?.message} </p>
                                </Card>
                                <Button type="primary" onClick={this.onFinish} style={{ marginTop: '2rem', marginBottom: '10rem', marginRight: '2rem' }}>Boka nu!</Button>
                                <Button onClick={this.onBackClick} style={{ marginTop: '2rem', marginBottom: '10rem' }}>Tillbaka</Button>
                            </Col>
                        </Row>
                    );
                }}
            </BookingContext.Consumer>
        )
    }
}

export default Summary;