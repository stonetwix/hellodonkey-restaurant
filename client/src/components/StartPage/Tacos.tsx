
import { CSSProperties } from 'react';
import background from '../../assets/yellow-dotted-bg.png';
import drinkimg from '../../assets/drink-start.png';
import tacosheadline from '../../assets/tacos-headline.png';
import { Col, Row } from 'react-bootstrap';

const Tacos = () => {
    return (
        <div style={backgroundStyle}>
            <Row style={{ width: '80%', display: 'flex'}}>
                <Col md={3}>
                    <img
                        width={'100%'}
                        src={drinkimg}
                        alt='drink'
                    />
                </Col>
                <Col md={{span: 8, offset: 1}}>
                    <img
                        width={'30%'}
                        src={tacosheadline}
                        alt='Tacos'
                        style={{ paddingBottom: '2rem', marginTop: '2rem' }}
                    />
                    <h5>With us, you enjoy genuine Mexican food in a relaxed environment. On the menu you will find tacos, quesadillas, tostadas and much more good. We also have the best drinks in town! Our goal is to be Gothenburg's Mexican mecca when it comes to food and drink. We want you, as a guest, to feel that genuine, warm Mexican feeling when you step inside our door. <br/> Welcome!</h5>
                </Col>
            </Row>
        </div>
    )
}

export default Tacos;

const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}

const colStyle: CSSProperties = {
    //display: 'flex',
}