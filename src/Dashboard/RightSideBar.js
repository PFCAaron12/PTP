import styled from 'styled-components';
import { auth, db } from '../Firebase';
import { useState, useEffect } from "react";
import {  doc, getDoc } from "firebase/firestore";
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, Fa500Px } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';

const Mars = styled.div`
	display: flex; 
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 500px;
    width: 400px;
	position: absolute;
	top: 120px;
    right: 100px;
    color: black;
	height: 400px;
	width: 300px;
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
const Username = styled(Fa500Px)`
width: 22px;
height: 22px;
color: white;
margin-right: 4px;
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

export function UserData ()  {
	const [users, setUsers] = useState([])
	const userUID = auth.currentUser.uid
	  
	async function userInfo() {
	const docRef = doc(db, "users", userUID )
	const docSnap = await getDoc(docRef);
	
	if ( docSnap.exists()) {
	setUsers(docSnap.data());
	} else {
    console.log("No such document!");
	}
	}

	useEffect(() => {
		userInfo()
	})



	return (
		
			<Mars>
        	<div className="main" >
				<Button>
				<Username />
				<Input type='text' placeholder={users.displayName}/>
			    </Button>
				<Avatar id="myimg" src={users.image} alt='avatar'sx={{ width: 180, height: 180, left: 100, top: 4 }}/>
				<Button>
				<Location />
				<Input type='text' placeholder={users.location}/>
			    </Button>
				<Button>
				<Facebook />
				<Input type='text' placeholder={users.facebook}/>
			    </Button>
				<Button>
				<Instagram />
				<Input type='text' placeholder={users.instagram}/>
			    </Button>
				<Button>
				<Twitter />
				<Input type='text' placeholder={users.twitter}/>
			    </Button>
				<Button>
				<Youtube />
				<Input type='text' placeholder={users.youtube}/>
			    </Button>
        
			</div>
			</Mars>
		
	)
}