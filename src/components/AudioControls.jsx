import styled from 'styled-components';
import React, { useState, useRef, useContext } from 'react';
import { FaVolumeUp, FaStepBackward, FaStepForward, FaPlay, FaRandom, FaRedo } from 'react-icons/fa'
import { PlayerContext } from './Context';

const Mars = styled.div`
	left: 0;
	bottom: 0;
	width: 100vw;
	color: white;
	height: 60px;
	opacity: 0.95;
	display: flex;
	position: fixed;
	align-items: center;
	background: #264653;
`;
const Vol = styled.div`
	display: flex;
	padding: 10px;
	overflow: hidden;
	align-content: center;
	transition: all 222ms;
`;
const VolBar = styled.input`
	margin: 0;
	padding: 0;
	width: 80px;
`;
const Margin = styled.span`
	cursor: pointer;
	margin-left: 1.8em;
	&:hover {
		color: black;
	}
`;
const ProgressBar = styled.div`
	flex: 1;
	display: flex;
	margin-left: 20px;
	align-items: center;
	justify-content: center;
`;
const AudioMeta = styled.div`
	width: 22vw;
`;
const AudioTitle = styled.span`
	display: block;
	font-weight: 600;
	font-size: 1.125em;
`;
const AudioArtist = styled.span`
	font-size: 0.8em;
`;
const ProgressBarInput = styled.input`
	width: 90%;
`;
const CurrentTotalT = styled.span`
	width: 35px;
	margin: 0 12px;
`;
const PlistOptions = styled.div`
	width: 4vw;
	display: flex;
	cursor: pointer;
	justify-content: space-evenly;
	&:hover {
		color: black;
	}
	&:active {
		color: black;
	}
`;

export function AudioControls(props) {
	const { nextAudio, prevAudio, audiolist, currentAudio, handleFinish, 
		toggleRandom, toggleRepeat, togglePlaying} = useContext(PlayerContext);
	const [currentTime, setCurrentTime] = useState(0);
	const [stateVol, setStateVol] = useState(0.4);
	const [dur, setDur] = useState(0);
	const audio = useRef('audioId');
	const handleVolume = (q) => { 
		setStateVol(q) 
		audio.current.volume = q 
	}
	const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause()
	const fmtMSS = (s) => {
		return (s - (s %= 60)) / 60 + (9 < s ? ':' : '0') + ~~s
	}
	const handleProgress = (e) => {
		let compute = (e.target.value * dur) / 100 
		setCurrentTime(compute) 
		audio.current.currentTime = compute
	}

	return  (
		<Mars>
			<audio
				onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
				onCanPlay={(e) => setDur(e.target.duration)}
				onEnded={handleFinish}
				ref={audio}
				type='audio/mpeg'
				preload='true'
				src={audiolist[currentAudio].src}
			/>
			<Vol>
				<FaVolumeUp size='20px' />
				<VolBar
					value={Math.round(stateVol * 100)}
					type='range'
					onChange={(e) => handleVolume(e.target.value / 100)}
				/>
			</Vol>
				<Margin><FaStepBackward onClick={prevAudio} /></Margin>
				<Margin>
					<FaPlay onClick={() => { 
						togglePlaying()
						toggleAudio() 
						}}
					/>
				</Margin>
				<Margin><FaStepForward onClick={nextAudio}/></Margin>
			<ProgressBar>
				<AudioMeta>
					<AudioTitle>{audiolist[currentAudio].title}</AudioTitle>
					<AudioArtist>{audiolist[currentAudio].artist}</AudioArtist>
				</AudioMeta>
				<ProgressBarInput
					onChange={handleProgress}
					value={dur ? (currentTime * 100) / dur : 0}
					type='range'
				/>
				<CurrentTotalT>{fmtMSS(currentTime)}</CurrentTotalT>
				<CurrentTotalT>{fmtMSS(dur)}</CurrentTotalT>
			</ProgressBar>
			<PlistOptions>
				<FaRandom onClick={toggleRandom} />
			</PlistOptions>
			<PlistOptions>
				<FaRedo onClick={toggleRepeat} />
			</PlistOptions>
		</Mars>
	);
}