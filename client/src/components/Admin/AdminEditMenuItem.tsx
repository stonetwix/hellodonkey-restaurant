import { Layout } from "antd";
import { CSSProperties } from "react";
import SiderMenu from './Sider';

const { Content } = Layout;

const AdminEditMenuItem = () => {
    return (
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    Edit form here...
                </div>
            </Content>
        </Layout>
    )
}

export default AdminEditMenuItem;

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}