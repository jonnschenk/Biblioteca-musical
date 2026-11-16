# Biblioteca musical

Aplicación en React para explorar canciones y armar una biblioteca personal. Proyecto académico construido por etapas.

🔗 Demo: [https://jonnschenk.github.io/Biblioteca-musical/](https://jonnschenk.github.io/Biblioteca-musical/)

## Etapas

- [x] **Etapa 1 — Componentes de clase:** `Header` y `Song` como componentes de clase con props y ciclo de vida (`componentDidMount`).
- [x] **Etapa 2 — Componentes funcionales y hooks:** refactor a componentes funcionales, estado con `useState`, efectos con `useEffect`, lista de resultados de búsqueda y biblioteca personal con datos ficticios.
- [ ] **Próxima etapa:** conectar los resultados de búsqueda con una API.

## Funcionalidades

- Lista de resultados de búsqueda (datos ficticios).
- Botón "Agregar a mi biblioteca" en cada canción; evita duplicados.
- Biblioteca personal que se actualiza en tiempo real.
- Mensaje en consola cada vez que la biblioteca cambia (`useEffect`).
- Diseño responsive con modo claro y oscuro.

## Tecnologías

- React 19 (componentes funcionales y hooks)
- Vite
- CSS por componente
- Oxlint
- GitHub Actions + GitHub Pages para el despliegue

## Instalación y uso

```bash
git clone https://github.com/jonnschenk/Biblioteca-musical.git
cd Biblioteca-musical
npm install
npm run dev       # servidor de desarrollo
npm run build     # versión de producción en dist/
npm run lint      # revisión con Oxlint
```

## Estructura

```
src/
├── App.jsx / App.css       # Estado de la app (useState, useEffect) y layout
├── main.jsx                # Punto de entrada
├── index.css               # Variables y estilos globales
├── data/
│   └── songs.js            # Canciones ficticias
└── components/
    ├── Header/             # Título y subtítulo
    ├── Song/               # Tarjeta de canción (con botón opcional)
    ├── SearchResults/      # Lista de resultados de búsqueda
    └── Library/            # Biblioteca personal del usuario
```

Cada componente tiene su propia carpeta con su archivo `.jsx` y su `styles.css`.

## Autor

Jonathan M. Ramírez · [GitHub](https://github.com/jonnschenk)
