var request = new XMLHttpRequest();
request.open('get', `https://paraulogic.rodamots.cat?solucions=${new Date().toISOString().substr(0, 10).replaceAll('/', '-')}`);
request.setRequestHeader('Authorization', 'Basic Y29udHJhc2VueWE=');
request.onreadystatechange = (result) => {
  if (result.currentTarget.readyState === 4 && result.currentTarget.status === 200) {
    var solution = JSON.parse(result.currentTarget.response);
    for (var word of Object.entries(solution.paraules)) {
      document.getElementById('test-word').innerText = word[0];
      document.getElementById('submit-button').click();
    }
  }
}
request.send();