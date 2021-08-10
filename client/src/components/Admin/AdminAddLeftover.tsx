import { Button, Form, Input, InputNumber, Layout, message, Select } from "antd";
import { CSSProperties } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { children } from "./AdminEditMenuItem";
import SiderMenu from './Sider';

const { Content } = Layout;
const { Option } = Select;

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

const AdminAddLeftover = () => {
    let history = useHistory();

    const onFinish = (values: any) => {
        console.log(values);
        successSave();
        history.push('/admin/leftovers');
    };

    const successSave = () => {
        message.success({
            content: 'Leftover item has been added',
            style: {
              marginTop: '6rem',
            },
        });
    };
    
    const handleTagChange = (value: any) => {
        console.log(`selected ${value}`);
    }

    const tagOptions = () => {
        return children.map((c: string) => {
            return <Option value={c} key={c}>
                {c}
            </Option>
        })
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
                >
                    <Form.Item name={['leftover', 'title']} label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['leftover', 'description']} label="Description" rules={[{ required: true }]}>
                        <Input.TextArea rows={4}/>
                    </Form.Item>
                    <Form.Item name={['leftover', 'price']} label="Price" rules={[{ required: true, type: 'number' }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['leftover', 'tags']} label="Tags" >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        //defaultValue={['a10', 'c12']}
                        onChange={handleTagChange}
                    >
                        {tagOptions()}
                    </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                        <Button 
                            type="primary" 
                            htmlType="submit"
                        >
                            Save
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}

export default withRouter(AdminAddLeftover);

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}