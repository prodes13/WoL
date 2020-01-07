// fix this
const url = 'http://ec2-35-180-208-195.eu-west-3.compute.amazonaws.com/data'

export const call = (url) =>
  fetch(url)
    // parsing questions in JSON format
    .then(response => response.json())