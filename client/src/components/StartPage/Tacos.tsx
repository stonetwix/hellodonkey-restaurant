import { Col, Row } from 'antd';
import { CSSProperties } from 'react';
import background from '../../assets/yellow-dotted-bg.png';
import drinkimg from '../../assets/drink-start.png';
import tacosheadline from '../../assets/tacos-headline.png';

const Tacos = () => {
    return (
        <Row style={backgroundStyle}>
            <Row style={{ width: '80%', display: 'flex'}}>
                <Col xs={24} xl={6} style={{ width: '100%' }}>
                    <img
                        width={'65%'}
                        src={drinkimg}
                        alt='drink'
                    />
                </Col>
                <Col xs={24} xl={12} style={{ width: '100%' }}>
                    <img
                        width={'40%'}
                        src={tacosheadline}
                        alt='Tacos'
                        style={{ paddingBottom: '2rem' }}
                    />
                    <h5>Hos oss njuter du av genuin mexikansk mat 
                    i en avslappnad miljö. På menyn hittar du tacos, quesadillas, tostadas och mycket 
                    annat gott. Vi har också stans bästa drinkar! Vårt gemensamma mål är att vara Göteborgs mexikanska mecka när det kommer till mat och dryck. Vi vill att du som gäst ska känna den där genuina, varma mexikanska känslan när du kliver innanför vår dörr!</h5>
                </Col>
            </Row>
        </Row>
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