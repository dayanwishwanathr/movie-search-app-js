let ombdKey = "386e4e7d";

function searchMovie() {
    console.log("Searching...");

    let inputName = document.getElementById("input").value.trim();

    if (!inputName) {
        alert("Please enter a movie title!");
        return;
    }

    let url = "https://www.omdbapi.com/?t=" + encodeURIComponent(inputName) + "&apikey=" + ombdKey;

    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send();

    httpRequest.onload = function () {
        if (httpRequest.status === 200) {
            let movie = httpRequest.response;

            if (movie.Response === "False") {
                alert("Movie not found!");
                return;
            }

            document.getElementById("Mposter").src = movie.Poster;
            document.getElementById("Mtital").innerText = movie.Title;
            document.getElementById("Myear").innerText = movie.Year;
            document.getElementById("MDes").innerText = movie.Plot;

            document.getElementById("Mrelease").innerText = movie.Released;
            document.getElementById("Mgenre").innerText = movie.Genre;
            document.getElementById("Mdirector").innerText = movie.Director;
            document.getElementById("Mactors").innerText = movie.Actors;
            document.getElementById("Mruntime").innerText = movie.Runtime;
            document.getElementById("Mlanguage").innerText = movie.Language;
            document.getElementById("Mawards").innerText = movie.Awards;
            document.getElementById("Mrating").innerText = movie.imdbRating;

            document.getElementById("movieDetails").style.display = "block";
        } else {
            alert("Error fetching movie data.");
        }
    };
}
