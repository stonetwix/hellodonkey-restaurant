import React, { CSSProperties } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class TakeAway extends React.Component {

    render() {
        return (
            <Container fluid style={containerStyle}>
                <Row>
                    <Col style={headlineStyle}>
                        <h1>Take Away Menu</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={menuStyle}>
                        <h2 style={{marginBottom: '2rem', justifyContent: 'center'}}>Mains</h2>
                        <h4>Lorem ipsum – <span style={priceStyle}>99 kr</span></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum</h4>
                        <h5>99 kr</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum</h4>
                        <h5>99 kr</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum</h4>
                        <h5>99 kr</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum</h4>
                        <h5>99 kr</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TakeAway;

const containerStyle: CSSProperties = {
    marginTop: '10rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
}

const headlineStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0'
}

const menuStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}

const priceStyle: CSSProperties = {
    float: 'right',
}