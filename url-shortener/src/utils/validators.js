export default function validateInput(urlObj) {
  const urlPattern = /^(http|https):\/\/.+$/;

  if (!urlPattern.test(urlObj.longUrl)) return false; 
  if (urlObj.validity && (isNaN(urlObj.validity) || urlObj.validity <= 0)) return false; 
  if (urlObj.shortcode && !/^[a-zA-Z0-9]{3,10}$/.test(urlObj.shortcode)) return false; 

  return true;
}
