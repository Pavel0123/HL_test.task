import Post from "./crud/Post.js"
async function IndividualStatistics(body, competition ,auth) {
  
  //declare api url to fetch from
  const url = "/api/v1/individual/" + competition;
  
  //post request 
  const data = await Post(url,body,auth).then((data) => {
    return data;
  });

  //return auth token
  return data;
}

export default IndividualStatistics;