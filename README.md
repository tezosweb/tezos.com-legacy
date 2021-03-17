# New Tezos.com

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Contribute

To contribute to this repository, please fork the repo, make your changes, and submit a PR to the ``main`` branch.

## Update Jobs and Tezos Updates sections

Job listings and news updates are obtained from the Marketing department in Google Sheets. These are downloaded as `Tezos Job Listings - Sheet1.tsv` and `Tezos Updates - Sheet1.tsv`, respectively. Once updated files have been added to `src/data`, from the command line:

```console
npm run updates
```

This parses the `.tsv` files into `.json`, which are then imported into the appropriate modules. To update these separately, from the command line: 

```console
npm run update-jobs
npm run update-updates
```

## Build / Localization

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

In order to see localized versions of the site, after running `npm run build`, run the following:

```console
npm run serve
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
