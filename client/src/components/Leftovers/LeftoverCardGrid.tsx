import React, { CSSProperties } from 'react';
import { Card, Col, Row } from 'antd';
import background from '../../assets/yellow-dotted-bg.png';


class LeftOverCardGrid extends React.Component {

    render() {
        return (
            <>
                <Row style={bgStyle}>
                    <Col style={headlineStyle}>
                        <h1>Buy our leftovers</h1>
                    </Col>
                </Row>
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
            </>
        )
    }
}

export default LeftOverCardGrid;

const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: '8rem auto'
}

const bgStyle: CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
}

const headlineStyle: CSSProperties = {
    marginTop: '10rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0'
}