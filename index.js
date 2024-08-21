import { createCharacterCard } from "./components/card/card.js";
import { searchQuery,  createSearchBar} from "./components/search-bar/search-bar.js";
import { initNavigationButton } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
//const navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');


// States
let maxPage = 1;
let page = 1;

export function getPage() {
  return page;
}

export function setPage(newPage) {
  page = newPage;
}

export function getMaxPage() {
  return maxPage;
}

export function setMaxPage(newMaxPage) {
  maxPage = newMaxPage;
}

//Fetch the cards from the Rick and Morty API
export async function fetchCharacters(query = searchQuery) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`
    );
    const { info, results } = await response.json();

    setMaxPage(info?.pages || 1);
    pagination.textContent = `${getPage()}/${getMaxPage()}`;
    cardContainer.innerHTML = "";

    if (results?.length) {
      results.forEach(createCharacterCard);
    } else {
      cardContainer.innerHTML = "<li>No characters found</li>";
    }
  } catch (error) {
    console.error("Error fetching characters: ", error);
  }
}

createSearchBar();
initNavigationButton();
fetchCharacters();
