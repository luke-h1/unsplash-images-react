import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Unsplash, { toJson } from 'unsplash-js';
import Loading from '../Loading/Loading';
import {
  FormWrapper,
  Image,
  ImageWrapper,
  FormTitle,
  SearchBox,
  SearchButton,
  ClearButton,
} from './FormElements';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_CLIENT_ID,
});

const Form = ({ title }) => {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const searchPhotos = async () => {
    setLoading(true);
    unsplash.search
      .photos(text)
      .then(toJson)
      .then((json) => {
        console.log(json.results);
        const data = json.results.map((item) => (
          <Image src={item.urls.regular} alt={item.description} key={item.id} />
        ));
        setResult(data);
        setLoading(false);
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

  const clearResults = () => {
    setText('');
    setResult('');
    setLoading(false);
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
        {loading ? <Loading /> : null}
        {result.length > 0 && (
          <ClearButton onClick={clearResults}>Clear Results</ClearButton>
        )}
        {/* length is > 0 return clear images button else don't */}
        <ImageWrapper>{result}</ImageWrapper>
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
