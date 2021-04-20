<template>
  <div>
    <div class="container">
      <div>
        <Nuxt />
        <div class="links">
          <router-link
            class="button--green"
            :to="localePath('/')"
          >
            {{ $t('home') }}
          </router-link>
          <router-link
            class="button--green"
            :to="localePath('/contact')"
          >
            {{ $t('contact') }}
          </router-link>
          <router-link
            class="button--green"
            :to="localePath('/carlos')"
          >
            {{ $t('userPage') }}
          </router-link>

          <br><br>
          <br><br>

          <router-link
            class="button--grey"
            :to="switchLocalePath('es')"
          >
            ESPAÑOL switchLocalePath('es')
          </router-link>
          <router-link
            class="button--grey"
            :to="switchLocalePath('en')"
          >
            ENGLISH switchLocalePath('en')
          </router-link>

          <br>
          <br>
          <router-link
            class="button--grey"
            :to="manualSpanish"
          >
            ESPAÑOL (path created manually)
          </router-link>

          <router-link
            class="button--grey"
            :to="manualEnglish"
          >
            ENGLISH (path created manually)
          </router-link>

          <br>
          <br>
          <br>

          {{ localeLocation() }}

          <!--          {{ manualSpanish }}-->
          <!--          {{ manualEnglish }}-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    manualSpanish () {
      return '/es' + (
        this.$route.fullPath
          ? this.$route.fullPath
            .replace('/en', '')
            .replace('en/', '')
          : ''
      )
    },
    manualEnglish () {
      return '/en' + (
        this.$route.fullPath
          ? this.$route.fullPath
            .replace('/es', '')
            .replace('es/', '')
          : ''
      )
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
