import { Layout } from "antd";
import { CSSProperties } from "react";
import SiderMenu from './Sider';

const { Content } = Layout;

const AdminStartView = () => {

    return(
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    "Dashboard" content here...
                </div>
            </Content>
        </Layout>
    )
}

export default AdminStartView;

const contentContainerStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '5rem',
    background: '#fff',
    height: '100vh'
}