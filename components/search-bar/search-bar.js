import { fetchCharacters } from "../../index.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]'
  );

  export let searchQuery = "";

export function searchCharacter (event) {
    event.preventDefault();
    searchQuery = document.querySelector(".search-bar__input").value.trim();
    fetchCharacters();
}

export function searchButton() {
    searchBar.addEventListener('submit', searchCharacter);
}