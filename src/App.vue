<template>

  <Navbar ref="navbar" />
  <router-view />
  <Footer />

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
  },
  methods: {
      updatePage() {
        this.$forceUpdate()
      }
  }
});
</script>