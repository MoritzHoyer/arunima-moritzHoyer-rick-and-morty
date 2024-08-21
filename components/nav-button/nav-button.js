import {getMaxPage, getPage, setPage, fetchCharacters } from './../../index.js';

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');


export function pageNavigationButton() {
    /*const updateNavigationButtons = () => {
        let currentPage = getPage();
        let maxPage = getMaxPage();
        
        prevButton.disabled = currentPage <= 1;
        nextButton.disabled = currentPage >= maxPage;
    };
    */

    prevButton.addEventListener("click", () => {
        if (getPage() > 1) {
            setPage(getPage() - 1);
        }
        fetchCharacters();
    });
    
    nextButton.addEventListener("click", () => {
        if (getPage() < getMaxPage()) {
            setPage(getPage() + 1);
        }
        fetchCharacters();
    }); 
 
}
