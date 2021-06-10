import React from 'react'
import styled from 'styled-components';

export const Title = () => {
    return (
        <Header>
            Cat Fax
        </Header>
    )
}

const Header = styled.h1`
    font-size: 100px;
    padding: 0;
    margin: 0;
    letter-spacing: .2em;
    color: #f8eeec;
    filter: drop-shadow(1px 1px 4px black);
    font-family: 'Indie Flower', cursive;

    @media screen and (max-width:600px){
        font-size: 3em;
    }
  
`
