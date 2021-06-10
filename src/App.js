
import React, { useState } from 'react'
import styled from 'styled-components';
import {Title} from './Components/Title'

import {FactComponent} from './Components/FactComponent'


function App() {
 
  const [catsKey, setCatsKey] = useState(0);





  return (
    <Container >
      <Title />
        <CenterBox>           
            <FactComponent key={catsKey} />
            <Button  onClick={() => setCatsKey(key => key + 1)}>
            Another Fact!
            </Button>
            <Source>
                source: <Link href='https://catfact.ninja/' target='_blank' rel='noreferrer'>https://catfact.ninja/</Link>
            </Source>
        </CenterBox>
    </Container>
  );
}

export default App;

const Container = styled.div`
    background-color: #aecad6;
    background-image: linear-gradient(315deg, #aecad6 0%, #b8d3fe 74%); 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-direction: column;
`

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;

  @media screen and (max-width:600px){
        height: 80%;
    }

`

const Source = styled.p`
  text-decoration: none;
`

const Link = styled.a`
  text-decoration: none;
`

const Button = styled.button`
    height: 3rem;
    width: 12rem;
    margin: 2em;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background-color: #f8eeec;
    font-family: 'Indie Flower', cursive;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:600px){
        font-size: 1em;
        width: 10rem;
    }
`

 