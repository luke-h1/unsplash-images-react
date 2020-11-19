import styled from 'styled-components';

export const RandomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  min-width: 270px;
  min-height: 350px;
  max-width: 270px;
  max-height: 350px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 2rem;
  }
`;

export const RandomBtn = styled.button`
  margin-top: 1rem;
  min-width: 100px;
  padding: 5px 20px;
  border-radius: 6px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background-color: #38aecc;
    color: #fff;
    cursor: pointer;
  }
`;
