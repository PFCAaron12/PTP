import styled from 'styled-components';
import React, { useContext } from 'react';
import { FcStart, FcLike } from 'react-icons/fc';
import { AudioState } from '../Beats/HipHop/AudioState';
import { PlayerContext } from './Context';
import { AudioControls } from '../Beats/HipHop/AudioControls';
import UserProfile from '../images/UserProfile.png';



const Mid = styled.div`
position: absolute;
top: 100px;
left: 450px;
  color: white;
  width: 500px;
  height: 300px;
`;

const Mars = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;
const Top = styled.div`
  width 60vw;
  flex-grow: 1;
  display: flex;
  padding-bottom: 120px;
  flex-direction: column;
  justify-content: space-evenly;
`;
const HeaderMars = styled.h3`
  margin: 0;
  color: white;
  padding: 10px;
  font-weight: bold;
  background: black;
`;
const Plist = styled.div`
  flex: 1 1;
  display: flex;
  overflow-y: auto;
  background: black;
  flex-direction: column;
`;
const List = styled.ul`
  flex: 1 1;
  padding: 0;
  width: 70vw;
  display: flex;
  margin: 0 auto;
  list-style: none;
  flex-direction: column;
`;
const ListItems = styled.li`
  margin: 2px;
  display: flex;
  cursor: pointer;
  font-weight: 450;
  user-select: none;
  align-items: center;
  &:hover {
    background: #264653;
  }
`;
const PlayIcon = styled(FcStart)`
  width: 45px;
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
`;
const AudioMeta = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  color: #fff;
  padding: 0 10px;
  font-weight: 600;
  font-size: 1.125rem;
`;
const Artist = styled.span`
  color: grey;
  padding: 0 10px;
  font-weight: normal;
  font-size: 0.875rem;
`;
const Button = styled.button`
  flex: 1;
  width: 32px;
  height: 22px;
  color: white;
  border: none;
  display: flex;
  margin: 0 10px;
  cursor: pointer;
  background: none;
  user-select: none;
  justify-content: center;
  -webkit-user-select: none;
`;
const CoverImg = styled.div`
  width: 100%;
  height: 33%;
  background: black;
  img {
    width: 40%;
  }
`;

function Header(props) {
  return (
    <HeaderMars>Patch The Producer</HeaderMars>
  );
}
function Cover(props) {
  return(
    <CoverImg>
      <img src={UserProfile} alt='' />
    </CoverImg>
  );
}
export function Playlist(props){
  const { setCurrent, currentAudio, audiolist } = useContext(PlayerContext);
  return (
    <Mars>
      <Plist>
        <List>
              <PlayIcon />
              <AudioMeta>
                <Title></Title>
                <Artist></Artist>
              </AudioMeta>
        </List>
      </Plist>
    </Mars>
    
  );
}

export function AudioPlayer(props) {
  return (
    <AudioState>
      <Mars>
        <Top>
          <Header />
          <Cover />
          <Playlist />
        </Top>
        <AudioControls />
      </Mars>
    </AudioState>
  );
}
