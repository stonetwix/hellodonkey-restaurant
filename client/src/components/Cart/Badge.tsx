import React from 'react';
import Badge from 'react-bootstrap/Badge';

class BadgeCart extends React.Component {

    render() {
        return (
            <Badge pill style={{ background: '#F2545B', borderRadius: '100%', marginTop: '-0.5rem', width: '1.3rem', height: '1.3rem' }}>
                3
            </Badge>
        )
    }
}

export default BadgeCart;