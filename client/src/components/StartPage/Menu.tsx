import { Col, Row } from 'antd';
import { CSSProperties } from 'react';
import leftSwirl from '../../assets/left-swirl.png';
import rightSwirl from '../../assets/right-swirl.png';

const MenuStart = () => {
    return (
        <>
            <Row style={headlineRowStyle}>
                <img
                    src={leftSwirl} 
                    alt='left swirl'
                    width={'50px'}
                /> 
                <h1 style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '0.5rem' }}>Menu</h1>
                <img
                    src={rightSwirl} 
                    alt='right swirl'
                    width={'50px'}
                /> 
            </Row>
            <Row>
                <Col span={12} style={sidesStyle}>
                    <h2>Sides</h2>
                </Col>
                <Col span={12}>
                    <h2>Image</h2>
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
}