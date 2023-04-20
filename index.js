const img = document.querySelector("img");
const changeButton = document.getElementById("imgbutton");

fetchImage();

function fetchImage() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=mMtQHgFTpMeJ16MX4IkYVtqrMhVChGNa&s=cats",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

changeButton.addEventListener("click", fetchImage);

//Input button

const searchButton = document.getElementById("searchbutton");
searchButton.addEventListener("click", searchButtonFunctionality);

function searchButtonFunctionality(e) {
  const inputText = document.getElementById("search").value;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=mMtQHgFTpMeJ16MX4IkYVtqrMhVChGNa&q=${inputText}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let randomGif = Math.floor(Math.random() * response.data.length);
      img.src = response.data[randomGif].images.original.url;
      console.log(img.src);
    })
    .catch(function (err) {
      console.log("No gifs with that query");
      img.src = "";
      img.alt = "No gifs with that query :(";
    });
  e.preventDefault();
}
