import { useState } from 'react'
import styled from 'styled-components';
import ExclusiveUpload  from '../Beats/HipHop/ExclusiveUpload';
import NonExclusiveUpload from '../Beats/HipHop/NonExclusiveUpload';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth } from '../Firebase'

const Mid = styled.div`
position: absolute;
top: 100px;
left: 450px;
  color: white;
  width: 500px;
  height: 300px;
`;

function HH() {

    return (
        <div>
            <Mid id="div">
          <div style={{
            textAlign: 'center',
            alignItems: "center"}}>
          <h3>Upload Your Instrumental</h3>
            <p>Hoover over each option for more info before choosing one.</p>
            </div>
            <div
             style={{
              position: "absolute",
              top: 88,
              right: 280,
            }}>
          <ExclusiveUpload/>
          </div>
          <div
          style={{
            position: "absolute",
            top: 88,
            right: 80,
          }}>
          <NonExclusiveUpload />
          </div>
        </Mid> 
       <div style={{
         position: 'relative',
         top: 200,
         right: -540,
         zIndex: 1,
       }}>
        </div>
        </div>
    )
}

export default HH
