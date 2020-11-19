import React, { useState } from 'react';
import { RandomWrapper, ImageWrapper } from './RandomElements';
import Unsplash, { toJson } from 'unsplash-js';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_CLIENT_ID,
});

const Random = () => {
  return (
    <>
      <RandomWrapper>
        <ImageWrapper>{/* {result goes here } */}</ImageWrapper>
      </RandomWrapper>
    </>
  );
};
export default Random;
