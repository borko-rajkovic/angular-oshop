[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/borko-rajkovic/angular-oshop">
    <img src="./src/692054.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">The Organic Shop</h3>

  <p align="center">
    Online grocery shop built with Angular and Firebase
    <br />
    <a href="https://github.com/borko-rajkovic/angular-oshop/issues">Report Bug</a>
    ·
    <a href="https://github.com/borko-rajkovic/angular-oshop/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Organic shop][product-screenshot]](https://github.com/borko-rajkovic/angular-oshop)

The Organic Shop is a grocery shop app that allows users to select items, change quantity, make orders and check their orders history. Admin users can check all orders and manage products. The project uses Angular and Firebase.

### Built With

<a href="https://angular.io"  target="_blank">
  <img src="https://angular.io/assets/images/favicons/favicon.ico" alt="Angular" width="32px" height="32px">
</a>

<a href="https://firebase.google.com/"  target="_blank">
  <img src="https://www.gstatic.com/devrel-devsite/vb298438d35e34dff3f97c40f057464525beed8d6a3ecb339c274e51019bd45e6/firebase/images/favicon.png" alt="Firebase" width="32px" height="32px">
</a>

<a href="https://www.typescriptlang.org/"  target="_blank">
  <img src="https://www.typescriptlang.org/assets/images/icons/favicon.ico" alt="Typescript" width="32px" height="32px">
</a>

<a href="https://rxjs-dev.firebaseapp.com/"  target="_blank">
  <img src="https://rxjs-dev.firebaseapp.com/assets/images/favicons/favicon.ico" alt="RxJS" width="32px" height="32px">
</a>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

1. Create new Firebase project [https://console.firebase.google.com](https://console.firebase.google.com) and new [service account](https://firebase.google.com/docs/admin/setup#initialize_the_sdk)
2. Clone the repo

```sh
git clone https://github.com/borko-rajkovic/angular-oshop
```

3. Install Node packages

```sh
npm install
```

4. Add API key to `src/environments/environment.ts` and `src/environments/environment.prod.ts` files

5. Move to project folder & start node server

```sh
npm start
```

6. Buid for production

```sh
npm run build
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Borko Rajkovic - [LinkedIn](https://linkedin.com/in/othneildrew) - rajkovicborko@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/borko-rajkovic/
[product-screenshot]: ./src/oshop.gif
