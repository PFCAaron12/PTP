import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Form, Input, Link, Submit, BoldLink } from './Reusable';
import { AuthContext } from './Context';
import { Marginer } from './Marginer';
import { auth } from '../Firebase';

export const LoginForm = (props) => {
  const { switchToSignup } = useContext(AuthContext);
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const history = useHistory();

  const onLogin = () => {
    if(!email || !password) {
      alert('All fields are required');
    }
    signInWithEmailAndPassword(auth, email, password).then(authUser => {
      history.push('/Dashboard');
    })
  }

  return (
    <Box>
      <Form>
        <Input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <Input  type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
      </Form>
      <Link href='#'>Forgot Password?</Link>
      <Marginer direction='vertical' margin='1em' />
      <Submit onClick={onLogin}>Login</Submit>
      <Marginer direction='vertical' margin={5} />
      <Link to='/Signup'>Dont have an Account?
        <BoldLink to='/Signup' onClick={switchToSignup}>
          sign up
        </BoldLink>
      </Link>
    </Box>
  );
}