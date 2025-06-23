import { TextField, Paper } from '@mui/material';

const UrlInputForm = ({ url, index, handleChange }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="Long URL"
        fullWidth
        value={url.longUrl}
        onChange={(e) => handleChange(index, 'longUrl', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Validity (mins)"
        type="number"
        value={url.validity}
        onChange={(e) => handleChange(index, 'validity', e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Custom Shortcode"
        value={url.shortcode}
        onChange={(e) => handleChange(index, 'shortcode', e.target.value)}
      />
    </Paper>
  );
};

export default UrlInputForm;
