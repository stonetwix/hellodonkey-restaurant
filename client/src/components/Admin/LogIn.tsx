import { Form, Input, Button, Row, Col } from "antd";
import { CSSProperties, useState } from "react";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 10,
  },
};

const LogIn = () => {
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    //   const { setUser } = this.context;
    //   const user = await login(values.email, values.password);
    //   if (user) {
    //     setUser(user.username, user.role === 'admin');
    history.push("/admin/menu/");
    //   } else {
    //     alert('Not valid e-mail or password');
    //   }
    setIsLoading(false);
  };

  return (
    <Row style={containerStyle}>
      <Col span={24} style={columnStyle}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          LOG IN
        </h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={(values) => onFinish(values)}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={buttonStyle}
              loading={isLoading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LogIn;

const containerStyle: CSSProperties = {
  display: "flex",
  width: "60%",
  margin: "auto",
  height: "100vh",
};

const columnStyle: CSSProperties = {
  marginTop: "14rem",
};

const buttonStyle: CSSProperties = {
  float: "right",
};

// const login = async (email: string, password: string) => {
//     try {
//         const response = await fetch('/api/login/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: email,
//             password: password,
//           })
//         });
//         if (response.ok) {
//           const data = await response.json();
//           return data;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
