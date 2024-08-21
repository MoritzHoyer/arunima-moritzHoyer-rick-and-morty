import { createCharacterCard } from "./components/card/card.js";
import { searchQuery, searchButton } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;

//Fetch the cards from the Rick and Morty API
export async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const { info, results } = await response.json();

    maxPage = (info && info.pages) ? info.pages : page;
    pagination.textContent = `${page}/${maxPage}`;
    cardContainer.innerHTML = "";

    if (results.length === 1) {
      createCharacterCard(results[0]);
    } else {
      results.forEach(createCharacterCard);
    }    
  } catch (error) {
    console.error("Error fetching characters", error);
  }
}

//Pagination
prevButton.addEventListener("click", () => {
  page > 1 && page--;
  fetchCharacters();
});

nextButton.addEventListener("click", () => {
  page < maxPage && page++;
  fetchCharacters();
});

searchButton();

fetchCharacters();
