var url = 'https://paraulogic.rodamots.cat';
window.open(url, "_self");

var request = new XMLHttpRequest();
var today = new Date();
request.open('get', `${url}?solucions=${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`);
request.setRequestHeader('Authorization', ' Basic Y29udHJhc2VueWE=');
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
