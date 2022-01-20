import React from 'react';
import styled from 'styled-components';
import { deviceSize } from '../components/DeviceSize';
import { PageMars } from '../components/PageMars';
import { Footer } from '../components/PageFooter';

const Mars = styled.div`
  width: 100%;
  padding: 2em;
  display: flex;
  background-color: #000;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export default function Other(props) {
  return (
    <PageMars>
        <Mars>
        </Mars>
        <Footer />
    </PageMars>
  );
}  