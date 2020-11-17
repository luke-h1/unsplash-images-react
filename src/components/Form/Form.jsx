import React, { useState } from 'react';
import { image, imageWrapper } from './FormElements';

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
      <div className="form-wrapper">
        <div className="form-title">{title}</div>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="search images"
            value={text}
            onChange={onChange}
            className="form-input"
          />
          <input type="submit" value="submit" className="btm" />
        </form>
        {/* length is > 0 return clear images button else don't */}
        {/* image component */}

        <imageWrapper>
          <image src="" alt="" />
        </imageWrapper>
      </div>
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
