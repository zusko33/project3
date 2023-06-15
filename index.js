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
const maxPage = 1;
const page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/";
export async function fetchCharacters() {
  try {
    const response = await fetch(`${url}/api/character/`);
    const data = await response.json();
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
fetchCharacters();
