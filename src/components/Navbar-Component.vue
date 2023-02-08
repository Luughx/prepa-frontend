<template>
<header class="navbar sticky-top navbar-expand-lg" v-bind:class="{'navbar-dark bg-dark': $store.getters.night, 'navbar-light bg-light': !$store.getters.night }">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img src="https://res.cloudinary.com/lughx/image/upload/v1653363364/Estaticos/Logo_scp66x_pecf4o.png" style="height: 4vh">
      Prepa 2030
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" v-bind:class="{'text-white': $store.getters.night}" to="/">Inicio</router-link>
        </li>
        
        <li class="nav-item">
            <router-link class="nav-link" v-bind:class="{'text-white': $store.getters.night}" to="/anecdotas">Anecdotas</router-link>
        </li>

        <li class="nav-item" v-if="!$store.state.userStudent.connected">
            <router-link class="nav-link" v-bind:class="{'text-white': $store.getters.night}" to="/panel/iniciar-sesion">Consultas</router-link>
        </li>
        
        <li class="nav-item dropdown" v-if="$store.state.userStudent.connected">
            <a class="nav-link dropdown-toggle" v-bind:class="{'text-white': $store.getters.night}" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Panel
            </a>
            <ul class="dropdown-menu gap-1 p-1 rounded-3 mx-0 border-0 shadow w-220px" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item rounded-2" to="#">Calificaciones</router-link>
              </li>
              <li>
                <a class="dropdown-item rounded-2" href="#">Estado de cuenta</a>
              </li>
              <li>
                <a class="dropdown-item rounded-2" href="#">Calif. de extraordinarios</a>
              </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" v-bind:class="{'text-white': $store.getters.night}" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Información
            </a>
            <ul class="dropdown-menu gap-1 p-1 rounded-3 mx-0 border-0 shadow w-220px" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item rounded-2" to="/reglamentos">Reglamentos</router-link>
              </li>
              <li>
                <router-link class="dropdown-item rounded-2" to="/calendarios">Calendarios</router-link>
              </li>
              <li>
                <router-link class="dropdown-item rounded-2" to="/fundacion">Fundación</router-link>
              </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" v-bind:class="{'text-white': $store.getters.night}" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Actualidad
            </a>
            <ul class="dropdown-menu gap-1 p-1 rounded-3 mx-0 border-0 shadow w-220px" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item rounded-2" to="/nosotros">Nosotros</router-link>
              </li>
              <li>
                <router-link class="dropdown-item rounded-2" to="/contactanos">Contáctanos</router-link>
              </li>
            </ul>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night }">
        <li class="flex-vert">
          <form action="" v-on:submit.prevent="switchNightAction">
            <button class="btn btn-sm btn-primary me-2 mt-1">
              <font-awesome-icon icon="fa-solid fa-moon" v-if="!$store.getters.night"/>
              <font-awesome-icon icon="fa-solid fa-sun" v-else/>
            </button>
          </form>
        </li>

        <li class="nav-item" v-if="!$store.getters.connected">
            <router-link class="nav-link" v-bind:class="{'text-white': $store.getters.night}" to="/usuarios/iniciar-sesion">Iniciar sesion</router-link>
        </li>
        <li class="nav-item" v-if="!$store.getters.connected">
            <router-link class="nav-link" v-bind:class="{'text-secondary': $store.getters.night}" to="/usuarios/registrarse">Registrarse</router-link>
        </li>


        <li class="nav-item dropdown" v-if="$store.getters.connected && $store.state.user.owner">
          <a class="nav-link dropdown-toggle" v-bind:class="{'text-white': $store.getters.night}" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administración
          </a>
          <ul class="dropdown-menu gap-1 p-1 rounded-3 mx-0 border-0 shadow w-220px" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link class="dropdown-item rounded-2" to="/dev/anecdotas">
                Anecdotas
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item rounded-2" to="/dev/avisos-principales">
                Avisos Principales
              </router-link>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown" v-if="$store.getters.connected">
          <a class="nav-link dropdown-toggle" v-bind:class="{'text-white': $store.getters.night}" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img :src="$store.state.user.imageCircleURL" class="profilenav rounded-circle" alt="">
            {{$store.state.user.name}}
          </a>
          <ul class="dropdown-menu gap-1 p-1 rounded-3 mx-0 border-0 shadow w-220px" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="dropdown-item rounded-2" :href="'/perfil/'+$store.state.user._id">
                <font-awesome-icon icon="fa-solid fa-user" /> Perfil
              </a>
            </li>
            <li>
              <a class="dropdown-item rounded-2 dropdown-item-dark selection" @click="logout()">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> Cerrar sesión
              </a>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</header>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
  import { getData } from "@/services/MainService";
  import { logout } from "@/services/UsersService";
  import { UserComplete } from "@/Interfaces/UserComplete";
  import { mapActions } from "vuex";

  export default defineComponent({
    name: "Navbar-Component",
    data() {
      return {
        user: {} as UserComplete
      }
    },
    async created() {
      const res = await getData()
      if (res.data) {
        let userData:UserComplete
        userData = res.data.user
        userData.owner = res.data.owner
        this.LoginAction(userData)
      }
    },
    async mounted() {
      if (localStorage.getItem("night")) {
        this.setNightAction()
        document.body.classList.add("night-bg")
      }
    },
    methods: {
      ...mapActions([
        "switchNightAction",
        "setConnectedAction",
        "setDisconnectedAction",
        "setNightAction",
        "LoginAction"
      ]),
      async logout() {
        const res = await logout()

        if (res.data) {
          this.setDisconnectedAction()
          this.$router.push("/")
        }
      }
    }
  })
</script>

<style>
  .selection:hover {
    cursor: pointer;
  }

  .profilenav {
    height: 3vh;
    width: auto;
  }
</style>