import { useState } from 'react';
import { auth, storage, db } from '../Firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { css } from '@mui/material/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@mui/material/FormLabel';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { setDoc, doc } from 'firebase/firestore';
import { FaFileAudio, FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { styled as styles } from '@mui/system';


const Input1 = styles('input')({
  opacity: 0,
});

const Icon = styles('icon')({
  border: 'none',
	display: 'flex',
	marginTop: '8px',
	cursor: 'pointer',
	padding: '6px 16px',
	borderPadius: '6px',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'darkslategray',
});

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



function MasterAndStemsUpload() {
    const [master, setMaster] = useState("");
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);
    const [onEnter, setOnEnter] = useState(false);
    const uid = auth.currentUser.uid;
  
    const handleMasterChange = (e) => {
        if (e.target.files[0]) {
        setMaster(e.target.files[0]);
        }}

        const handleMasterUpload = () => {
       const storageRef = ref(storage, `HipHop/Exclusive/${uid}/${title}/${master.name}`);
       const uploadTask = uploadBytesResumable(storageRef, master.name);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrl(url)
            alert("Master Upload Successful")
              })
        
            }
        )
          }

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

          const handleDelete = (file) => {
            const updatedFile = [...files];
            updatedFile.splice(files.indexOf(file));
            setFiles(updatedFile);
          }
      
          const handleDrop = (e) => {
            setOnEnter(false);
            for (let i = 0; i < e.target.files.length; i++) {
              const newFile = e.target.files[i];
              setFiles((prevState) => [...prevState, newFile]);
            }}

          const handleUpload = () => {
            const uploadFiles = [];
            files.forEach((file) => {
              const audioRef = ref(storage, `Pop/Exclusive/${uid}/${title}/${file.name}`);
              const uploadTask = uploadBytesResumable(audioRef, file.name);
              uploadFiles.push(uploadTask);
              uploadTask.on('state_changed',(snapshot) => {
                  const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (error) => console.log(error),() => {
                  getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
                    setUrls((prevState) => [...prevState, urls]);
                  });
                }
              );
            }); }



     async function Firestore () {
      handleUpload();
    const usersDocRef = doc(db, `Pop/Exclusive/${uid}/${title}`);
     await setDoc(usersDocRef, {
       uid: uid,
       masterUrl: url,
       title,
       price,}, {merge: true})  
      alert("Your submission is complete");
    
    
    } 

     


    return (
       <div>
         <div style={{
            position: 'relative', 
            top: -65,
            right: -0,
            }}> 
          <TextField 
              placeholder="Enter Title of Instrumental"
              onChange={(e) => {setTitle(e.target.value);}}
              value={title}
              margin="normal"
              fullWidth
            />
            </div> 
            <br/>
            <br/>
            <div style={{
            position: 'relative', 
            top: -120,
            right: -298,
            }}> 
              <TextField 
              placeholder="$1,000-$10,000"
              onChange={(e) => {setPrice(e.target.value);}}
              value={price}
              min="1,000"
              max="10,000"
              margin="normal"
            />
           </div>
            <br />
            <br/>
            <br />
            <div style={{
              position: 'relative',
              left: 9,
              bottom: 175,
            }}>
            <FormLabel>The master instrumental MUST have the producer tag inserted. Click the icon to upload the master only.</FormLabel>
            </div>
         <br />
        
         <div style={{
            position: 'relative', 
            right: -10,
            bottom: 190,}}> 
              <label for="input1"> 
            <Icon>
            <UploadFileIcon />
            </Icon>
            </label>
            <Input1 
            accept=".wav" 
            id="input1" 
            type="file" 
            onChange={handleMasterChange}/>
            </div> 
            <div style={{
            position: 'relative', 
            right: -350,
            bottom: 200,}}> 
            <Submit onClick={handleMasterUpload}>Upload</Submit>
            </div>
<br/>

<div style={{
            position: 'relative', 
            right: -15,
            bottom: 200,}}> 
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
              <Submit onClick={Firestore}>Upload</Submit>
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
      </div>      
    )
}

export default MasterAndStemsUpload
