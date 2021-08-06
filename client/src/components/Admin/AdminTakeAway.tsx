import { Layout } from "antd";
import { CSSProperties } from "react";
import SiderMenu from './Sider';

const { Content } = Layout;

const AdminTakeAway = () => {
    return (
        <Layout>
            <SiderMenu />
            <Content>
                <div style={contentContainerStyle}>
                    Menu content here...
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
    height: '100vh'
}