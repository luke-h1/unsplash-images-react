import styled from 'styled-components';

export const RandomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  min-width: 270px;
  min-height: 350px;
  max-width: 270px;
  max-height: 350px;
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  img {
    padding: 0.5rem;
  }
  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 884px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`