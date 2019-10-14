<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import helloWorld from '@/components/common/hello-world.vue'; // @ is an alias to /src
import { Route } from 'vue-router';
import actionNames from '../store/names/action-names';

@Component({
  components: {
    'hello-world': helloWorld
  }
})
export default class Home extends Vue {
  beforeRouteEnter(to: Route, from: Route, next: (a: any) => void) {
    console.log('beforeRouteEnter');
    next((sidebar: Home) => sidebar.setCounter());
  }

  setCounter() {
    console.log('setCounter');
    this.$store.dispatch(actionNames.mainSetCounter, 5);
  }
}
</script>
