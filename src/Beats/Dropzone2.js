import { FaFileAudio, FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, auth } from "../Firebase";
import { useState } from "react"

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
  color: darkslategray;
`;
const Text = styled.p`
  color: darkslategray;
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
border: none;
display: flex;
margin-top: 8px;
cursor: pointer;
padding: 6px 16px;
border-radius: 6px;
align-items: center;
justify-content: center;
background: darkslategray;
`; 

const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
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

function Dropzone2() {
    const [files, setFiles] = useState([]);
    const [onEnter, setOnEnter] = useState(false);
    
    const onDragEnter = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setOnEnter(true);
    };

    const onDragExit = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setOnEnter(false);
    };

    const onDrop = (e) => {
      e.stopPropagation();
      setOnEnter(false);
    };

    const handleDrop = (e) => {
      setOnEnter(false);
      for (let i = 0; i < e.target.files.length; i++) {
        const newFile = e.target.files[i];
        setFiles((prevState) => [...prevState, newFile]);
      }
    };
    const handleUpload = () => {
      const user = auth.currentUser.uid
      const uploadFiles = [];
      files.forEach((file) => {
        const audioRef = ref(storage, `beats/Exclusive/${user}/${file.name}`);
        const uploadTask = uploadBytesResumable(audioRef, file);
        uploadFiles.push(uploadTask);
        uploadTask.on('state_changed',(snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          },
          (error) => console.log(error),() => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                alert("Upload Successful")
            });
          }
        );
      });
  
    };
  
   
  
  
    const handleDelete = (file) => {
      const updatedFile = [...files];
      updatedFile.splice(files.indexOf(file));
      setFiles(updatedFile);
    }


    return (
        <div>
            <Col>
             <Dropzone
                onDrop={onDrop}
                onEnter={onEnter}
                onDragExit={onDragExit}
                onDragEnter={onDragEnter}
              >
                <Input 
                  multiple 
                  type='file' 
                  accept='.wav'
                  onChange={handleDrop}
                />
                <FaCloudUpload />
                <Text>
                  Drag & Drop all .wav stems here or click to browse
                </Text>
              </Dropzone>
              
              <br/>
              <Submit onClick={handleUpload}>Upload</Submit>
              </Col>
              
              <FilePreview>
            {
              files.length > 0 ? (
                <FilePreview>
                  {
                    files.map((item, index) => (
                      <PreviewItem key={index}>
                        <WavFileIcon />
                        <ItemInfo>
                          <Info>{item.name}</Info>
                        </ItemInfo>
                        <Remove onClick={() => handleDelete(item)} />
                      </PreviewItem>
                    ))
                  }
                </FilePreview>
              ) :null
            }
            </FilePreview>
        </div>
    )
}

export default Dropzone2
