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

movieForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = titleInput.value
    const genre = genreInput.value
    console.log(title.value)
    console.log(genre.value)
    const Card = createMovieCard(title,genre)
    movieList.appendChild(Card)
    // updateCount()
    movieForm.reset()

})

function createMovieCard(title, genre) {
    const newLi = document.createElement("li")
    newLi.classList.add("movie-card")
    newLi.setAttribute("data-genre", genre)

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("movie-info")

    const titleSpan = document.createElement("span")
    titleSpan.classList.add("movie-title");
    titleSpan.textContent = title;

    const genreSpan = document.createElement("span");
    genreSpan.classList.add("movie-genre");
    genreSpan.textContent = genre || "no genre";

    infoDiv.appendChild(titleSpan);
    infoDiv.appendChild(genreSpan);

    const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("movie-actions");

  const watchBtn = document.createElement("button");
  watchBtn.classList.add("watch-btn");
  watchBtn.textContent = "Mark Watched";

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Remove";

  actionsDiv.appendChild(watchBtn);
  actionsDiv.appendChild(removeBtn);

  newLi.appendChild(infoDiv);
  newLi.appendChild(actionsDiv);

  return newLi;

  
}
movieList.addEventListener("click", (event) => {

  if(event.target.tagName !== "BUTTON") return;

  const card = event.target.closest("li")
  if(event.target.classList.contains("remove-btn")) card.remove()
    updateCount();
    applyFilter(currentFilter);
  if (event.target.classList.contains("watch-btn")) {
    card.classList.toggle("watched");
    if(card.classList.contains("watched")){
        event.target.textContext("Unmark Watched")
    }else {
      event.target.textContent = "Mark Watched";
    }
    applyFilter(currentFilter);
  }


})

// Why do we attach the listener to #movie-list instead of to each button?
// Answer:Because the buttons don't exist when the page first loads, they are
// created dynamically when a user submits a movie.
//
// What does event.target.closest("li") do?
// Answer: event.target is the button that was clicked. closest("li") walks UP
// the DOM tree from that button, looking for the nearest parent <li> element.