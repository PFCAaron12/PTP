import styled from 'styled-components';
import React, { useState } from 'react';

export const Mars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const List = styled.ul`
  list-style: none;
  overflow-x: auto;
`;
export const ListItem = styled.li`
  display: inline-block;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;
export const Input= styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
  transition: all, 200ms ease-in-out;
  border-bottom: 1.4px solid transparent;
  border: 1px solid rgba(200, 200, 200, 0.03);
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #5963c3;
  }
`;
export const Submit = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 10%;
  transition: all, 240ms ease-in-out;
  border-radius: 100px 100px 100px 100px;
  background: #264653; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2ebf91, #264653); 
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2ebf91, #264653); 
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.03);
  }
`;
export const Link = styled.a`
  margin: 10px 0;
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  color: rgba(170, 170, 170, 1);
`;

export const BoldLink = styled.a`
  margin: 0 3px;
  color: #5963c3;
  font-size: 11px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
`;
const ButtonMars = styled.button`
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 1em;
  font-weight: 600;
  border-radius: 3px;
  background-color: #2a9d8f;
  transition: all 200ms ease-in-out;
  font-size: ${({ size }) => (size ? size + 'px' : '18px')};
  &:hover {
    background-color: #21867a;
  }
  &:focus {
    outline: none;
  }
`;
export function Button(props) {
  const { size } = props;
  return (
    <ButtonMars size={size} className={props.className}>
      {props.children}
    </ButtonMars>
  );
}
const SliderMars = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    -webkit-appearance: none;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    -moz-appearance: none;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
  }
`;
export function Slider(props) {
  const [value, setValue] = useState(50);
  return <SliderMars value={value} onChange={(e) => setValue(e.target.value)} />;
};