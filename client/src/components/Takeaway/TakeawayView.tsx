import { CSSProperties, useEffect, useState } from 'react';
import { Col, Container, Row, Image, Spinner } from 'react-bootstrap';
import lime from '../../assets/lime.png';
import tacos from '../../assets/three-tacos.png';
import dip from '../../assets/dip.png';
import background from '../../assets/pattern-takeaway.png'
import { PlusCircleFilled } from '@ant-design/icons';
import { List } from 'antd';
import { useDispatch } from 'react-redux';
import {
    addToCart,
  } from '../Cart/cartSlice';

export interface Food {
    id: number;
    title: string;
    description: string;
    price: number;
}

export interface CartItem {
    menuItem: Food;
    quantity: number;
}


const TakeAway = () => {
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
            <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                <Spinner animation="grow" />
            </div>
        )
    }

    return (
        <Container fluid>
            <Row style={bgStyle}>
                <Col style={headlineStyle}>
                    <h1>Take Away Menu</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={{ span: 6 }} style={menuStyle}>
                    <List
                        itemLayout="horizontal"
                        size="large"
                        dataSource={foods}
                        renderItem={item => (
                        
                        <List.Item style={listStyle}>
                            <List.Item.Meta
                                avatar={<PlusCircleFilled style={addIconStyle} onClick={() => {dispatch(addToCart(item))}}/>}
                                title={item.title}
                                description={item.description}
                            />
                            <div style={{ marginLeft: '1rem' }}>{item.price} kr</div>
                        </List.Item>
                        )}
                    />
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

const addIconStyle: CSSProperties = {
    marginTop: '0.4rem',
    color: '#61c9a8',
    cursor: 'pointer',
    fontSize: '1.5rem'
}

const listStyle: CSSProperties = {
    margin: '1.3rem 0'
}

const bgStyle: CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
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