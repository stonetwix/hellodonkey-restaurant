import { Col, List, Row } from 'antd';
import { CSSProperties } from 'react';

const data = [
    {
      title: 'Cart Item 1',
    },
    {
      title: 'Cart Item 2',
    },
  ];

const CartListItems = () => {

    return (
        <Row style={containerStyle}>
            <Col sm={24} style={colStyle}>
                <List
                    style={{width: '100%'}}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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