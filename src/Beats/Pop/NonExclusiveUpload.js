import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { auth, storage, db } from '../Firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { setDoc, doc } from 'firebase/firestore';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import UploadFileIcon from '@mui/icons-material/UploadFile';


const Form = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
  z-index: 1000;
  left: 45px;
  top: 1px;
`;

const Button = styled.button`
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

const Input1 = styled('input')({
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

function NonExclusiveUpload() {
  const [open, setOpen] = useState(false);
  const [master, setMaster] = useState("");
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState();
    
    const [price, setPrice] = useState();
    const uid = auth.currentUser.uid;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMasterChange = (e) => {
    if (e.target.files[0]) {
    setMaster(e.target.files[0]);
    }
   const storageRef = ref(storage, `Instrumentals/NonExclusive/${uid}/${title}`);
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
        alert("Upload Successful");
          })
    
        }
    )
      }
  
      async function Firestore () {
        const usersDocRef = doc(db, `Instrumentals/NonExclusive/${uid}/${title}`);
         await setDoc(usersDocRef, {
           uid: uid,
           masterUrl: url,
           title,
           price,}, {merge: true})  } 
    
        return (
    
            <MuiThemeProvider>
            <>
            <div
        style={{
          display: 'flex',
          alignItems: 'center',
          
      }}>
        <div>
        <Tooltip placement="right" arrow
        title={
            <Typography color="inherit">
            {"Instrumental can only be sold a total of 4 times to unsubsribed buyers and once to a subscribed buyer. For this reason, you must select a price for this instumental between $100 - $500."}
        </Typography>
        }
      >
        <Button  onClick={handleClickOpen}>Non Exclusive Upload </Button>
        </Tooltip>
        </div>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth='md'
          >
            
            <DialogContent
              style={{height:'450px'}}>
                 <Form>
                 <div style={{
            position: 'relative', 
            top: -20,
            right: 0,
            }}> 
            <DialogTitle id="max-width-dialog-title">Non Exclusive Upload</DialogTitle>
            </div>
                
         <div style={{
            position: 'relative', 
            top: -45,
            right: 0,
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
            top: -90,
            right: 0,
            }}> 
              <TextField 
              placeholder="$100-$500"
              onChange={(e) => {setPrice(e.target.value);}}
              value={price}
              min="100"
              max="500"
              margin="normal"
            />
           </div>

         
            <br/>
            <br />
            <br />
            <br/>
            <br />
            <div style={{
              position: 'relative',
              left: 0,
              bottom: 160,
            }}>
            <FormLabel>The master instrumental MUST have the producer tag inserted. Click the icon to upload the master only.</FormLabel>
            </div>
         <br />
        
         <div style={{
            position: 'relative', 
            right: -10,
            bottom: 170,}}> 
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
                </Form>
                <div style={{
            position: 'relative', 
            right: -420,
            bottom: 180,}}>   
                <Submit onClick={Firestore}>Upload</Submit>
                </div>
                </DialogContent>
              </Dialog>
            </>
          </MuiThemeProvider>
        )
}

export default NonExclusiveUpload