import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElement = e.target.elements;
  const searchQuery = formElement[0].value;
  fetchCharacters(page, searchQuery);
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
  }
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters(page, searchQuery);
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
  }
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters(page, searchQuery);
});

const url = "https://rickandmortyapi.com/";
async function fetchCharacters(pageNum, searchName) {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(
      `${url}/api/character/?page=${pageNum}&name=${searchName}`
    );
    const data = await response.json();
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
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
fetchCharacters(page, searchQuery);
