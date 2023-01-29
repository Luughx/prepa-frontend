<template>
    <div>
        <hr>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                </a>
                <span class="text-muted">Cd. Delicias, Chihuahua México</span>
                </div>
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a target="_blank" class="text-muted" href="https://www.facebook.com/preparatoria2030/"><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
                <li class="ms-3"><a target="_blank" class="text-muted" href="https://www.youtube.com/channel/UC87kIuNL2TuL_4EXOHYud7w"><font-awesome-icon icon="fa-brands fa-youtube" /></a></li>
                </ul>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: "Footer-Component"
})

</script>