


function load() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((json) => {
       let data = json;
       showData(data);
    });
 
}

function showData(data) {
    console.log(data)
}





load();
