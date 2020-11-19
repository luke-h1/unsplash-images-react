import React, { useState, useEffect } from 'react';
import { RandomWrapper, ImageWrapper } from './RandomElements';
import Unsplash, { toJson } from 'unsplash-js';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_CLIENT_ID,
});

const Random = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchImages = async () => {
    setLoading(true);
    unsplash.photos
      .getRandomPhoto({ featured: true })
      .then(toJson)
      .then((json) => {
        console.log(json);
      });
    setLoading(false);
  };

  useEffect(() => {
    console.log('hello')
    searchImages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <RandomWrapper>
        <ImageWrapper>{/* {result goes here } */}</ImageWrapper>
      </RandomWrapper>
    </>
  );
};
export default Random;
