import { Layout, Menu } from 'antd';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { BellOutlined, ClockCircleOutlined, DollarCircleOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SiderMenu = () => {
    let location = useLocation();

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            style={{
                height: '100vh',
                background: '#FFDBDA',
                marginTop: '5rem',
            }}
        >
            <Menu 
                mode="inline" 
                defaultSelectedKeys={['/admin/menu-items']} 
                selectedKeys={[location.pathname]} 
                style={{ marginTop: '5rem', background: '#FFDBDA' }}
            >
                <Menu.Item key="/admin/menu" icon={<ReadOutlined />}>
                    <Link to={'/admin/menu'}>Take away menu</Link>
                </Menu.Item>
                <Menu.Item key="/admin/leftovers" icon={<BellOutlined />}>
                    <Link to={'/admin/leftovers'}>Leftovers</Link>
                </Menu.Item>
                <Menu.Item key="/admin/orders" icon={<DollarCircleOutlined />}>
                    <Link to={'/admin/orders'}>Orders</Link>
                </Menu.Item>
                <Menu.Item key="/admin/reservations" icon={<ClockCircleOutlined />}>
                    <Link to={'/admin/reservations'}>Reservations</Link>
                </Menu.Item>
                <Menu.Item key="/admin/users" icon={<UserOutlined />}>
                    <Link to={'/admin/users'}>Users</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default withRouter(SiderMenu);