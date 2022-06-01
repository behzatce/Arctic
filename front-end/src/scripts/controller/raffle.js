
export const addRaffles = (raffleData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(raffleData);
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/addRaffles", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


export const getRaffleAllProjects = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const result = fetch("http://localhost:8080/getRaffleAllProjects", requestOptions)
  return result
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



