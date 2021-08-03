import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Col, InputNumber, List, Row } from 'antd';
import { CSSProperties } from 'react';

const data = [
    {
      title: 'Cart Item 1',
      price: 99
    },
    {
      title: 'Cart Item 2',
      price: 109
    },
    {
        title: 'Cart Item 3',
        price: 89
      },
];

const onChange = (value: number) => {
    console.log('changed', value);
}

const CartListItems = () => {

    return (
        <Row style={containerStyle}>
            <Col xs={24} style={colStyle}>
                <List
                    style={{ width: '100%' }}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item
                        actions={[<Button style={deleteButtonStyle}><CloseCircleFilled /></Button>]}
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={["Ant Design, a design language for background applications, is refined by Ant UED Team", <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} style={{ margin: '0 3rem' }} />, item.price, ' kr']} 
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
    touchAction: 'none',
    transition: 'none'
}