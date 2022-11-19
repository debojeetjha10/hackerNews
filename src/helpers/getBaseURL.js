const getBaseURL = (url)=>{
  const urlObj = new URL(url);
  const baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;
  return baseUrl;
};
export default getBaseURL;
