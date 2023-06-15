import { createCharacterCard } from "./card.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
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
    const response = await fetch(`${url}/api/character`);
    const data = await response.json();
    console.log(data);
    const name = data.results[0].name;
    const status = data.results[0].status;
    const type = data.results[0].type;
    const occurrences = data.results[0].episode.length;
    console.log(name);
    console.log(status);
    console.log(type);
    console.log(occurrences);
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

createCharacterCard();
fetchCharacters();
