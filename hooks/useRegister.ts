import { useState } from 'react';

export const useRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    // Basic validation
    if (!username || !email || !dob || !age || !password || !role) {
      console.log('Please fill in all fields.');
      return;
    }

    console.log('Registering:', {
      username,
      email,
      dob,
      age,
      password,
      role,
    });

    // Add your API call here
  };

  return {
    username,
    email,
    dob,
    age,
    password,
    role,
    setUsername,
    setEmail,
    setDob,
    setAge,
    setPassword,
    setRole,
    handleRegister,
  };
};
