import React, { useState } from 'react';
import Form from '../../Form/Form';
import Navbar from '../../Navbar/Navbar';
import SideBar from '../../SideBar/SideBar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Form />
    </>
  );
};
export default Home;
