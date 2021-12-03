import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { AccountBox } from '../components/AccountBox';
import { PageMars } from '../components/PageMars';
import { Footer } from '../components/PageFooter';
import SignupImg from '../images/SignupLogo.png'

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  background: url(${SignupImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
`;

export default function Signup(props) {
  const { action } = useParams();
  return (
    <PageMars>
      <Container> 
        <AccountBox initialActive={action} /> 
      </Container>
      <Footer />
    </PageMars>
  );
}