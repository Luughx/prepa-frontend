<template>
<nav class="navbar sticky-top navbar-expand-lg" v-bind:class="{'navbar-dark bg-dark': $store.getters.night, 'navbar-light bg-light': !$store.getters.night }">
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
            <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/anecdotas">Anecdotas</router-link>
        </li>
        
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Consultas
            </a>
            <ul class="dropdown-menu" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="nav-link" href="http://67.225.220.160/~prepaco1/boletapdf/index.php" target="_blank">Boletas</a>
              </li>
              <li>
                <a class="nav-link" href="http://67.225.220.160/~prepaco1/cuotas/leer.html" target="_blank">Estado de cuenta</a>
              </li>
              <li>
                <a class="nav-link" href="http://67.225.220.160/~prepaco1/boleta/leerext.html" target="_blank">Calif. de extraordinarios</a>
              </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Calendarios
            </a>
            <ul class="dropdown-menu" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="nav-link" href="https://www.prepa2030.com.mx/_files/ugd/65b189_ba18767c91364dfebcb9b1cc0e8538a3.pdf" target="_blank">Escolar 2022</a>
              </li>
              <li>
                <a class="nav-link" href="https://www.prepa2030.com.mx/_files/ugd/65b189_a6affc6275824a199166dfe6331b62a0.pdf" target="_blank">3era y 4ta etapa</a>
              </li>
              <li>
                <a class="nav-link" href="https://www.prepa2030.com.mx/_files/ugd/65b189_442925f10f03497a9ee56b0cfc7a4bcb.pdf" target="_blank">Semestrales</a>
              </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Información
            </a>
            <ul class="dropdown-menu" v-bind:class="{'dropdown-menu-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="nav-link" to="/reglamentos">Reglamentos</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="/fundacion">Fundación</router-link>
              </li>
            </ul>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night }">
        <li class="flex-vert">
          <form action="" v-on:submit.prevent="switchNightAction">
            <button class="btn btn-sm btn-primary">
              <font-awesome-icon icon="fa-solid fa-moon" v-if="!$store.getters.night"/>
              <font-awesome-icon icon="fa-solid fa-sun" v-else/>
            </button>
          </form>
        </li>

        <li class="nav-item" v-if="!$store.getters.connected">
            <router-link class="nav-link" to="/usuarios/iniciar-sesion">Iniciar sesion</router-link>
        </li>
        <li class="nav-item" v-if="!$store.getters.connected">
            <router-link class="nav-link" to="/usuarios/registrarse">Registrarse</router-link>
        </li>


        <li class="nav-item dropdown" v-if="$store.getters.connected && $store.state.user.owner">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administración
          </a>
          <ul class="dropdown-menu" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link class="nav-link" to="/dev/anecdotas">
                Anecdotas
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/dev/avisos-principales">
                Avisos Principales
              </router-link>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown" v-if="$store.getters.connected">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img :src="$store.state.user.imageCircleURL" class="profilenav rounded-circle" alt="">
            {{$store.state.user.name}}
          </a>
          <ul class="dropdown-menu" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night }" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="nav-link" :href="'/perfil/'+$store.state.user._id">
                <font-awesome-icon icon="fa-solid fa-user" /> Perfil
              </a>
            </li>
            <li>
              <a class="nav-link dropdown-item-dark selection" @click="logout()">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> Cerrar sesión
              </a>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
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