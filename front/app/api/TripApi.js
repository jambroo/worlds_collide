export const getAllTrips = () => {
  return fetch('http://localhost:6543/').then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}

export const saveTrip = (src, dest) => {
  let data = {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({src, dest})
  };

  return fetch('http://localhost:6543/add', data).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}
