import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100%;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
`;
export function PageMars(props) {
  return <Page>{props.children}</Page>;
}
export const InnerPage = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  min-height: 70vh;
  align-items: center;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
`;