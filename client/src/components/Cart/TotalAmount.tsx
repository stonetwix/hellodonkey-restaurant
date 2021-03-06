import { Col, Divider, Row } from 'antd';
import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../Takeaway/TakeawayView';
import { getTotalPrice } from './cartSlice';

const TotalAmount = () => {
    const totalPrice: CartItem[] = useSelector(getTotalPrice);
    
    return (
        <Row style={containerStyle}>
            <Col xs={24} style={colStyle}>
                <h5>Total: {totalPrice} kr</h5>
            </Col>
            <Col xs={24}><Divider plain>Payment</Divider></Col>
        </Row>
    )
}

export default TotalAmount;

const containerStyle: CSSProperties = {
    width: '80%',
    margin: 'auto'
}

const colStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '4rem'
}