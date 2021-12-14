import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storageRef } from '../Firebase'
import styled from 'styled-components';


const Mid = styled.div`
position: absolute;
top: 200px;
left: 300px;
  color: white;
  width: 500px;
  height: 300px;

`;


function MiddleOfDash() {
    
    const user = auth.currentUser.uid
    const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, `Beats/${user}/`);

// Find all the prefixes and items.
 listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
       // All the items under listRef.
       console.log(itemRef)
     return itemRef
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error)
  }); 


    return (
        <Mid id="div">
        </Mid>
    )
}

export default MiddleOfDash
