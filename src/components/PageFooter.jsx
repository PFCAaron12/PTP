import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { deviceSize } from './DeviceSize';
import { Logo } from './Logo';

const FooterMars = styled.div`
  width: 100%;
  display: flex;
  min-height: 210px;
  background: black;
  flex-direction: column;
  justify-content: space-between;
  border-top: 0.4px solid rgb(0, 0, 0, 0.3);
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  margin-bottom 0em;
`;
const TopLeft = styled.div`
  display: flex;
  margin-left: 1em;
  padding-bottom: 0em;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;
const TopRight = styled.div`
  display: flex;
  margin-left: 8em;
  align-items: center;
  flex-direction: column;
`;
const Bottom = styled.div`
  height: 50px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;
const RightBottom = styled.div`
  display: flex;
`;
const LeftBottom = styled.div`
  display: flex;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const SLink = styled(Link)`
  color: #6f6f6f;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
const Terms = styled.h2`
  margin: 1px;
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
const PrivacyText = styled.h6`
  margin: 0;
  display: flex;
  color: #a3a3a3;
  font-size: 11px;
  margin-top: 5px;
  margin-left: 10px;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;
const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    color: #777777;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

export function Footer(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <FooterMars>
      <Top>
          <TopLeft>
            <Title>Instrumentals</Title>
            <SLink to='/HipHop'>Hip-Hop/Rap</SLink>
            <SLink to='/R&BSoul'>R&B/Soul</SLink>
            <SLink to='/Other'>Other</SLink>
            <SLink to='/Pop'>Pop</SLink>
          </TopLeft>
          <TopLeft>
            <Title>Access</Title>
            <SLink to='/Login'>Login</SLink>
            <SLink to='/Signup'>Sign Up</SLink>
          </TopLeft>
          <TopRight>
            <Title>Terms</Title>
            <Terms>Users are responsible for and own 100% of all the</Terms>
            <Terms>content uploaded. Patch The Producer LLC collects</Terms>
            <Terms>$1.00 from every transaction made on</Terms>
            <Terms>PatchTheProducer.com</Terms>
          </TopRight>
          <TopRight>
            <Title>Contact</Title>
            <Terms>management@patchtheproducer.com</Terms>
          </TopRight>
      </Top>
      <Bottom>
        <LeftBottom>
          <Logo hideLogo color='#8A8A8A' textSize={isMobile ? 20 : 25} />
          <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottom>
        <RightBottom>
          <SocialIcon>
            <FaFacebook />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter />
          </SocialIcon>
        </RightBottom>
      </Bottom>
    </FooterMars>
  );
}