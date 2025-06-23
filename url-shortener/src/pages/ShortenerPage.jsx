import { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { shortenURL } from '../utils/api';
import UrlCard from "../components/UrlCard";
import UrlInputForm from '../components/UrlInputForm';
import validateInput from '../utils/validators';
import { useAuth } from '../context/AuthContext';

const ShortenerPage = () => {
  const { user, logout } = useAuth();
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleAddInput = () => {
    if (urls.length < 5) setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
  };

  const handleSubmit = async () => {
    const validInputs = urls.every((u, i) => {
      const isValid = validateInput(u);
      if (!isValid) console.warn(`Invalid input at row ${i + 1}`, u);
      return isValid;
    });
    if (!validInputs) return alert('Please fix validation errors');

    const res = await shortenURL(urls);
    setResults(res);
  };

 return (
  <Box p={4}>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h4">URL Shortener</Typography>
      <Box>
        <Typography variant="body1" display="inline" mr={2}>Welcome, {user?.username}</Typography>
        <Button variant="outlined" color="error" onClick={logout}>
          Logout
        </Button>
      </Box>
    </Box>

    <Grid container spacing={2}>
      {urls.map((url, index) => (
        <Grid item xs={12} key={index}>
          <UrlInputForm url={url} index={index} handleChange={handleChange} />
        </Grid>
      ))}
    </Grid>

    <Button onClick={handleAddInput} disabled={urls.length >= 5} sx={{ mt: 2 }}>
      + Add Another URL
    </Button>
    <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2, ml: 2 }}>
      Shorten
    </Button>

    <Box mt={4}>
      {results.map((r, idx) => (
        <UrlCard key={idx} data={r} />
      ))}
    </Box>
  </Box>
);
};

export default ShortenerPage;
