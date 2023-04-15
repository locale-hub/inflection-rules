# Locale Hub - Inflection Rules

![](https://img.shields.io/github/actions/workflow/status/locale-hub/inflection-rules/actions.yml)
![](https://img.shields.io/github/issues/locale-hub/inflection-rules)
![](https://img.shields.io/github/last-commit/locale-hub/inflection-rules/develop)
![](https://img.shields.io/discord/1089419915963924502)
![](https://img.shields.io/github/license/locale-hub/inflection-rules)
![](https://img.shields.io/github/v/release/locale-hub/inflection-rules)
![](https://img.shields.io/github/commit-activity/y/locale-hub/inflection-rules)
![](https://img.shields.io/github/languages/top/locale-hub/inflection-rules)
![](https://img.shields.io/tokei/lines/github/locale-hub/inflection-rules)
![](https://img.shields.io/github/downloads/locale-hub/inflection-rules/total)

## Quick Links

[Website](https://locale-hub.com/) | [Documentation](https://locale-hub.com/docs) | [Discord](https://discord.gg/2Jc877gC)

## What is it?

This project aim to provide inflection methods for various locales.

> **Inflection (noun)**: A change in the form of a word (typically the ending) to express a grammatical function or attribute such as tense, mood, person, number, case, and gender.

## Installation Guide

### Requirements

- Node: `16.x`
- yarn: `1.22.19`

### Development environment

```shell
yarn build
yarn test
```

Tests are made against the umd build as it is the primary usage for locale-hub. 

## Contributing

Please have a look at our [CONTRIBUTING.md](CONTRIBUTING.md) documentation.

Inflection rules are located in `src/rules/<locale>.ts`.

If you want to:
- Fix some rules: please update the tests accordingly
- Add a new locale: create the file in rules folder, and reference the same in the `src/rules/all.ts` file
- Add new type of inflection: create an issue first to explain feature before implementation
