import styled from 'styled-components';
import React from 'react';
import { deviceSize } from '../components/DeviceSize';
import { HipHopCard } from '../components/CardHipHop';
import { RBSoulCard } from '../components/CardRBSoul';
import { OtherCard } from '../components/CardOther';
import { PageTitle } from '../components/PageTitle';
import { PageMars } from '../components/PageMars';
import { Footer } from '../components/PageFooter';
import { PopCard } from '../components/CardPop';
import { PageTop } from '../components/PageTop';
import { PageAd } from '../components/PageAd';

const Mars = styled.div`
  width: 100%;
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
  max-width: ${deviceSize.laptop}px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;
export default function Home(props) {
  return (
    <PageMars>
      <PageTop>
        <Mars>
          <PageTitle />
        </Mars>
        <Mars>
          <HipHopCard /><RBSoulCard />
        </Mars>
        <Mars>
          <PopCard /><OtherCard />
        </Mars>
      </PageTop>
      <Mars>
        <PageAd />
      </Mars>
      <Footer />
    </PageMars>
  );
}