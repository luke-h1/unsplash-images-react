import styled from 'styled-components';

export const image = styled.image`
  min-width: 270px;
  min-height: 350px;
  max-width: 270px;
  max-height: 350px;

`;


export const imageWrapper = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  img { 
    padding: 1rem;
  }
`; 