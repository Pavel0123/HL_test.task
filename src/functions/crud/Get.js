async function Get(url = '', auth = null ) {

  //options for post request
  const options = {
  method: 'GET',
  headers: {
  'Content-Type': 'application/json',
  'Authorization': auth,
  },
  };

  //fetch data
  const data = await fetch(url, options).then(data => {


    //if data is ok return them else throws error
    if (data.ok) {
      return data.json();
     }
    else  {
      throw Error(data.status);
    }

    }).then(data => {
    //return data
    return data;
   
    }).catch(error => {
    //throws error to console
    console.log(error);

    });

  return data;
}

export default Get;