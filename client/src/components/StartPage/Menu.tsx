import { CSSProperties } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import leftSwirl from '../../assets/left-swirl.png';
import rightSwirl from '../../assets/right-swirl.png';
import guacamole from '../../assets/guacamole.png';
import sidesIcon from '../../assets/sides-icon.png';

const MenuStart = () => {
    return (
        <>
            <Row style={headlineRowStyle}>
                <Col xs='auto'>
                    <img
                        src={leftSwirl} 
                        alt='left swirl'
                        width={'50px'}
                        style={{display: 'inline'}}
                    /> 
                </Col>
                <Col md='auto'>
                    <h1 style={{ marginTop: '0.5rem' }}>Menu</h1>
                </Col>
                <Col xs='auto'>
                    <img
                        src={rightSwirl} 
                        alt='right swirl'
                        width={'50px'}
                        style={{float: 'right'}}
                    /> 
                </Col>
            </Row>
            <Row style={{display: 'flex'}}>
                <Col sm={6} style={sidesStyle}>
                    <div style={{ width: '60%', marginTop: '4rem' }}>
                        <img
                            src={sidesIcon}
                            alt='sidesIcon'
                            style={{ float: 'left', marginRight: '1rem' }}
                            width={'30px'}
                        />
                        <h2 style={{color: 'white', marginBottom: '2rem'}}>Sides</h2>
                        <h4 style={{color: 'white'}}>Lorem ipsum</h4>
                        <h5 style={{color: 'white'}}>99 kr</h5>
                        <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4 style={{color: 'white'}}>Lorem ipsum</h4>
                        <h5 style={{color: 'white'}}>99 kr</h5>
                        <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4 style={{color: 'white'}}>Lorem ipsum</h4>
                        <h5 style={{color: 'white'}}>99 kr</h5>
                        <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        <h4 style={{color: 'white'}}>Lorem ipsum</h4>
                        <h5 style={{color: 'white'}}>99 kr</h5>
                        <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, odio non laoreet pellentesque, justo est suscipit ligula, quis fringilla mi libero.</p>
                        
                    </div>
                </Col>
                <Col sm={6} style={imgStyle}>
    
                </Col>
            </Row>
        </>
    )
}

export default MenuStart;

const headlineRowStyle: CSSProperties = {
    background: '#FFDBDA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
    paddingBottom: '1rem',
}

const sidesStyle: CSSProperties = {
    background: '#61C9A8',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '4rem'
}

const imgStyle: CSSProperties = {
    backgroundImage: `url(${guacamole})`,
    paddingTop: '20rem',
    paddingBottom: '20rem',
}