import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_CLIENT_ID,
});

export default function SearchPhotos() {
  const [query, setQuery] = useState('');
  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        console.log(json);
      });
  };
}
