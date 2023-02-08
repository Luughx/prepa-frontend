<template>
    <div class="container p-5">
        <div class="mb-3">
            <h2 class="text-center">Nosotros</h2>
        </div>

        <div class="div-test text-bg-dark">

        </div>

    </div>
</template>

<script lang="ts">

    import { defineComponent } from "vue-demi";

    export default defineComponent({
        data() {
            return {
                currentCalendar: "Calendario-Escolar-2022-Ago.pdf"
            }
        },
        methods: {
            
        }
    })

</script>

<style >

    .div-test {
        width: 500px;
        height: 500px;
    }

    .div-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    iframe {
        width: 80%;
        height: 100vh;
    }
</style>