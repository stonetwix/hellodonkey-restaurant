import {
  CheckCircleFilled,
  DeleteOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { Layout, Table, Space, Button } from "antd";
import { CSSProperties, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { MenuItem } from "../Takeaway/TakeawayView";
import SiderMenu from "./Sider";
import {
  getOrders,
  handleMarkAsPickedUpClick,
  handleResetOrder,
} from "../Admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";

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
  const orders: Order[] = useSelector(getOrders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
    }
    fetchData();
  }, []);

  const columns = [
    {
      title: "Order number",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Menu items",
      dataIndex: "menuItem",
      key: "menuitem",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Is picked up",
      key: "action",
      render: (text: any, record: any) => {
        if (!record.isPickedUp) {
          return (
            <Space size="middle">
              <Button
                onClick={() => dispatch(handleMarkAsPickedUpClick(record.id))}
              >
                Mark as picked up
              </Button>
            </Space>
          );
        } else {
          return (
            <Space size="middle">
              <CheckCircleFilled
                style={{
                  fontSize: "2rem",
                  color: "#61C9A8",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <Button
                key="reset-order"
                onClick={() => dispatch(handleResetOrder(record.id))}
                style={editStyle}
                icon={<UndoOutlined />}
              >
                reset
              </Button>
              <Button
                key="delete-order"
                onClick={() => {}}
                style={deleteStyle}
                icon={<DeleteOutlined />}
              >
                delete
              </Button>
            </Space>
          );
        }
      },
    },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: "center", width: "100%", height: "100vh" }}>
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <Layout>
      <SiderMenu />
      <Content>
        <div style={contentContainerStyle}>
          <h1 style={{ marginLeft: "1rem", marginTop: "1rem" }}>Orders</h1>
          <Table columns={columns} dataSource={orders} pagination={false} />
        </div>
      </Content>
    </Layout>
  );
};

export default AdminOrders;

const contentContainerStyle: CSSProperties = {
  marginTop: "5rem",
  padding: "5rem",
  background: "#fff",
  height: "100vh",
};

const deleteStyle: CSSProperties = {
  color: "#F2545B",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "none",
};

const editStyle: CSSProperties = {
  backgroundColor: "white",
  color: "#474747",
  border: "none",
  cursor: "pointer",
  boxShadow: "none",
};

// const getOrders = async () => {
//     try {
//         let response = await fetch('/api/orders');
//         if (response.ok) {
//           const data = await response.json();
//           return data;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
