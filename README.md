# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

set USE_SSL=false
set GIT_USER=GinoMoena
set GIT_PASS=token de git
set CURRENT_BRANCH=main

Extra:

Se agrega barra de búsqueda, por lo que en caso de ser necesario, se tendrá que ejecutar el swizzle periodicamente.

npm run swizzle docusaurus-lunr-search SearchBar -- --eject --danger

