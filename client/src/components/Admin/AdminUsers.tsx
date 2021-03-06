import { Layout } from "antd";
import { CSSProperties } from "react";
import SiderMenu from './Sider';

const { Content } = Layout;

const AdminUsers= () => {
    return (
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    Users content here...
                </div>
            </Content>
        </Layout>
    )
}

export default AdminUsers;

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}