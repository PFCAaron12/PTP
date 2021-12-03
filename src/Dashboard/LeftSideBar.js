import "./LeftSideBar.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import { auth } from '../Firebase'
import { ModalProfile } from "../EditProfile/ModalProfile";


function LeftSideBar() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    const handleSignOut = async () => {
      await signOut(auth);
    }

    const history = useHistory() 
    function goToChat() {
     history.push ("/Chat")
    }

    return (
        <div className="sidebar">
            <nav>
  <ul>
    <li>
      <div class="editProfile-icon">
      <AccountCircleOutlinedIcon className="mui" onClick={openModal}/>
      <ModalProfile showModal={showModal} setShowModal={setShowModal} />
      </div>
    </li>
    <li>
      <div class="messages-icon">
      <MessageOutlinedIcon className="mui" onClick={goToChat}/>
      </div>  
    </li>
    <li>
      <div class="subscription-icon">  
      <AddBoxOutlinedIcon className="mui"/></div>
    </li>
    <li>
      <div class="purchases-icon">
      <CreditCardOutlinedIcon className="mui"/></div>
    </li>
    <li>
      <div class="logout-icon">
      <ExitToAppOutlinedIcon className="mui" onClick={handleSignOut}/></div>
    </li>
  </ul>
</nav>
        </div>
       
    )
}

export default LeftSideBar
