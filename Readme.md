## PokeSearch - Catálogo Pokémon

Web de dos páginas desarrollado para el TP N.2 de Programación III. Permite buscar entre los primeros 151 Pokémon(primera generacion) y buscarlos por nombre. Dos páginas con HTML, CSS y JavaScript vanilla, compiladas con Vite, que consumen una API pública.

Deploy: https://tp-2-poke-search.vercel.app/

## -> Tema y API utilizada

- Temática: Catálogo e información básica de Pokémon (primera generación).
- API pública: PokeAPI(https://pokeapi.co/) (no tiene API Key).

## -> Funcionalidades

- Página de inicio (`index.html`): Presentación del sitio, descripción de la temática y boton de acceso al buscador.
- Catálogo interactivo (`catalogo.html`):
  - Carga dinámica de Pokémon con imagen oficial, nombre y tipos usando `fetch`, `async/await` y `Promise.all`.
  - Manejo de estados: cargando, error de conexión y búsqueda sin resultados.
  - Buscador por nombre sobre los datos cargados.
  - Diseño responsive adaptable a celulares y computadoras.

## -> Cómo ejecutar el proyecto localmente

1. Clonar el repositorio e ingresar a la carpeta del proyecto.
2. Requiere Node.js 22 o superior(probado en la v24.21.0)
3. Instalar las dependencias:
   ```bash
   npm install
   npm run dev
   ```
   Abrí la URL que muestra la terminal (por defecto `http://localhost:5173`).

## -> Cómo probar el build

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ para probarlo
```

Lo que se publica es el contenido de `dist/`. Si el catálogo anda en `dev`
pero no en `preview`, revisá el `vite.config.js`.

## -> Estructura

├── index.html Landing
├── catalogo.html Catálogo
├── vite.config.js Entradas del build y base relativa
├── src/
│ ├── main.js Estilos del Landing
│ ├── catalogo.js Fetch, búsqueda, estilos y tarjetas
│ └── styles.css Estilos compartidos
└── Readme.md
