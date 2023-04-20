const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=limsk8DThW5otN0v31Ciiokn2kgW4gfe&s=cats",
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
