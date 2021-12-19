import { getStorage, ref, listAll } from "firebase/storage";
import { auth } from '../Firebase'
import styled from 'styled-components';
import ExclusiveUpload  from '../Beats/ExclusiveUpload';
import NonExclusiveUpload from '../Beats/NonExclusiveUpload';

const Mid = styled.div`
position: absolute;
top: 100px;
left: 450px;
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
          <div style={{
            textAlign: 'center',
            alignItems: "center"}}>
          <h3>Upload Your Instrumental</h3>
            <p>Hoover over each option for more info before choosing one.</p>
            </div>
            <div
             style={{
              position: "absolute",
              top: 88,
              right: 280,
            }}>
          <ExclusiveUpload/>
          </div>
          <div
          style={{
            position: "absolute",
            top: 88,
            right: 80,
          }}>
          <NonExclusiveUpload />
          </div>
        </Mid>
    )
}

export default MiddleOfDash
