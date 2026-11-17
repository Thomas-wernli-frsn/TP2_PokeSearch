import "./style.css";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const $grid = document.getElementById("catalogo-grid");
const $cargando = document.getElementById("estado-cargando");
const $error = document.getElementById("estado-error");
const $vacio = document.getElementById("estado-vacio");
const $searchInput = document.getElementById("search");
const $searchForm = document.querySelector(".buscador-form");

let todosLosPokemon = [];

async function getJson(url) {
  const res = await fetch(url);

  if (!res.ok) throw new Error(`Error ${res.status}`);
  return res.json();
}

function urlWith(base, params) {
  const url = new URL(base);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }
  return url;
}
