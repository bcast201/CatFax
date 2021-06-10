import styled from 'styled-components';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const FactComponent = () => {
    const [fact, setFact] = useState([])

    useEffect(() => {
        axios.get('https://catfact.ninja/fact?max_length=140')
          .then(res => {
            console.log(res)
            setFact(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])


    return (
        <Fact >
        {fact.fact}
        </Fact>
    )
}


const Fact = styled.h3`
    width: 50%;
    margin: auto;
    text-align: center;
    letter-spacing: .1em;
    font-size: 2em;
    padding-bottom: 2em;

    @media screen and (max-width:600px){
        font-size: 1.5em;
        max-height: 50px;
    }
`