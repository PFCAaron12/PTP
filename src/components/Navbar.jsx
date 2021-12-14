import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaHome, FaShoppingCart, FaFileUpload, FaHeadphonesAlt } from 'react-icons/fa';
import { ModalUpload } from './ModalUpload';
import { deviceSize } from './DeviceSize';
import { Dropdown } from './Dropdown';
import { Marginer } from './Marginer';
import { Search } from './NavSearch';
import { Button } from './Reusable';
import { Logo } from './Logo';
import  {UploadModal}  from '../Beats/UploadModal';

const NavbarMars = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0%;
  align-items: center;
  background-color: #264653;
  justify-content: space-between;
`;
const Mars = styled.div`
  height: 100%;
  display: flex;
  margin-right: 2em;
  align-items: center;
`;
const LinkMars = styled(Link)`
  color: #fff;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #0C090A;
  }
`;
const Icon = styled.div`
  color: #fff;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #0C090A;
  }
`;
const Seperator = styled.div`
  width: 1px;
  min-height: 35%;
  background-color: #fff;
`;
const GenreList = [
  {
    icon: <FaHeadphonesAlt />,
    subNav: [
      {
        title: 'Hip-Hop',
        path: '/HipHop',
        icon: <FaHeadphonesAlt />,
      },
      {
        title: 'R&B/Soul',
        path: '/RBSoul',
        icon: <FaHeadphonesAlt />,
      },
      {
        title: 'Pop',
        path: '/Pop',
        icon: <FaHeadphonesAlt />,
      },
      {
        title: 'Other',
        path: '/Other',
        icon: <FaHeadphonesAlt />,
      }
    ]
  }
];

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(prev => !prev);
  }


  return (
    <NavbarMars>
      <Logo />
      <Search />
      <Mars>
        {!isMobile && <LinkMars to='/'><FaHome size='22px' /></LinkMars>}
        {!isMobile && <Marginer direction='horizontal' margin={35} />}
        {!isMobile && <Icon>{GenreList.map((genre, index) => { return <Dropdown genre={genre} key={index} /> })} </Icon>}
        {!isMobile && <Marginer direction='horizontal' margin={35} />}
        {!isMobile && <Icon><FaFileUpload size='22px' onClick={open}/></Icon>}
        {!isMobile && <Marginer direction='horizontal' margin={20} />}
        {!isMobile && <LinkMars><FaShoppingCart size='22px' /></LinkMars>}
        {!isMobile && <Marginer direction='horizontal' margin={30} />}
        {!isMobile && <Seperator />} 
        <UploadModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Marginer direction='horizontal' margin={30} />
        <LinkMars to='/Signup'>
          <Button size={12} to='/Signup'>Sign Up</Button>
        </LinkMars>
        <Marginer direction='horizontal' margin={15} />
        <LinkMars to='/Login'>Login</LinkMars>
      </Mars>
    </NavbarMars>
  );
}