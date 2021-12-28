var request = new XMLHttpRequest();
var today = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
request.open('get', `https://paraulogic.rodamots.cat?solucions=${today.toISOString().substr(0, 10).replace(/\//g, '-')}`);
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