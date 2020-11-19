import React from 'react';
import styled from 'styled-components';


const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;

  h1 {
    @media(max-width: 1000px){
      font-size: 30px;
    }
    
  }
  h2 { 
    @media(max-width: 1000px){
      font-size: 22px;
    }
  }
`




const NotFound = () => { 
  return ( 
    <NotFoundWrapper>
    <h1>404 Not Found. You hit a route that doesn't exist ! ✨</h1>
    <h2>Click the header or open the menu to get back home</h2>
    </NotFoundWrapper>
  )
}
export default NotFound;