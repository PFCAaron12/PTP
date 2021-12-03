import React from 'react';
import styled from 'styled-components';
import Logo2 from '../images/Logo2.png';
import { Link } from 'react-router-dom';
import { deviceSize } from './DeviceSize';
import { Marginer } from './Marginer';
import { Button } from './Reusable';

const AdMars = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #264653;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;
const TitleMars = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;
const TopTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  margin-left: 7em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;
const Header = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;
const AdImage = styled.div`
  width: 40em;
  height: 30em;
  margin-right: 2em;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;
const LinkMars = styled(Link)`
  color: #fff;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #0C090A;
  }
`;

export function PageAd(props) {
  return (
    <AdMars>
      <Row>
        <TitleMars>
          <TopTitle>Why Patch The Producer ?</TopTitle>
            <Marginer direction='vertical' margin='1em' />
            <Row>
              <LinkMars>
                <Button size={16}>About</Button>
              </LinkMars>
            </Row>
            <Marginer direction='vertical' margin='2em' />
          <Row>
            <TitleMars>
              <Header>Users are only charged $1.00 per transaction</Header>
              <Marginer direction='vertical' margin='1em' />
              <Header>Your piece of the pie increase with your value</Header>
              <Marginer direction='vertical' margin='1em' />
              <Header>Users are empowered with the ability to request and vote on annual upgrades</Header>
            </TitleMars>
            <TitleMars>
              <Header>We attract more serious artists and producers knowing beats sales/leases are capped at 6</Header>
              <Marginer direction='vertical' margin='1em' />
              <Header>All purchases grants artist unlimited streams, sales, performances and more</Header>
              <Marginer direction='vertical' margin='1em' />
              <Header>Serious hardworking artist can opt to save by bundling beats with a subscription</Header>
            </TitleMars>
          </Row>
          <Marginer direction='vertical' margin='1em' />
            <LinkMars to='/Signup'>
              <Button size={16}>Sign Up</Button>
            </LinkMars>
        </TitleMars>
        <AdImage>
          <img src={Logo2} alt='join-as-artist' />
        </AdImage>
      </Row>
    </AdMars>
  );
}