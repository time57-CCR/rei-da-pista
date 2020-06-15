import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import NavigationBar from '../../components/NavigationBar'

import './styles.css';

function Questions() {
  const [questions, setQuestions] = useState([
    {titleItem:'Que tipo de caminhoneiro você é?',idItem:1, question:'Carreta 3 eixos trucado é conhecida como?', option: [{opt:1, name: '12 rolamento', img: null},{opt:2, name: '06 rolamento', img: null},{opt:3, name: 'Ana Maria (AM)', img: null},{opt:4, name: '22 rolamento', img: null},{opt:5, name: 'Asa Dura', img: null},]},
    {titleItem:'Que tipo de caminhoneiro você é?',idItem:1, question:'Que música gosta de ouvir?',option: [{opt:2, name: 'Eletrônico', img: null},{opt:2, name: 'Forró', img: null},{opt:3, name: 'Sertanejo', img: null},{opt:4, name: 'Brega', img: null},]},]);
  const [i, setI] = useState(0);



  return ( 
    <>
    <NavigationBar/>

    <Container > 
     <Row>
      <Col>
      <div className="title-quiz">
        {questions[i].titleItem}
      </div>
      </Col>
     </Row>
     {questions[i].option.map((item) => 
     <Row>
       <Col>
      <Button className='btn-cancel' onClick={() => (questions.length > i+1 ? setI(i+1) : window.location.href = '/result')}>
            <div className='title-question'>
                {`0${item.opt}.  ` + item.name}
            </div>
      </Button>
       
       </Col>
     </Row>)}
    </Container>   
   
    </>
  );
}

export default Questions;
