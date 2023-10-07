# s-block

> Template to kickstart creating a Node.js module using TypeScript and VSCode

Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate)

## Features

- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Issue Templates]
- [GitHub Actions]
- [Codecov](https://about.codecov.io/)
- [VSCode Launch Configurations]
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Commitizen](https://github.com/search?q=commitizen)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting started

### Set up your repository

Replace `FULL_NAME`, `GITHUB_USER`, `NODE_VERSION` and `REPO_NAME` in the `./customize.sh` script with your own details to personalize your new package: 

```bash
FULL_NAME="John Smith"
GITHUB_USER="johnsmith"
REPO_NAME="my-cool-package"
NODE_VERSION="18.17.1"
```
Add permission to edit `chmod +x ./customize.sh` and rund it `./customize.sh` 

### Add Tokens for NPM, Github, CodeCov

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`, `GH_TOKEN` and `CODECOV_TOKEN`

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---

# s-block

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install s-block
```

## Usage

```ts
import { myPackage } from 's-block';

myPackage('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]:https://github.com/SebastianWesolowski/s-block/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/SebastianWesolowski/s-block/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/s-block
[downloads-url]:https://www.npmtrends.com/s-block
[npm-img]:https://img.shields.io/npm/v/s-block
[npm-url]:https://www.npmjs.com/package/s-block
[issues-img]:https://img.shields.io/github/issues/SebastianWesolowski/s-block
[issues-url]:https://github.com/SebastianWesolowski/s-block/issues
[codecov-img]:https://codecov.io/gh/SebastianWesolowski/s-block/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/SebastianWesolowski/s-block
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
