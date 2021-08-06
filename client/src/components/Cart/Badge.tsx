import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { badgeCount } from './cartSlice';


const BadgeCart = () => {
    const count = useSelector(badgeCount);

    if (count <= 0) {
        return (
            <div></div>
        )
    }
    return (
        <Badge pill style={{ background: '#F2545B', borderRadius: '100%', marginTop: '-0.5rem', width: '1.3rem', height: '1.3rem' }}>
            {count}
        </Badge>
    )
}

export default BadgeCart;