import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IoSearch } from 'react-icons/io5';

const SearchBar = styled(motion.div)`
  width: 36em;
  height: 1.8em;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;
const InputMars = styled.div`
  width: 100%;
  display: flex;
  padding: 2px 15px;
  min-height: 1.8em;
  position: relative;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: #12112e;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;
const Icon = styled.span`
  color: #bebebe;
  margin-top: 6px;
  font-size: 22px;
  margin-right: 10px;
  vertical-align: middle;
`;
export function Search(props) {
  const inputRef = useRef();
  const setSearch = useState('');
  const changeHandler = (e) => {
    e.preventDefault();
    if(e.target.value.trim() === '');
    setSearch(e.target.value);
  };
  return (
    <SearchBar>
      <InputMars>
        <Icon>
          <IoSearch />
        </Icon>
        <Input placeholder='Search by Artist/Title/Genre' ref={inputRef} onChange={changeHandler} />
      </InputMars>
    </SearchBar>
  );
}