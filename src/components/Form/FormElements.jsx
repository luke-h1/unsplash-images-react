import styled from 'styled-components';
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
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.div`
  font-size: 25px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  white-space: nowrap;
`;

export const FormField = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
`;

export const SearchBox = styled.input`
  padding: 8px;
  outline: 0;
  font-size: 18px;
  margin-right: 10px;
  border-radius: 4px;
`;

export const SearchButton = styled.input`
  padding: 10px;
  border-radius: 5px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

export const ClearButton = styled.button`
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
