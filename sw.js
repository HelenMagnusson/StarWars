const jsonOutput = document.querySelector("#txtArea");
function getApi(txt) {
  /*Skriv din kod här*/
  //let input = "Chewbacca";
  const fullUri = "https://www.swapi.tech/api/people/?name=" + txt;
  fetch(fullUri)
    //.then(function(res){return res.json()})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      jsonOutput.innerHTML = "";
      let s = `Desc: ${data.result[0].description}, Hair color: ${data.result[0].properties.hair_color}`;
      jsonOutput.innerHTML = s;

      //document.getElementById("txtArea").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function Start(txt) {
  if (isNaN(txt)) {
    getApi(txt);
  } else {
    text = "Input not valid, must be a text.";
    document.getElementById("result").innerHTML = text;
  }
}
