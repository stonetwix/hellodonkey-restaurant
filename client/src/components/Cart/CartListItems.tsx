import { CloseCircleFilled } from "@ant-design/icons";
import { Button, Col, InputNumber, List, Row } from "antd";
import { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCartItemQuantity,
  deleteCartItem,
  getCart,
} from "../Cart/cartSlice";
import { CartItem } from "../Takeaway/TakeawayView";

const CartListItems = () => {
  const cart: CartItem[] = useSelector(getCart);
  const dispatch = useDispatch();

  const onQuantityChange = (id: number, value: number) => {
    dispatch(changeCartItemQuantity({ menuItemId: id, quantity: value }));
  };

  const onDeleteClick = (id: number) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <Row style={containerStyle}>
      <Col xs={24} style={colStyle}>
        <List
          style={{ width: "100%" }}
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  style={deleteButtonStyle}
                  onClick={() => onDeleteClick(item.menuItem.id)}
                >
                  <CloseCircleFilled />
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={item.menuItem.title}
                description={[
                  <span style={descritionStyle}>
                    {item.menuItem.description.substring(0, 60) + "..."}
                  </span>,
                  <InputNumber
                    min={1}
                    max={10}
                    value={item.quantity}
                    onChange={(quantity) =>
                      onQuantityChange(item.menuItem.id, quantity)
                    }
                    style={{ margin: window.innerWidth > 786 ? "0 3rem" : "0" }}
                  />,
                  <span>{` ${item.menuItem.price * item.quantity} kr,`}</span>,
                ]}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default CartListItems;

const containerStyle: CSSProperties = {
  width: "75%",
  margin: "auto",
};

const colStyle: CSSProperties = {
  marginTop: "10rem",
  marginBottom: "5rem",
};

const deleteButtonStyle: CSSProperties = {
  border: "none",
  boxShadow: "none",
  color: "#F2545B",
  fontSize: "1.5rem",
};

const descritionStyle: CSSProperties = {
  fontFamily: "Roboto Mono",
};
