import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import NavigationBar from '../../components/NavigationBar'

import ResultImage from '../../assets/images/choffer.png'

import './styles.css';

function Result() {
  return ( 
    <>
    <NavigationBar/>
    <Container > 
      <Row>
        <Col  xs={12} md={12}>
          <div className='container-perfil'> 
            <div className='image-perfil'>
              <Image src={ResultImage} roundedCircle/>
            </div>
            <textbox className='name-perfil'>Chofer Qualificado</textbox>
         </div>
        </Col>
      </Row>
      <Row>
        <Col  xs={12} md={12}>
          <p className='desc-perfil'>
            Tem experiência na estrada, ajuda os irmãos, conhece os locais e tem muita história para contar.
          </p>
        </Col>
      </Row>
      <Row>
        <Button className='btn_success' variant='success'>Compartilhar no Whatsapp!</Button>
      </Row>
    </Container>   
   
    </>
  );
}

export default Result;
