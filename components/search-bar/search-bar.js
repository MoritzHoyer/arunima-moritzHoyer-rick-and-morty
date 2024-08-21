import { fetchCharacters } from "../../index.js";

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]'
  );


export let searchQuery = "";

export function createSearchBar() {
    const formElement = document.createElement('form');
    formElement.setAttribute('action', '');
    formElement.className = 'search-bar';
    formElement.setAttribute('data-js', 'search-bar');


    const inputElement = document.createElement('input');
    inputElement.className = 'search-bar__input';
    inputElement.setAttribute('name', 'query');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'search characters');
    inputElement.setAttribute('aria-label', 'character name');

    const buttonElement = document.createElement('button');
    buttonElement.className = 'search-bar__button';
    buttonElement.setAttribute('aria-label','search for character');

    const imgElement = document.createElement('img');
    imgElement.className = 'search-bar__icon';
    imgElement.setAttribute('src', 'assets/magnifying-glass.png');
    imgElement.setAttribute('alt', '');

    buttonElement.appendChild(imgElement);
    formElement.appendChild(inputElement);
    formElement.appendChild(buttonElement);
    //searchBar.appendChild(formElement);
    searchBarContainer.appendChild(formElement);

    formElement.addEventListener('submit', searchCharacter);

}

export function searchCharacter (event) {
    event.preventDefault();
    searchQuery = document.querySelector(".search-bar__input").value.trim();
    fetchCharacters(searchQuery);
}