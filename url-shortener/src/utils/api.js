export const shortenURL = async (urlInputs) => {
  try {
    const res = urlInputs.map((url, index) => {
      const now = new Date();
      const expiry = new Date(now.getTime() + ((parseInt(url.validity) || 30) * 60000)); 

      return {
        originalUrl: url.longUrl,
        shortcode: url.shortcode || `mock${index + 1}`,
        expiresAt: expiry.toISOString()
      };
    });

    return res;
  } catch (err) {
    alert('Error creating short URLs');
    return [];
  }
};
