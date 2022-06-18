import Post from "./crud/Post.js"
async function CreateAuthenticationToken(body) {
  
  //declare api url to fetch from
  const url = "/api/v1/token";
  
  //post request 
  const auth = await Post(url,body).then((data) => {
    return data;
  });

  //return auth token
  return 'Bearer ' + auth.access_token;
}

export default CreateAuthenticationToken;