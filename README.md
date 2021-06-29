# Legacy Tezos.com

> **_NOTE:_** [DEPRECATED] The [Tezos.com](https://tezos.com) website has been redesigned and redeployed, and therefore this repository has been deprecated and archived. Please visit [Tezos.com](https://tezos.com) to see the new look + feel and reach out if there are any suggestions.

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

## Help Translate

If you would like to help improve our translations, please see the following directories:

```
docs/<locale>
i18n/<locale>
```

The ```.md```, ```.mdx``` and ```.json``` files therein contain all page content.

The Jobs and Tezos Updates sections have a different workflow: see below.

## Update Jobs and Tezos Updates sections

Job listings and news updates are obtained from the Marketing department in Google Sheets. These are downloaded as `jobs-<locale>.tsv` and `updates-<locale>.tsv`. Once updated files have been added to `src/data/tsv/jobs` and `src/data/tsv/updates`, respectively, from the command line:

```console
npm run updates
```

This parses the `.tsv` files into `.json` with the same name, located at `src/data/jobs` and `src/data/updates`, which are then imported into the appropriate modules. To update these separately, from the command line: 

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
