import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Mars = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
`;
const DropdownMenu = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  position: absolute;
  &:hover {
    color: #000;
  }
`;
const Label = styled.span`
  margin-left: 12px;
`;
const DropdownLink = styled(Link)`
  color: #fff;
  padding: 12px;
  display: flex;
  font-size: 22px;
  background: #000;
  align-items: center;
  text-decoration: none;
  position: relative;
  &:hover {
    background: #2a9d8f;
    cursor: pointer;
  }
`;

export const Dropdown = ({ genre }) => {
  const menuRef = useRef();
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && subnav) {
      setSubnav(false);
    }
  }, [setSubnav, subnav]);
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  useEffect(() => {
    const handleClose = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setSubnav(false);
      }
    }
    document.addEventListener('mousedown', handleClose);
    return() => {
      document.removeEventListener('mousedown', handleClose);
    }
  });
  return (
    <Mars ref={menuRef}>
      <DropdownMenu to={genre.path} onClick={genre.subNav && showSubnav}>
        <Mars>
          {genre.icon}
          <Label>{genre.title}</Label>
        </Mars>
      </DropdownMenu>
      {subnav && genre.subNav.map((genre, index) => {
        return (
          <DropdownLink to={genre.path} key={index}>
            {genre.icon}
            <Label>{genre.title}</Label>
          </DropdownLink>
        );
      })}
    </Mars>
  );
};