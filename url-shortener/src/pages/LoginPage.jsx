import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username.trim()) {
      login(username);
      navigate('/');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>Login</Button>
    </Box>
  );
};

export default LoginPage;
