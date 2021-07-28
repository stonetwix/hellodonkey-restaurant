import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { CSSProperties } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid style={containerStyle}>
            <Row style={{ width: '80%' }}>
                <Col md={4}>
                    <h2 style={textStyle}>Hello Donkey</h2>
                    <p style={textStyle}>Gatuadress 11<br/>
                    414 14 Göteborg<br/>
                    Tel: 031-11 12 12</p>
                </Col>
                <Col md={{ span: 3, offset: 1 }} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <h2 style={textStyle}>Öppet</h2>
                    <p style={textStyle}>Tis-fre: 16.00-20.30<br/>
                    Lör: 16-22.30<br/>
                    Sön: 14-18</p>
                </Col>
                <Col md={{ span: 2, offset: 2 }}>
                    <h2 style={{ ...textStyle}}>
                        <Link to={'/bookatable'} style={{ color: 'white', textDecoration: 'underline' }}>Boka bord här!</Link>
                    </h2>
                    <div>

                    <InstagramFilled style={iconStyle}/>
                    <FacebookFilled style={iconStyle}/>
                    <LinkedinFilled style={iconStyle}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;

const containerStyle: CSSProperties = {
    background: '#F2545B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 1rem',
}

const textStyle: CSSProperties = {
    color: 'white'
}

const iconStyle: CSSProperties = {
    color: 'white',
    fontSize: '2rem',
    marginRight: '1.5rem',
    marginTop: '2rem',
}