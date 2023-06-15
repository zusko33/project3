import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
  }
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters(page);
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
  }
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters(page);
});

const url = "https://rickandmortyapi.com/";
async function fetchCharacters(x) {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(`${url}/api/character/?page=${x}`);
    const data = await response.json();
    maxPage = data.info.pages;
    const characters = data.results;
    characters.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchCharacters(page);
