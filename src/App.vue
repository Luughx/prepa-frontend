<template>
  <Navbar ref="navbar" v-if="!$store.getters.hideInterface"/>
  <router-view />
  <Footer v-if="!$store.getters.hideInterface && !$store.getters.hideFooter" />

</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Navbar from "@/components/Navbar-Component.vue";
import Footer from "@/components/Footer-component.vue";

export default defineComponent({
  name: 'App', 
  components: {
    Navbar,
    Footer
  }
})
</script>