import { DeleteOutlined, FormOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Layout, List, message } from "antd";
import { CSSProperties, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Food } from "../Takeaway/TakeawayView";
import SiderMenu from './Sider';

const { Content } = Layout;

const AdminTakeAway = () => {
    let history = useHistory();
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setFoods(await getMenuItems());
            setLoading(false);
        }
        fetchData()
    }, []);

    const successDelete = () => {
        message.success({
            content: 'Menu item deleted',
            style: {
              marginTop: '6rem',
            },
        });
    };

    const handleDelete = () => {
        console.log('deleted')
    };

    const handleAddClick = () => {
        history.push('/admin/addmenuitem');
    }

    if (loading) {
        return (
            <div style={{textAlign: 'center', width: '100%', height: '100%'}}>
                <Spinner animation="grow" />
            </div>
        )
    }

    return (
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    <h1 style={{ marginLeft: '1rem', marginTop: '1rem' }}>Take away menu</h1>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button style={buttonStyle} onClick={handleAddClick}>
                        <PlusCircleOutlined />Add Menu Item
                    </Button>
                    </div>
                    <List
                        itemLayout="horizontal"
                        size="large"
                        dataSource={foods}
                        renderItem={item => (
                        
                        <List.Item actions={[
                            <Link to={'/admin/editmenuitem/' + item.id}>  
                                <Button 
                                    key="edit-post" 
                                    style={editStyle}
                                    icon={<FormOutlined />}
                                >
                                    edit
                                </Button>
                            </Link>, 
                            <Button 
                                key="delete-post" 
                                onClick={() => {handleDelete(); successDelete();}}                                 
                                style={deleteStyle}
                                icon={<DeleteOutlined />}
                            >
                                delete
                            </Button>]}
                        >
                            <List.Item.Meta
                                title={item.title}
                                description={item.description.substring(0, 80) + '...'}
                            />
                        </List.Item>
                        )}
                    />
                </div>
            </Content>
        </Layout>
    )
}

export default AdminTakeAway;

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
}

const deleteStyle: CSSProperties = {
    color: '#F2545B',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.2rem',
    marginLeft: '1rem',
    boxShadow: 'none'
}

const editStyle: CSSProperties = {
    backgroundColor: 'white',
    color: '#474747',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.2rem',
    marginRight: '1rem',
    boxShadow: 'none'
}

const buttonStyle: CSSProperties = {
    marginBottom: '3rem',
    marginRight: '2rem'
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