// const axios = require( "axios"); Can't do this in the browser


console.log("Let's Begin");
const title = "Frankenstein";

let listDiv = document.getElementById("startList");
axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
      .then(res=>{
        // console.log(JSON.stringify(res.data, null, 2))
        // grab the res.data.items.volumeInfo.title
        for (let i=0; i<2; i++){
          let title = res.data.items[i].volumeInfo.title;
          console.log(title);
          let newDiv = document.createElement("p");
          newDiv.innerHTML = title;
          listDiv.appendChild(newDiv);
        }
      
      })
      .catch(err=> console.log(err));


