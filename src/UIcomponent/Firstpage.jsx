

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Firstpage.css';
import left from "../assets/left.png";
import top from "../assets/top.png";
import salesinfo from "../assets/salesinfo.png";
import invoice from "../assets/invoice.png";



function Firstpage() {
  return (
    <Container fluid className='containerdiv'>
      <Row className='rowdiv'> 
              <Col sm={2} className='col1'>
                  <h3 className='headElement'>Medico Sales</h3>
                  <div className='imgdiv'>
            <img src={left} />
                  </div>
        </Col>
  
              
    <Col className='col2'>
          <div className='srchimg'>
          <img src={top} />
                     </div>
                  <div className='salesinfo'>
            <img src={salesinfo} />
                  </div>
                  <div className='tableimg'>
                      <img src={invoice} />
                  </div>
            
              </Col>
      </Row>
      
    </Container>
  );
}

export default Firstpage;
