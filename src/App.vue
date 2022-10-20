<template>
  <v-app>
    <v-main class="app">
      <SideBar v-if="$route.path !== '/'" />
      <div class="app__content">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/aplication/Sidebar.vue'

export default defineComponent({

  components: {
    SideBar
  },

  data () {
    return {
      
    }
  },
})
</script>

<style lang="scss" scoped>

@import '@/assets/variables.scss';

.app {
  display: flex;
  width: 100%;
  padding: 15px 20px;
  background: $backgroundApp;

  &__content {
    padding: 10px 20px 0px 20px;
    width: 100%;
    background: white;
    border-radius: 12px;
    box-shadow: $boxShadow;
    margin: 0px 20px;
  }
}
</style>
