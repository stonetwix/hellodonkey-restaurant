import React, { CSSProperties } from 'react';
import { Card, Col, List, Row } from 'antd';
import { Food } from '../Takeaway/TakeawayView';
import { PlusCircleFilled } from '@ant-design/icons';
import { Spinner } from 'react-bootstrap';

interface State {
    foods: Food[];
    loading: boolean;
}

class LeftOverCardGrid extends React.Component<{}, State> {
    state: State = {
        foods: [],
        loading: true,
    }

    async componentDidMount() {
        const foods = await getFoods();
        this.setState({ foods: foods, loading: false });
    }

    render() {
        if (this.state.loading) {
            return (
                <div style={{textAlign: 'center', width: '100%', height: '100%'}}>
                    <Spinner animation="grow" />
                </div>
            )
        }
        return (
            <div className="site-card-wrapper" style={containerStyle}>
                <Row gutter={20} style={{ marginBottom: '2rem' }}>
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                    }}
                    dataSource={this.state.foods}
                    renderItem={item => (
                    <List.Item>
                        <Card 
                            actions={[
                                <PlusCircleFilled style={addIconStyle}/>,
                            ]}
                            title={item.title} 
                            extra={Math.floor(item.price / 2) + ' kr'}
                        >
                            {item.description}
                        </Card>                 
                    </List.Item>
                    )}
                />
                </Row>
            </div>
        )
    }
}

export default LeftOverCardGrid;

const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: '8rem auto'
}

const addIconStyle: CSSProperties = {
    marginTop: '0.4rem',
    color: '#61c9a8',
    cursor: 'pointer',
    fontSize: '1.5rem'
}

const getFoods = async () => {
    try {
        let response = await fetch('/api/foods');
        if (response.ok) {
          const data = await response.json();
          return data;
        }
    } catch (error) {
        console.error(error);
    }
}