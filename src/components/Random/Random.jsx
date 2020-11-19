import React, { useState, useEffect } from 'react';
import {
  RandomWrapper,
  ImageWrapper,
  Image,
  RandomBtn,
} from './RandomElements';
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
      .getRandomPhoto()
      .then(toJson)
      .then((json) => {
        console.log(json);
        const data = (
          <Image src={json.urls.regular} alt={json.description} key={json.id} />
        );

        setImage(data);
        setImage(data);
      });
    setLoading(false);
  };

  useEffect(() => {
    console.log('hello');
    searchImages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <RandomWrapper>
        <ImageWrapper>{image}</ImageWrapper>
        {image.length !== null && (
          <RandomBtn onClick={searchImages}>Get Random Image</RandomBtn>
        )}
      </RandomWrapper>
    </>
  );
};
export default Random;
