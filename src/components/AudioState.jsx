import React, { useReducer } from 'react';
import { PlayerContext } from './Context';
import { audioList } from './AudioList';

const ToggleRandom = 'ToggleRandom';
const ToggleRepeat = 'ToggleRepeat';
const TogglePlaying = 'TogglePlaying';
const SetAudioArray = 'SetAudioArray';
const SetCurrentAudio = 'SetCurrentAudio';

const Reducer = (state, action) => {
  switch (action.type) {
    case SetAudioArray:
      return {
        ...state,
        audio: action.data,
      }
    case SetCurrentAudio:
      return {
        ...state,
        currentAudio: action.data,
        playing: true,
      }
    case ToggleRandom:
      return {
        ...state,
        random: action.data,
      }
    case ToggleRepeat:
      return {
        ...state,
        repeat: action.data,
      }
    case TogglePlaying:
      return {
        ...state,
        playing: action.data,
      }
    default:
      return state
  }
}
export const AudioState = (props) => {
  const initialState = {
    currentAudio: 0,
    audiolist: audioList,
    repeat: false,
    random: false,
    playing: false,
    audio: null,
  }
  const [state, dispatch] = useReducer(Reducer, initialState)
  const togglePlaying = () => dispatch({ type: TogglePlaying, data: state.playing ? false : true })
  const toggleRepeat = (id) => dispatch({ type: ToggleRepeat, data: state.repeat ? false : true })
  const toggleRandom = (id) => dispatch({ type: ToggleRandom, data: state.random ? false : true })
  const audioSet = (audioArr) => dispatch({ type: SetAudioArray, data: audioArr })
  const setCurrent = (id) => dispatch({ type: SetCurrentAudio, data: id })
  const prevAudio = () => {
    if(state.currentAudio === 0) {
      setCurrent(state.audiolist.length - 1)
    } else {
      setCurrent(state.currentAudio - 1)
    }
  }
  const nextAudio = () => {
    if(state.currentAudio === state.audiolist.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(state.currentAudio + 1)
    }
  }
  const handleFinish = () => {
    if(state.random) {
      return dispatch({ type: SetCurrentAudio, data: ~~(Math.random() * state.audiolist.length),})
    } else {
      if(state.repeat) {
        nextAudio()
      } else if (state.currentAudio === state.audiolist.length - 1) {
        return
      } else {
        nextAudio()
      }
    }
  }
  return (
    <PlayerContext.Provider
      value={{
        currentAudio: state.currentAudio,
        AudioList: state.AudioList,
        audiolist: state.audiolist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        nextAudio,
        prevAudio,
        setCurrent,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleFinish,
        audioSet,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
}