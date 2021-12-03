import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { auth, db } from '../Firebase';
import {  doc, getDoc } from "firebase/firestore";
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, Fa500Px } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';

const Background = styled.div`
  width: 100%
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 850%;
  top: -33%;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
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


export const UserProfileModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  function UserDetails () {
    const [users,setUsers] = useState([])
	const userUID = auth.currentUser.uid
	const docRef = doc(db, "users", userUID );

	async function userInfo() {
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
				<Avatar id="myimg" src={users.image} alt='avatar' sx={{ width: 180, height: 180, left: 100, top: 4 }}/>
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

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
             <UserDetails />
              <ModalContent>
                


              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
