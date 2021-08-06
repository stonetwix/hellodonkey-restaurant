import { Layout } from "antd";
import { CSSProperties } from "react";
import SiderMenu from './Sider';

const { Content } = Layout;

const AdminLeftovers = () => {
    return (
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    Leftover content here...
                </div>
            </Content>
        </Layout>
    )
}

export default AdminLeftovers;

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}