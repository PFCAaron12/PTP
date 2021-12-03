import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h2`
  margin: 16;
  font-size: 20px;
  color: #fff;
  font-weight: 800;
  margin-left: 1em;
  &:hover {
    color: #0C090A;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
export function Logo(props) {
  return (
    <StyledLink to='/'>
      <Title>PatchTheProducer.com</Title>
    </StyledLink>
  );
}