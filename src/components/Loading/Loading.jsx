import React from 'react';
import { LoadingContainer, LoadingImage } from './LoadingElements';
import loadingImage from '../../Images/Loading.gif';
const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <LoadingImage src={loadingImage} alt="loading results" />
      </LoadingContainer>
    </>
  );
};
export default Loading;
