export const getAllTrips = (port) => {
  return fetch('http://localhost:'+port+'/').then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}

export const saveTrip = (port, src, dest) => {
  let data = {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({src, dest})
  };

  return fetch('http://localhost:'+port+'/add', data).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}
