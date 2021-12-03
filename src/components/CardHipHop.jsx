import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Mars = styled.div`
  color: #fff;
  width: 300px;
  height: 100px;
  display: flex;
  margin-top: 4em;
  overflow: hidden;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: #264653;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
`;
const CircleMars = styled.div` 
  width: 44%;
  height: 100%;
  border-radius: 25px;
`;
const Circle = styled.div`
  width: 222px;
  height: 222px;
  display: flex;
  margin-left: 10.5em;
  margin-top: 0em;
  border-radius: 50%; 
  background-color: #222;
`;
const MarsLink = styled(Link)`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  margin-left: -3.5em;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;
export function HipHopCard(props) {
  return (
    <Mars>
      <CircleMars><Circle /></CircleMars>
      <MarsLink to='/HipHop'>Hip-Hop/Rap</MarsLink>
    </Mars>
  );
}