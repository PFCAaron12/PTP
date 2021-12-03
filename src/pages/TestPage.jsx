import React from 'react';
import styled from 'styled-components';
import { Test } from '../components/Test';

const Mars = styled.div`
	padding: 50px;
	width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TestPage(props) {
	return(
		<Mars>
			<Test />
		</Mars>
	);
} 