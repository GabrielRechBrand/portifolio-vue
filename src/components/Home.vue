<template>
  <div class="page">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="title m-3 dangerStyle">PORTIFOLIO 👨‍💻</p>
      </div>
      <div class="navbar-brand">

      </div>
      <div class="navbar-end">
        <a class="icons navbar-item is-active" href="https://github.com/GabrielRechBrand"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
        <a class="icons navbar-item is-active" href="https://www.linkedin.com/in/gabriel-rech-brand-2bb20a21a/"><img src="https://cdn-icons-png.flaticon.com/512/49/49408.png"/></a>
      </div>
    </nav>
    <div class="page">
      <div class="block">
        <p class="title has-text-centered dangerStyle">Hello! My name is Gabriel_</p>
      </div>
      <div class="descriptionDiv block">
        <p class="description subtitle has-text-centered mb-4" style="word-break: break-word;">I'm a software developer with almost 2 years of studying experience, in the meantime I learned how to use some technologies that I apply a lot in my projects,</p>
        <p class="description subtitle has-text-centered mb-4" style="word-break: break-word;">which mainly involves web development technologies and building REST APIs.</p>
      </div>
      <div class="">
        <p class="title has-text-centered dangerStyle">[SKILLS]</p>
      </div>
      <div class="skills container mt-5">
          <button class="button is-danger is-outlined">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
            <span class="icon is-small">
              <i class="fas fa-times"></i>
          </span>
          </button>
          <button class="button is-danger is-outlined">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
            <span class="icon is-small">
              <i class="fas fa-times"></i>
          </span>
          </button>
          <button class="button is-danger is-outlined">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
            <span class="icon is-small">
              <i class="fas fa-times"></i>
          </span>
          </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
          </span>
        </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
          </span>
        </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
          </span>
        </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
              </span>
        </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
              </span>
        </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
              </span>
        </button>
        <button class="button is-danger is-outlined">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original-wordmark.svg" />
          <span class="icon is-small">
              <i class="fas fa-times"></i>
              </span>
        </button>
        </div>
      <div class="mt-5">
        <p class="title has-text-centered dangerStyle">[PROJECTS]</p>
      </div>
      <ul class="mt-5 has-text-centered">
        <p class="subtitle normalStyle mr-5">📌 My most important projects include:</p>
        <ul class="projects normalStyle mt-5">
          <li class="project subtitle normalStyle mr-4">
            <a href="https://github.com/GabrielRechBrand/backend-shortener"><p>An URL Shortener Back-end</p></a>
          </li>
          <li class="project subtitle normalStyle mr-4">
            <a href="https://github.com/GabrielRechBrand/frontend-shortener"><p>An URL Shortener Front-end</p></a>
          </li>
          <li class="project subtitle normalStyle mr-4">
            <a href="https://github.com/GabrielRechBrand/testeci"><p>A Product Request Manager </p></a>
          </li>
          <li class="project subtitle normalStyle mr-4">
            <a><p>A Volunteer project for an enterprise (Private repository)</p></a>
          </li>
        </ul>
      </ul>
      <div>
        <p class="title dangerStyle has-text-centered mt-5">[Are you interested?]</p>
        <p class="subtitle normalStyle has-text-centered mt-3">You can contact me in <a href="https://www.linkedin.com/in/gabriel-rech-brand-2bb20a21a/">LinkedIn</a>, or my Email: <a>rcgabrielbrand@gmail.com</a></p>
      </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

  .navbar {
    background-color: #1e1e1e;
  }

  .page {
    background-image: linear-gradient(to bottom, #1e1e1e, #1b1b1b, #171717, #131313, #0f0f0f);
    height: 100vh;
  }

  .dangerStyle {
    color:  hsl(348, 100%, 61%) !important;
    text-shadow: 1px 1px 1px black;
    font-weight: bold;
  }

  .normalStyle {
    color: #fffefe !important;
    text-shadow: 1px 1px 1px black;
    font-weight: bold;
  }

  .description {
    color: #b7b7b7;
    font-weight: bold;
  }

  .icons {
    transition: 1s;
  }

  .icons:hover {
    background-color: hsl(348, 100%, 61%);
  }

  .skills button {
    transition: 0.4s;
  }

  .skills button {
    width: 125px;
    height: 125px;
  }

  .skills button+button {
    margin-left: 10px;
  }

  .skills button:hover, button:after{
    transform: scale(110%, 110%);
  }

  .project {
    transition: 0.4s;
  }

  project:hover {
    color: hsl(348, 100%, 61%);
  }

  .projects li+li {
    margin-top: 10px;
  }

</style>
