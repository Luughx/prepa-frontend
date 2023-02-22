<template>
    <div class="container p-5">
        <div class="mb-3">
            <h2 class="text-center">Calendarios</h2>
        </div>
        <div class="row">
            <div class="col-lg-4 section">
            <div>
                <h3>Calendario escolar 2022</h3>
                <button class="btn btn-outline-primary" @click="changeEscolar()">Ver más</button>
            </div>
            </div>
            
            <div class="col-lg-4 section">
                <h3>Exámenes de 3era y 4ta etapa</h3>
                <button class="btn btn-outline-primary" @click="changeNormal()">Ver más</button>
            </div>

            <div class="col-lg-4 section">
                <h3>Exámenes semestrales</h3>
                <button class="btn btn-outline-primary" @click="changeSemestral()">Ver más</button>
            </div>
        </div>
        <br> 
        <div class="div-center">
            <iframe :src="`${$store.getters.urlPdf}/${currentCalendar}`" frameborder="0"></iframe>
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
        mounted() {
            document.dispatchEvent(new Event("render-complete"))
        },
        methods: {
            changeEscolar() {
                this.currentCalendar = "Calendario-Escolar-2022-Ago.pdf"
            },
            changeNormal() {
                this.currentCalendar = "Calendarización-de-Examenes-Enero-Junio-2023.pdf"
            },
            changeSemestral() {
                this.currentCalendar = "Sem-ago-dic-22.pdf"
            }
        }
    })

</script>

<style >

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