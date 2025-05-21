import { AuthContext } from '@/store/authContext';
import { useContext, useState } from 'react';
import { Alert } from 'react-native';

export function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
const authContext = useContext(AuthContext);

  const handleLogin = () => {
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulated login logic
    Alert.alert('Login Successful', `Welcome, ${username}!`);
    console.log({ username, password, rememberMe });
    authContext.logIn();
    // Reset fields after login
    setUsername('');
    setPassword('');
    setRememberMe(false);
    // Navigate to the home screen or perform any other action  


  };

  

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Google Sign-In pressed');
        authContext.logIn();

  };

  return {
    username,
    password,
    rememberMe,
    error,
    setUsername,
    setPassword,
    setRememberMe,
    handleLogin,
    handleGoogleLogin,
  };
}
