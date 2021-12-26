var today = new Date();
var request = new XMLHttpRequest();
request.open('get', `https://paraulogic.rodamots.cat?solucions=${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
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