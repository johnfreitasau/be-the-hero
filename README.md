<h1 align="center">
  <img src=".github/logo.svg" alt="Be The Hero">
</h1>

<h3 align="center">
  Be The Hero - Connecting everyone to people in need of change.
</h3>
<!-- E02041 -->
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/johnfreitasau/be-the-hero?color=%23E02041">
  <a href="https://www.linkedin.com/in/johnfreitasau/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-John%20Freitas-%23E02041"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/johnfreitasau/be-the-hero?color=%23E02041">
  <a href="https://github.com/johnfreitasau/be-the-hero/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/johnfreitasau/be-the-hero?color=%23E02041"></a>
  <a href="https://github.com/johnfreitasau/be-the-hero/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/johnfreitasau/be-the-hero?color=%23E02041"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/johnfreitasau/be-the-hero?color=%23E02041">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<img alt="Layout" src=".github/be-the-hero.png">

## 🦸‍♀️ About the project

Application developed during the Omnistack week.

Using the web client, the NGOs can create incidents informing about their needs and the amount to solve the incident.

With this informations and using the mobile client, people can help one or more incidents and be the hero for that NGO.

The goal of this project is increase the possibility of to help more cases and faster.



## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://github.com/arb/celebrate)
- [SQLite](https://www.sqlite.org/)
- [KnexJs](http://knexjs.org)
- [Nodemon](https://nodemon.io/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- [Expo](https://expo.io/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/johnfreitasau/be-the-hero.git && cd be-the-hero
```

**Install dependencies**

```bash
$ yarn
```

**Follow the steps below**

### Backend

In the backend folder:

```bash
yarn
```

To start the server:

```bash
yarn dev
```

#### Migrations
Update the database:
```bash
knex migrate:latest
```

To rollback all the completed migrations:
```bash
knex migrate:rollback
```

To run the next migration that has not yet been run:
```bash
knex migrate:up
```

To undo the last migration that was run:
```
knex migrate:down
```


### Web

_Obs.: Before to continue, be sure to have the API running_

In the frontend folder:
```bash
yarn
```

To start the project:
```bash
yarn start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/mobile/src/services/api.ts' have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn mobile expo
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork johnfreitasau/be-the-hero
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd be-the-hero

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
