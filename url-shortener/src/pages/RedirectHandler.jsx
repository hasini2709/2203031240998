import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RedirectHandler = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const redirect = async () => {
      try {
        const res = await axios.get(`/api/resolve/${shortcode}`);
        window.location.href = res.data.originalUrl;
      } catch (error) {
        alert('Invalid or expired shortcode');
      }
    };
    redirect();
  }, [shortcode]);

  return null;
};

export default RedirectHandler;