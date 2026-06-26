const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")
const movieForm = document.getElementById("movie-form")
const titleInput = document.getElementById("title-input")
const genreInput = document.getElementById("genre-input")
const movieList = document.getElementById("movie-list")
const clearWatchedBtn = document.getElementById("clear-watched-btn")

const filterBtns = document.querySelectorAll(".filter-btn")
console.log(movieForm);
console.log(titleInput);
console.log(genreInput);
console.log(movieList);
console.log(clearWatchedBtn);
console.log(filterBtns);
appTitle.textContent = "My Movie Watchlist"

// Read and log the current count text
console.log("Count says:", movieCount.textContent)

// Update the count text manually (JavaScript will keep this accurate later)
movieCount.textContent = "0 movies"

movieCount.classList.add("active-filter")
movieCount.classList.remove("active-filter")
movieCount.classList.toggle("active-filter")
movieCount.classList.toggle("active-filter")


console.log(titleInput.getAttribute("placeholder")) 
console.log(titleInput.getAttribute("type"))         
console.log(titleInput.getAttribute("required"))
titleInput.setAttribute("placeholder", "Try: The Matrix")
titleInput.removeAttribute("required")
titleInput.setAttribute("required", "")
titleInput.getAttribute("value")  
titleInput.value     
// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → This reads what was written in the HTML file
// .value               →  This reads what the user typed at the moment.