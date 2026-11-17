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

function TarjetasPokemon(lista) {
  $grid.innerHTML = "";

  if (lista.length === 0) {
    $vacio.hidden = false;
    return;
  }

  $vacio.hidden = true;

  const tarjetasHTML = lista.map((poke) => {
    return `
      <article class="poke-card">
        <img src="${poke.imagen}" alt="Imagen de ${poke.nombre}" />
        <h2>${poke.nombre}</h2>
        <p>Tipo: ${poke.tipo}</p>
      </article>
    `;
  });

  $grid.innetHTML = tarjetasHTML.join("");
}

async function cargarPokemon() {
  try {
  } catch (error) {
    console.error("Error al cargar: ", error);
    $error.hidden = false;
  } finally {
    $cargando.hidden = true;
  }
}
