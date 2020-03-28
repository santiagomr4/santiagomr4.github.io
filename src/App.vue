<template>
  <div id="app">

    <profile :profile="profile" :key="profile.id" ></profile>

    <div class="social-icons">
      <a href="https://github.com/santiagomr" target="_blank"><i class="fa fa-github"></i></a>
      <a href="https://twitter.com/xantiagomr" target="_blank"><i class="fa fa-twitter"></i></a>
      <a href="https://matrix.to/#/@santiagomr:matrix.org" style="text-decoration: none;"><span>[<b>m</b>]</span></a>
      <a href="https://t.me/santiagomr" target="_blank"><i class="fa fa-telegram"></i></a>
      <a href="https://gitlab.com/santiagomr" target="_blank"><i class="fa fa-gitlab"></i></a>
    </div>

  </div>
</template>

<script>
  import Profile from './components/Profile.vue'
  import getProfile from './api/profile.js'

  export default {
    name: 'app',
    data () {
      return {
        profile: [],
      }
    },
    components: {
      Profile,
    },
    mounted: function () {
      const self = this
      getProfile()
        .then(function (profile) {
          self.profile = profile
        })
    }
  }
</script>

<style lang="css">

  * {
    margin: 0;
    padding: 0;
    color: whitesmoke;
  }

  body {
    height: 100vh;
    background-color: #28a745;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:
                  Mukta,
                  sans-serif;
  }

  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .social-icons {
    font-size: 3.7em; /* 60px */
  }

  .social-icons a {
    margin: 9px;
    transition-property: font-size;
    transition-duration: 0.25s;
    transition-delay: 0s;
    transition-timing-function: ease-in-out;
  }
  .social-icons a:hover {
    font-size: 1.1em;
  }

</style>