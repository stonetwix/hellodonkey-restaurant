import React, { CSSProperties } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import lime from '../../assets/lime.png';
import tacos from '../../assets/three-tacos.png';
import dip from '../../assets/dip.png';
import background from '../../assets/pattern-takeaway.png'
import { PlusCircleFilled } from '@ant-design/icons';

class TakeAway extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row style={bgStyle}>
                    <Col style={headlineStyle}>
                        <h1>Take Away Menu</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 6 }} style={menuStyle}>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4>Lorem ipsum <PlusCircleFilled style={addIconStyle}/><span style={priceStyle}>99 kr</span></h4>
                        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm={2} style={{ padding: '3rem' }}>
                        <Image src={lime} roundedCircle fluid />
                    </Col>
                    <Col sm={2} style={{ padding: '3rem' }}>
                        <Image src={tacos} roundedCircle fluid/>
                    </Col>
                    <Col sm={2} style={{ padding: '3rem' }}>
                        <Image src={dip} roundedCircle fluid/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TakeAway;

const headlineStyle: CSSProperties = {
    marginTop: '10rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0'
}

const menuStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5rem'
}

const priceStyle: CSSProperties = {
    float: 'right',
}

const descriptionStyle: CSSProperties = {
    marginBottom: '2rem',
}

const addIconStyle: CSSProperties = {
    marginLeft: '1rem', 
    verticalAlign: '0.1rem', 
    color: '#61c9a8',
    cursor: 'pointer'
}

const bgStyle: CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
}