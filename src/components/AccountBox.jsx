import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AuthContext } from './Context';
import { SignupForm } from './FormSignup';
import { LoginForm } from './FormLogin';

const Box = styled.div`
  margin: 2em;
  width: 300px;
  opacity: 0.98;
  display: flex;
  overflow: hidden;
  min-height: 550px;
  position: relative;
  border-radius: 19px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
`;
const Top = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  padding: 0 1.8em;
  padding-bottom: 2em;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const BackDrop = styled(motion.div)`
  top: -290px;
  left: -70px;
  width: 160%;
  height: 550px;
  border-radius: 50%;
  position: absolute;
  transform: rotate(60deg);
  background: #264653; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2ebf91, #264653); 
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2ebf91, #264653); 
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 22px;
  flex-direction: column;
  align-items: flex-start;
`;
const HeaderText = styled.h2`
  margin: 0;
  color: #fff;
  z-index: 10;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
`;
const SmallText = styled.h5`
  margin: 0;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.24;
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2em;
  padding: 0 1.7em;
  align-items: center;
  flex-direction: column;
`;
const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '160%',
    height: '550px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
};
const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const { initialActive } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(initialActive ? initialActive : 'login');
  const playExpandingEffect = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };
  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };
  const switchToSignup = () => {
    playExpandingEffect();
    switchActive('signup');
  };
  const switchToLogin = () => {
    playExpandingEffect();
    switchActive('login');
  };
  const contextValue = {
    switchToSignup,
    switchToLogin,
    playExpandingEffect,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <Box>
        <Top>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
          />
          {active === 'login' && (
            <>
              <Header>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
              </Header>
              <SmallText>Please sign-in to continue!</SmallText>
            </>
          )}
          {active === 'signup' && (
            <>
              <Header>
                <HeaderText>Create </HeaderText>
                <HeaderText>Account</HeaderText>
              </Header>
              <SmallText>Please sign-up to continue!</SmallText>
            </>
          )}
        </Top>
        <Inner>
          {active === 'login' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </Inner>
      </Box>
    </AuthContext.Provider>
  );
}