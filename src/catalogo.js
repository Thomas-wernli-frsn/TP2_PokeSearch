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

  $grid.innerHTML = tarjetasHTML.join("");
}

async function cargarPokemon() {
  $cargando.hidden = false;
  $error.hidden = true;
  $vacio.hidden = true;
  try {
    const url = urlWith(API_URL, { limit: 151, offset: 0 });
    const datos = await getJson(url);

    todosLosPokemon = [];

    for (const item of datos.results) {
      const poke = await getJson(item.url);

      todosLosPokemon.push({
        nombre: poke.name,
        imagen: poke.sprites.front_default,
        tipo: poke.types[0].type.name,
      });
    }

    $cargando.hidden = true;

    TarjetasPokemon(todosLosPokemon);
  } catch (error) {
    console.error("Error al cargar: ", error);
    $error.hidden = false;
  }
}

function filtrarPokemon() {
  const texto = $searchInput.value.trim().toLowerCase();

  const filtrados = todosLosPokemon.filter((poke) =>
    poke.nombre.toLowerCase().includes(texto),
  );

  TarjetasPokemon(filtrados);
}

$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filtrarPokemon();
});

cargarPokemon();
