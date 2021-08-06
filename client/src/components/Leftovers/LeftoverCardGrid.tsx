import { CSSProperties, useEffect, useState } from 'react';
import { Card, List, Row } from 'antd';
import { Food } from '../Takeaway/TakeawayView';
import { PlusCircleFilled } from '@ant-design/icons';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice';


const LeftOverCardGrid = () => {
    const dispatch = useDispatch();
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setFoods(await getMenuItems());
            setLoading(false);
        }
        fetchData()
    }, []);

        if (loading) {
            return (
                <div style={{textAlign: 'center', width: '100%', height: '100%'}}>
                    <Spinner animation="grow" />
                </div>
            )
        }
        return (
            <div className="site-card-wrapper" style={containerStyle}>
                <Row gutter={20} style={{ marginBottom: '2rem' }}>
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                    }}
                    dataSource={foods}
                    renderItem={item => (
                    <List.Item>
                        <Card 
                            actions={[
                                <PlusCircleFilled style={addIconStyle} onClick={() => {dispatch(addToCart(item))}}/>,
                            ]}
                            title={item.title} 
                            extra={Math.floor(item.price / 2) + ' kr'}
                        >
                            {item.description}
                        </Card>                 
                    </List.Item>
                    )}
                />
                </Row>
            </div>
        )
}

export default LeftOverCardGrid;

const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: '8rem auto'
}

const addIconStyle: CSSProperties = {
    marginTop: '0.4rem',
    color: '#61c9a8',
    cursor: 'pointer',
    fontSize: '1.5rem'
}

const getMenuItems = async () => {
    try {
        let response = await fetch('/api/menuitems');
        if (response.ok) {
          const data = await response.json();
          return data;
        }
    } catch (error) {
        console.error(error);
    }
}