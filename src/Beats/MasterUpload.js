import { useState } from 'react';
import { auth, storage } from '../Firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { styled } from '@mui/material/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Input = styled('input')({
  opacity: 0,
});

const Icon = styled('icon')({
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


function MasterUpload() {
    const [master, setMaster] = useState("");
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState();
    const [genre, setGenre] = useState();
    const [price, setPrice] = useState();
    const uid = auth.currentUser.uid;
  
    const handleMasterChange = (e) => {
        if (e.target.files[0]) {
        setMaster(e.target.files[0]);
        }
  
       const storageRef = ref(storage, `beats/Exclusive/${uid}/${master.name}`);
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
                setUrl(url);
                alert("Upload Successful")
              });
          }
        );
      }
    


    return (
       <div>
         <div style={{
            position: 'absolute', 
            top: 35,
            right: 375,
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
            position: 'absolute', 
            top: 80,
            right: 375,
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

         
            <br/>
            <br />
          <div style={{
            position: 'absolute', 
            top: 135,
            right: 405}}>
            <Box sx={{ minWidth: 120 }}>
                <InputLabel id="genreLabel">Select a Genre</InputLabel>
                <Select sx={{ minWidth: 120 }}
                    labelId="dropDownlabel"
                    id="dDLabel"
                    value={genre}
                    label="Genre"
                    onChange={(e) => {setGenre(e.target.value);}}
            >
                <MenuItem value="HipHop">HipHop</MenuItem>
                <br/>
                <MenuItem value="R&B">R&B</MenuItem>
                <br />
                <MenuItem value="Pop">Pop</MenuItem>
                <br />
                <MenuItem value="Other">Other</MenuItem>
                <br />
                </Select>
                </Box>
                </div>
            <br />
            <br/>
            <br />
            <div style={{
              position: 'absolute',
              left: 100,
              bottom: 340,
            }}>
            <FormLabel>The master instrumental MUST have the producer tag inserted. Click the icon to upload the master only.</FormLabel>
            </div>
         <br />
        
         <div style={{
            position: 'absolute', 
            right: 330,
            bottom: 275,}}> 
              <label for="input1"> 
            <Icon>
            <UploadFileIcon />
            </Icon>
            </label>
            <Input 
            accept=".wav" 
            id="input1" 
            type="file" 
            onChange={handleMasterChange}/>
            </div> 
      </div>      
    )
}

export default MasterUpload
