
export const addRaffles = (raffleData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(raffleData);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
    try {
      fetch("http://localhost:8080/addRaffles", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    } catch (error) {
      return error
    }
 
}


export const getRaffleAllProjects = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  try {
    const result = fetch("http://localhost:8080/getRaffleAllProjects", requestOptions)
    return result
  } catch (error) {
    console.log(error)
  }
 
}

export const getRaffleProject = (raffleId) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const postData = {
    "raffleId": raffleId
  }
  var raw = JSON.stringify(postData);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const result = fetch("http://localhost:8080/getRaffleProject", requestOptions)
  return result
}



