import React from 'react';
import styled from 'styled-components';
import { deviceSize } from './DeviceSize';

const Mars = styled.div`
  display: flex;
  margin-top: 2em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;
const Title = styled.h2`
  color: #fff;
  font-size: 44px;
  margin-top: .2em;
  font-weight: 900;
  line-height: 1.3;
  text-align: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

export function PageTitle(props) {
  return (
    <Mars>
      <Title>"A higher quality beat market that rewards you as a partner"</Title>
    </Mars>
  );
}