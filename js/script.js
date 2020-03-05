/* global $ */

console.log('hi');

$('button').click(function(){
  let message = $("input").val();
  fetch("https://api.giphy.com/v1/gifs/search?&api_key=wr5FTD48d1jb75Qn4rg9zh7nF9D93cpi&rating=pg&q=puppy")
  .then(function(response) {
    return response.json();
  })  
  .then(function(data) {
    
    var url = data.data[0].images.original.url;
    $(".displayGIF").append(`<img src="${url}">`);
  });
});
