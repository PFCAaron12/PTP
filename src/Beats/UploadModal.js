import styled, { css } from 'styled-components';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { FaFileAudio, FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import { useState, useRef, useCallback, useEffect, } from 'react';
import { IoClose } from 'react-icons/io5';
import { storage } from "../Firebase";
import HeadphonesMic from '../images/HeadphonesMic.png';
import { getAuth } from '@firebase/auth';
import UploadBeats from './UploadBeats'

const Mars = styled.div`
  top: 0px;
  left: 327px;
  width: 40vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0,0, 0.8);
`;
const ModalMars = styled.div`
  width: 77%;
  height: 95%;
  color: #000;
  display: flex;
  background: #fff;
  overflow: hidden;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 22%;
  height: 100%;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Loadprog = styled.h3`
  display: flex;
  flex-direction: column;
`;
const Dropzone = styled.form`
  width: 400px;
  height: 202px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  background-color: #eee;
  border: #aaa 2px dashed;
  justify-content: center;
  ${({ onEnter }) => onEnter && css` border-color: #000; `}
`;
const FaCloudUpload = styled(FaCloudUploadAlt)`
  width: 200px;
  height: 200px;
  color: #2a9d8f;
`;
const Text = styled.p`
  color: #ccc;
  font-weight: 600;
  text-align: center;
`;
const Input = styled.input`
  opacity: 0;
  width: 400px;
  height: 200px;
  cursor: pointer;
  position: absolute;
`;
const Submit = styled.button`
  width: 28%;
  color: #fff;
  padding: 2px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all, 240ms ease-in-out;
  border-radius: 10px 10px 10px 10px;
  background: #264653;
  &:hover {
    background-color: #2a9d8f;
  }
`; 
const CloseButton = styled(IoClose)`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;
const Title = styled.h3`
`;
const FilePreview = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const PreviewItem = styled.div`
  width: 300px;
  height: 44px;
  display: flex;
  margin-bottom: 4px;
  border-radius: 6px;
  align-items: center;
  background-color: #ccc;
  justify-content: space-between;
`;
const ItemInfo = styled.div`
  display: flex: 
  flex-direction: column;
`;
const Info = styled.p`
  font-size: 12px;
`;
const WavFileIcon = styled(FaFileAudio)`
  width: 22px;
  height: 44px;
  color: #264653;
  margin-left: 4px;
`;
const Remove = styled(FaTrashAlt)`
  color: #000;
  cursor: pointer;
  margin-right: 4px;
`;

export const UploadModal = ({isOpen, setIsOpen}) => {
  const [onEnter, setOnEnter] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const marsRef = useRef('');

  const reset = () => {
    marsRef.current.value = '';
    setIsOpen(false);
    setProgress(0);
    setFiles([]);
  }
  
  const close = (e) => {
    if(marsRef.current === e.target) {
        setIsOpen(false);
      }
    }
  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [setIsOpen, isOpen]);
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen ? (
        <Mars onclick={close} ref={marsRef}>
          <ModalMars isOpen={isOpen} setIsOpen={setIsOpen}>
            <UploadBeats />
            <CloseButton onClick={() => setIsOpen(prev => !prev)} />
          </ModalMars>
        </Mars>
      ) : null}
    </>
  );
};