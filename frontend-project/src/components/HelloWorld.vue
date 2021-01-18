<template>
  <div class="hello">
    <h1>{{ $t('commons.message.welcome') }}</h1>
    <router-link to="Login"><p>Login</p></router-link>
    <b-nav-item-dropdown :text="locale" right>
      <b-dropdown-item
        @click="changeLocale(locale)"
        v-for="(locale, index) in locales"
        :key="index"
      >
        {{ $t("commons.label." + locale.text) }}
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <div>
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      locales: "lang/locales",
      locale: "lang/locale"
    })
  },
  methods: {
    async changeLocale(locale) {
      this.$loadMessages(locale.target);
      this.$store.dispatch("lang/changeLocale", locale);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>