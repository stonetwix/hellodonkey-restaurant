import { CheckCircleFilled } from "@ant-design/icons";
import { Layout, Table, Space, Button, } from "antd";
import { CSSProperties, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { MenuItem } from "../Takeaway/TakeawayView";
import SiderMenu from './Sider';
import {
    handleMarkAsPickedUpClick
} from '../Admin/adminSlice';
import { useDispatch } from "react-redux";

export interface Order {
    id: string;
    menuItem: MenuItem;
    quantity: number;
    created: string;
    isPickedUp: boolean;
}

const { Content } = Layout;

const AdminOrders = () => {
    const dispatch = useDispatch();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setOrders(await getOrders());
            setLoading(false);
        }
        fetchData()
    }, []);

    const columns = [
        {
            title: 'Order number',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Menu items',
            dataIndex: 'menuItem',
            key: 'menuitem',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Is picked up',
            key: 'action',
            render: (text: any, record: any) => {
    
                if (!record.isPickedUp) {
                    return (
                      <Space size="middle">
                        <Button onClick={() => dispatch(handleMarkAsPickedUpClick(record.id))}>Mark as picked up</Button>
                      </Space>
                    )
                  } else {
                    return (
                      <Space size="middle">
                        <CheckCircleFilled style={{ fontSize: '2rem', color: '#8FBC94', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}/>
                      </Space>
                    )
                }
            }
        }
    ];

    if (loading) {
        return (
            <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                <Spinner animation="grow" />
            </div>
        )
    }

    return (
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    <h1 style={{ marginLeft: '1rem', marginTop: '1rem' }}>Orders</h1>
                    <Table columns={columns} dataSource={orders} pagination={false} />
                </div>
            </Content>
        </Layout>
    )
}

export default AdminOrders;

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}

const getOrders = async () => {
    try {
        let response = await fetch('/api/orders');
        if (response.ok) {
          const data = await response.json();
          return data;
        }
    } catch (error) {
        console.error(error);
    }
}