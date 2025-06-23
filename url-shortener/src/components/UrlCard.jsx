import { Card, CardContent, Typography, Link } from '@mui/material';
import dayjs from 'dayjs';

const UrlCard = ({ data }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="body1">Original URL: {data.originalUrl}</Typography>
        <Typography variant="body2">
          Short URL: <Link href={`http://localhost:3000/${data.shortcode}`} target="_blank" rel="noopener">{`http://localhost:3000/${data.shortcode}`}</Link>
        </Typography>
        <Typography variant="caption">Expires At: {dayjs(data.expiresAt).format('YYYY-MM-DD HH:mm')}</Typography>
      </CardContent>
    </Card>
  );
};
export default UrlCard;