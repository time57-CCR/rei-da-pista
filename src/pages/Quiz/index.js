import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import NavigationBar from '../../components/NavigationBar'

import ImageQuiz1 from '../../assets/images/quiz1.png'
import ImageQuiz2 from '../../assets/images/quiz2.png'
import ImageQuiz3 from '../../assets/images/quiz3.png'
import ImageQuiz4 from '../../assets/images/quiz4.png'

import './styles.css';

function Quiz() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {id:1,name:'Que tipo de motorista você é? ',img: ImageQuiz1, realizado: false},
      {id:2,name:'Que caminhoneiro você é? ',img: ImageQuiz2, realizado: false},
      {id:3,name:'O que te faz feliz? ',img: ImageQuiz3, realizado: false},
      {id:4,name:'Qual seu tipo de familia? ',img: ImageQuiz4, realizado: true},]);
  },[]);

  return ( 
    <>
    <NavigationBar/>

    <Container > 
      {items.map((item) => !item.realizado ? 
      (
        <Row>
          <Col xs={12} md={12}>
            <LinkContainer to='questions'>
              <div className='container-quiz'>
                <div className='container-image'>
                  <Image src={item.img} fluid/>
                </div>
                <div className='text-quiz'>
                  {item.name}
                </div>
              </div>
            </LinkContainer>
          </Col>
        </Row>
        )
        : 
        null )}   
        <Row>
          <Col xs={12} md={12}>
            <div className='title'>Questionários Realizados</div>
          </Col>
        </Row>   
        {items.map((item) => item.realizado ? 
      (<Row>
          <Col xs={12} md={12}>
            <LinkContainer to='question'>
              <div className='container-quiz'>
                <div className='container-image'>
                  <Image src={item.img} fluid/>
                </div>
                <div className='text-quiz'>
                  {item.name}
                </div>
              </div>
            </LinkContainer>
          </Col>
        </Row>
        )
        : 
        null )}      
    </Container>   
   
    </>
  );
}

export default Quiz;
