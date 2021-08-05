import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Col, InputNumber, List, Row } from 'antd';
import { CSSProperties, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCart,
  } from '../Cart/cartSlice';
import { CartItem } from '../Takeaway/TakeawayView';

const onChange = (value: number) => {
    console.log('changed', value);
}

const CartListItems = () => {
    const cart: CartItem[] = useSelector(getCart);

    return (
        <Row style={containerStyle}>
            <Col xs={24} style={colStyle}>
                <List
                    style={{ width: '100%' }}
                    itemLayout="horizontal"
                    dataSource={cart}
                    renderItem={item => (
                    <List.Item
                        actions={[<Button style={deleteButtonStyle}><CloseCircleFilled /></Button>]}
                    >
                        <List.Item.Meta
                            title={item.menuItem.title}
                            description={["Ant Design, a design language for background applications, is refined by Ant UED Team", <InputNumber min={1} max={10} value={item.quantity} onChange={onChange} style={{ margin: '0 3rem' }} />, item.menuItem.price, ' kr']} 
                        />
                    </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default CartListItems;

const containerStyle: CSSProperties = {
    width: '75%',
    margin: 'auto',
}

const colStyle: CSSProperties = {
    marginTop: '10rem',
    marginBottom: '5rem'
}

const deleteButtonStyle: CSSProperties = {
    border: 'none',
    boxShadow: 'none',
    color: '#F2545B',
    fontSize: '1.5rem',
}