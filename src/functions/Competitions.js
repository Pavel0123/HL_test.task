import Get from "./crud/Get.js"
async function Competitions(auth) {
  
  //declare api url to fetch from
  const url = "/api/v1/competition"
  
  //post request 
  const data = await Get(url,auth).then((data) => {
    return data;
  });

  //return auth token
  return data;
}

export default Competitions;