import React, { CSSProperties } from 'react';
import { Card, Col, Row } from 'antd';


class LeftOverCardGrid extends React.Component {

    render() {
        return (
            <div className="site-card-wrapper" style={containerStyle}>
                <Row gutter={20} style={{ marginBottom: '2rem' }}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={20} style={{ marginBottom: '2rem' }}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={20} style={{  marginBottom: '2rem'}}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={20} style={{ marginBottom: '2rem'}}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LeftOverCardGrid;

const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: '10rem auto'
}