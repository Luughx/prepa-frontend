<template>
    <main class="container">
        <br>
        <div class="row">
            <div class="col-md-2">
                <Sidebar />
            </div>
            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card borderless"
                            v-bind:class="{ 'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                            <div class="card-body p-4">
                                <h5 class="card-title">Calificaciones</h5>
                                <p class="fs-5 ">
                                    Delicias emergió prácticamente de la nada en 1933; dos años después fue declarada
                                    cabecera de un nuevo municipio al cual se
                                </p>
                                <router-link class="btn btn-primary" to="/panel/calificaciones">ver más</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card borderless"
                            v-bind:class="{ 'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                            <div class="card-body p-4">
                                <Line class="card-img-top" :options="chartOptions" :data="chartData" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">

    import { defineComponent } from "vue-demi";
    import Sidebar from "@/components/Sidebar-component.vue";

    import useVuelidate from '@vuelidate/core';
    import { required, minLength, email, helpers } from "@vuelidate/validators";
    import { mapActions } from "vuex";
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import { Line } from 'vue-chartjs'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    export default defineComponent({
        components: {
            Sidebar,
            Line
        },
        setup() {
            return {
                v$: useVuelidate()
            }
        },
        data() {
            return {
                errorMessage: false,
                user: {
                    fees: "",
                    password: ""
                },
                chartData: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [40, 39, 10, 40, 39, 80, 40]
                        }
                    ]
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        methods: {
            async login() {
                console.log("sending data")
            }
        },
        watch: {
            user: {
                handler(value) {
                    this.$emit("user", value)
                },
                deep: true,
                immediate: true
            }
        },
        validations() {
            return {
                user: {
                    fees: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required)
                    },
                    password: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required)
                    }
                }
            }
        }
    })

</script>

<style>
.input-number-hide::-webkit-inner-spin-button,
.input-number-hide::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>