import { Button, Form, Input, InputNumber, Layout, message } from "antd";
import { CSSProperties, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useLocation, withRouter } from "react-router-dom";
import { Food } from "../Takeaway/TakeawayView";
import SiderMenu from './Sider';

const { Content } = Layout;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

const AdminEditMenuItem = () => {
    let location = useLocation();
    const [menuItem, setMenuItem] = useState<Food>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setMenuItem(await getMenuItem(location.pathname.split('/').reverse()[0]));
            setLoading(false);
        }
        fetchData()
    }, [location.pathname]);

    const onFinish = (values: any) => {
        console.log(values);
        successSave();
    };

    const successSave = () => {
        message.success({
            content: 'Menu item updated',
            style: {
              marginTop: '6rem',
            },
        });
    };

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
                <Form {...layout} 
                    name="nest-messages" 
                    onFinish={onFinish} 
                    validateMessages={validateMessages}
                    style={{ marginTop: '2rem' }}
                    initialValues={{
                        menuItem: {
                          title: menuItem?.title,
                          description: menuItem?.description,
                          price: menuItem?.price,
                        }
                    }}
                >
                    <Form.Item name={['menuItem', 'title']} label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['menuItem', 'description']} label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['menuItem', 'price']} label="Price" rules={[{ required: true, type: 'number' }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                        <Button 
                            type="primary" 
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}

export default withRouter(AdminEditMenuItem);

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}

const getMenuItem = async (id: string) => {
    try {
        let response = await fetch('/api/menuitems/' + id);
        if (response.ok) {
          const data = await response.json();
          return data;
        }
    } catch (error) {
        console.error(error);
    }
}