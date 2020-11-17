import React, { useState } from 'react';
import {
  FormWrapper,
  Image,
  ImageWrapper,
  FormTitle,
  SearchBox,
  SearchButton,
} from './FormElements';

import axios from 'axios';
import PropTypes from 'prop-types';
const Form = ({ title }) => {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || text === null) {
      // show error here
      return;
    } else {
      searchImages(text);
      setText('');
    }
  };

  const searchImages = async (text) => {
    // set loading true
    const API_URL = `https://api.unsplash.com/search/users?page=1&query=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
    const res = await axios.get(API_URL);
    console.log(res.data);
  };

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
        {/* image Scomponent */}

        <ImageWrapper>
          <Image src="" alt="" />
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
