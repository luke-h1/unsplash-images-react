import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Unsplash, { toJson } from 'unsplash-js';

import {
  FormWrapper,
  Image,
  ImageWrapper,
  FormTitle,
  SearchBox,
  SearchButton,
} from './FormElements';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_CLIENT_ID,
});

const Form = ({ title }) => {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const searchPhotos = async () => {
    unsplash.search
      .photos(text)
      .then(toJson)
      .then((json) => {
        console.log(json.results);
        const data = json.results.map((item) => <Image src={item.urls.full} alt='I work'/>);
        setResult(data);
      });
  };

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || text === null) {
      console.log('show the error here');
    } else {
      searchPhotos(text);
      setText('');
    }
  };

  // const searchImages = async (text) => {
  //   setLoading(true);
  //   // set loading true
  //   const API_URL = `https://api.unsplash.com/search/users?page=1&query=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
  //   const res = await axios.get(API_URL);
  //   console.log(res.data)
  // };

  return (
    <>
      <FormWrapper>
        <FormTitle>{title}</FormTitle>
        <form onSubmit={onSubmit}>
          <SearchBox
            type="text"
            name="text"
            placeholder="search images"
            value={text}
            onChange={onChange}
            className="form-input"
          />
          <SearchButton type="submit" value="submit" className="btm" />
        </form>
        {/* length is > 0 return clear images button else don't */}
        {loading === 'true' ? <h1>Loading</h1> : null}
        <ImageWrapper>
          {result}
        </ImageWrapper>
      </FormWrapper>
    </>
  );
};

Form.defaultProps = {
  title: 'Images',
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
