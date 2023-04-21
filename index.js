const img = document.querySelector("img");
const changeButton = document.getElementById("imgbutton");

fetchImage();

async function fetchImage() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=mMtQHgFTpMeJ16MX4IkYVtqrMhVChGNa&s=cats",
      {
        mode: "cors",
      }
    );
    const responseData = await response.json();
    img.src = responseData.data.images.original.url;
  } catch (error) {
    img.alt = "Error loading an Image";
    console.log(error);
  }
}

changeButton.addEventListener("click", fetchImage);

//Input button

const searchButton = document.getElementById("searchbutton");
searchButton.addEventListener("click", searchButtonFunctionality);

function searchButtonFunctionality(e) {
  e.preventDefault();
  const inputText = document.getElementById("search").value;
  async function fetchData() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=mMtQHgFTpMeJ16MX4IkYVtqrMhVChGNa&q=${inputText}`,
      {
        mode: "cors",
      }
    );

    const responseData = await response.json();
    let randomGif = Math.floor(Math.random() * responseData.data.length);
    img.src = responseData.data[randomGif].images.original.url;
  }
  fetchData().catch(function (err) {
    console.log("No gifs with that query");
    img.src = "";
    img.alt = "No gifs with that query :(";
  });
}
