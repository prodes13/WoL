const link = 'http://ec2-35-180-208-195.eu-west-3.compute.amazonaws.com'

export const call = () =>
  fetch(link + '/data')
    // parsing questions in JSON format
    .then(response => response.json())

export const sendResults = (token, answers) => {
  fetch(link + '/send-results', {
    method: 'POST',
    body: JSON.stringify(
      {
        token,
        answers,
      }
    )
  })
}
