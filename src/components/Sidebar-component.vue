<template>
    <div class="container-fluid">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse" v-bind:class="{'navbar-dark bg-dark': $store.getters.night, 'navbar-light bg-light': !$store.getters.night }">
            <div class="position-sticky pt-3 sidebar-sticky">
                <div class="nav-link">
                    <h1 class="fs-4 ms-3 mt-2" v-bind:class="{'text-white': $store.getters.night}">
                        Yahir Tapia
                    </h1>
                    <span class="text-muted ms-3">200223</span>
                </div>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">

                    <li class="nav-item">
                    <a class="nav-link ms-3 mt-2" v-bind:class="{'text-white': $store.getters.night}" href="#">Resumen</a>
                    </li>

                    <li class="nav-item">
                    <a href="#" class="nav-link ms-3 mt-2" v-bind:class="{'text-white': $store.getters.night}">Calificaciones</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link ms-3 mt-2" v-bind:class="{'text-white': $store.getters.night}" href="#">Estado de cuenta</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
    name: "Sidebar-Component",
    data() {
        return {
        
        }
    },
    methods: {

    }
    })
</script>

<style>
    .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
    }

    /*
    * Sidebar
    */

    .sidebar {
    position: fixed;
    top: 0;
    /* rtl:raw:
    right: 0;
    */
    bottom: 0;
    /* rtl:remove */
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }

    @media (max-width: 767.98px) {
    .sidebar {
        top: 5rem;
    }
    }

    .sidebar-sticky {
    height: calc(100vh - 48px);
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }

    .sidebar .nav-link {
    color: #333;
    }

    .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #727272;
    }

    .sidebar .nav-link.active {
    color: #2470dc;
    }

    .sidebar .nav-link:hover .feather,
    .sidebar .nav-link.active .feather {
    color: inherit;
    }

    .sidebar-heading {
    font-size: .75rem;
    }

    .navbar .navbar-toggler {
    top: .25rem;
    right: 1rem;
    }

    .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
    }

    .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
    }

</style>