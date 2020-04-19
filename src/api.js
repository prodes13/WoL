// const url = 'http://wol.taskme.eu/db.json' // here you find the mockup data

export const call = () =>
  fetch('./db.json')
    // parsing questions in JSON format
    .then(response => {
      console.log(response);
      response.json()
    }) // no need to parse it since it's already a JSON
    




    // fetch('./data.json').then(response => {
    //   console.log(response);
    //   return response.json();
    // }).then(data => {
    //   // Work with JSON data here
    //   console.log(data);
    // }).catch(err => {
    //   // Do something for an error here
    //   console.log("Error Reading data " + err);
    // });