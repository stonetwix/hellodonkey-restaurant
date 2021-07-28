import { Button, Card, Col, Row } from 'antd';
import React from 'react';


class Summary extends React.Component {

    render() {
        return(
            <Row>
                <Col span={24}>
                    <Card title="Sammanfattning" style={{ width: 500 }}>
                        <p>Antal: </p>
                        <p>Datum: </p>
                        <p>Tid: </p>
                        <p>Dina uppgifter: </p>
                    </Card>
                    <Button type="primary" style={{ marginTop: '2rem' }}>Boka nu!</Button>
                </Col>
            </Row>
        )
    }
}

export default Summary;