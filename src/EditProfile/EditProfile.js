import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from '../Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import styled from 'styled-components';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';



const Mars = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
  z-index: 1000;
  left: 45px;
  top: 1px;
`;
const Input = styled.input`
	width: 340px;
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
const Location = styled(MdOutlineLocationOn)`
	width: 22px;
	height: 22px;
	color: white;
	margin-right: 4px;
`;
const Facebook = styled(FaFacebookSquare)`
	width: 22px;
	height: 22px;
	color: white;
	margin-right: 4px;
`;
const Instagram = styled(FaInstagram)`
	width: 22px;
	height: 22px;
	color: white;
	margin-right: 4px;
`;
const Twitter = styled(FaTwitter)`
	width: 22px;
	height: 22px;
	color: white;
	margin-right: 4px;
`;
const Youtube = styled(FaYoutube)`
	width: 22px;
	height: 22px;
	color: white;
	margin-right: 4px;
`;
const InputI = styled.input`
  opacity: 0;
  width: 176px;
  height: 176px;
  cursor: pointer;
  position: absolute;
`;

function EditProfile() {
    const [selectedFile, setSelectedFile] = useState();
    const [image, setImage] = useState();
    const [location, setLocation] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [youtube, setYoutube] = useState("");


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
         setSelectedFile(e.target.files[0])
       }

       useEffect(() => {
        if (!selectedFile) {
            setImage(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setImage(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

       async function uploadToDB() {
        const storage = getStorage();
        const metadata = {
        contentType: ('image/jpeg', 'image/jpg', 'image/png')};
  
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'images/' + selectedFile.name);
  const uploadTask = uploadBytesResumable(storageRef, selectedFile.name, metadata);
  
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, 
    (error) => {
     alert("Image not uploaded.")
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((image) => {
        setImage(image)
      });
    }
  ); 
   
      const auth = getAuth()
      const user = auth.currentUser.uid
      const usersDocRef = doc(db, "users/" + user);
      await setDoc(usersDocRef, {
       uid: user,
       location, 
       facebook,
       instagram,
       twitter,
       youtube,
       image, }, {merge: true})   
    }  
   
   
     return (
         <div>
              <div className="image-upload">            
  	<Mars>
      	<label for="file-input"> 
			<Avatar id="myimg" src={image} alt='avatar' sx={{ width: 180, height: 180 }}/>
		 </label> 
			<InputI type='file' id="file-input" accept='image/*' onChange={onSelectFile}/>
		</Mars>
            </div>
     <div className="main">
     <Mars>
			<Button>
				<Location />
				<Input type='text' placeholder='City, State' value={location}
         onChange={(e) => {setLocation(e.target.value);}} />
			</Button>
			<Button>
				<Facebook />
				<Input type='text' placeholder='Enter Your Facebook' 
         onChange={(e) => {setFacebook(e.target.value);}} />
			</Button>
			<Button>
				<Instagram />
				<Input type='text'  placeholder='Enter Your Instagram'
         onChange={(e) => {setInstagram(e.target.value);}} />
			</Button>
			<Button>
				<Twitter />
				<Input type='text'  placeholder='Enter Your Twitter' 
         onChange={(e) => {setTwitter(e.target.value);}} />
			</Button>
			<Button>
				<Youtube />
				<Input type='text'  placeholder='Enter Your YouTube' 
         onChange={(e) => {setYoutube(e.target.value);}} />
			</Button>
			<Button onClick={uploadToDB}>Save</Button>
		</Mars>
     </div>
         </div>
	)
        
     
 }

 export default EditProfile
 
