import { CSSProperties } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo-hd-white.png';
import { ShoppingCartOutlined } from '@ant-design/icons'; 

const Navigation = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' style={navbarStyle}>
            <Container>
                <Navbar.Brand href='/' style={brandStyle}>
                    <img 
                        src={logo} 
                        alt='Hello Donkey logo'
                        width={window.innerWidth > 786 ? '65%' : '40%'}
                        height={window.innerWidth > 786 ? '65%' : '40%'}
                    />
                </Navbar.Brand>
                <Navbar.Toggle area-aria-controls='responsive-navbar-nav' style={{ background: '#61c9a8'}}/>
                <Navbar.Collapse id='responsive-navbar-nav' style={containerStyle}>
                    <Nav style={navStyle}>
                        <Nav.Link href='/' style={navItemStyle}>Book a table</Nav.Link>
                        <Nav.Link href='/' style={navItemStyle}>Take away</Nav.Link>
                        <Nav.Link href='/' style={navItemStyle}>Leftovers</Nav.Link>
                        <Nav.Link href='/' style={navItemStyle}>About us</Nav.Link>
                        <Nav.Link href='/' style={navItemStyle}>Contact</Nav.Link>
                        <Nav.Link href='/' style={navItemStyle}>Login</Nav.Link>
                        <Nav.Link href='/' style={navItemStyle}><ShoppingCartOutlined style={{ fontSize: '1.5rem' }}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

const navbarStyle: CSSProperties = {
    background: '#61c9a8',
    height: '6.5rem',
    width: '100%',
}

const containerStyle: CSSProperties = {
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: '#61c9a8',
    width: '100%'
}

const navStyle: CSSProperties = {
    fontFamily: 'Staatliches',
}

const brandStyle: CSSProperties = {
    float: 'left'
}

const navItemStyle: CSSProperties = {
    marginRight: '1rem',
}