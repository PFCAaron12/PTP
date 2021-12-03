import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from './DeviceSize';
import TopSectionImg from '../images/HomeLogo.png';

const Top = styled.div`
  width: 100%;
  height: 650px;
  margin-top: 50px;
  background: url(${TopSectionImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export function PageTop(props) {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <Top>
      <Background>
        {children}
        <Inner>
          {!isMobile}
        </Inner>
      </Background>
    </Top>
  );
}