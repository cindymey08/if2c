let Genre = document.getElementById("Genre")
let discoverMovie = document.getElementById("discoverMovie")


fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=dc987a08b4357bc3edc7f2d949403315&language=en-US')
.then(response => response.json())
.then(data => {
    console.log(data)
    data.genres.forEach(showGenre)
})
function showGenre(val,idx){
    Genre.innerHTML +=`<button class='btn btn-primary d-grid gap-2 col-10 mx-auto mt-4'onclick ="getDiscoverMovie(${val.id})"type="button" class="list-group-item list-group-item-action">${val.name}</button>`
   
}
function getDiscoverMovie(id){
    console.log(id);
   
 // fatch api discover
 fetch('https://api.themoviedb.org/3/discover/movie?api_key=dc987a08b4357bc3edc7f2d949403315&with_genres='+id)
 .then(response=>response.json())
 .then(data=>{
     console.log(data);
     discoverMovie.innerHTML=""
     data.results.forEach(showDiscoverMovie)
 })
}

function showDiscoverMovie(val,idx){
    discoverMovie.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/original/${val.poster_path}" class="img-fluid rounded-3 mt-2">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${val.original_title}</h5>
          <p class="card-text">User Score : ${val.vote_average}<br>${val.overview}</p> 
        </div>
      </div>
    </div>
  </div>`
}





