import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Form, Input, Link, Submit, BoldLink } from './Reusable';
import { AuthContext } from './Context';
import { Marginer } from './Marginer';
import { auth, db } from '../Firebase';

export const SignupForm = (props) => {
  const { switchToLogin } = useContext(AuthContext);
  const [ displayName, setDisplayName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const history = useHistory();

  const onSignup = () => {
    if(!email || !password || !displayName) {
      alert('All fields are required');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then(authUser => {
      // eslint-disable-next-line
      const user = auth.currentUser.uid
      setDoc(doc(db, "users", user), {
        displayName,
        email,
      });
      history.push('/Dashboard')
    })
  }

  return (
    <Box>
      <Form>
        <Input type='name' placeholder='Username' value={displayName} onChange={e => setDisplayName(e.target.value)} />
        <Input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <Input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} minLength="8"/>
        <Input type='password' placeholder='Confirm Password' required/>
      </Form>
      <Marginer direction='vertical' margin='1em' />
      <Submit onClick={onSignup}>Sign Up</Submit>
      <Marginer direction='vertical' margin={5} />
      <Link to='/'>Already have an account?
        <BoldLink to='/' onClick={switchToLogin}>
          sign in
        </BoldLink>
      </Link>
    </Box>
  );
}

