import {  useEffect, useState } from 'react';
import axios from 'axios';
import SongForm from '../Beats/Components/SongForm';
import Song from '../Beats/Components/Songs';
import './HH2.css';

  
function HH2() {
    const [songs, setSongs] = useState([])

    const getAllSongs = async () => {
      try {
        const { data } = await axios.get( "http://localhost:8080/api/songs")
        setSongs(data.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getAllSongs()
    }, []) 

  


    return (
        <div className="container">
          <SongForm />
          <div className='songs_container' >
            {songs.map((song) => (
                    <Song song={song} key={song._id} />
            ))}
          </div>
    </div>
    )
}

export default HH2
