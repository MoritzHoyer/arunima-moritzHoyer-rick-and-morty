import { createCharacterCard } from "./components/card/card.js";
import { searchQuery, searchButton } from "./components/search-bar/search-bar.js";
import { pageNavigationButton } from "./components/nav-button/nav-button.js";

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
export async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const { info, results } = await response.json();

    setMaxPage(info?.pages || 1);
    //maxPage = info?.pages || 1;
    pagination.textContent = `${page}/${maxPage}`;
    cardContainer.innerHTML = "";

    if (results.length === 1) {
      createCharacterCard(results);
    } else {
      results.forEach(createCharacterCard);
    }    


  } catch (error) {
    console.error("Error fetching characters", error);
  }
}

searchButton();
pageNavigationButton();
fetchCharacters();
