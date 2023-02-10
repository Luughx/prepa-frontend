<template>
    <main class="container">
        <br>
        <div class="row">
            <div class="col-md-2">
                <Sidebar />
            </div>
            <div class="col-md-10">
                <div class="row">
                    
                    <div class="col-md-12">
                        <div class="card borderless"
                            v-bind:class="{ 'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                            <div class="p-4">
                                <h5 class="card-title h5">Calificaciones</h5>
                            </div>
                            <div class="p-4">
                                <Line class="card-img text-white" :options="chartOptions" :data="chartData" />
                            </div>
                            <div class="card-body p-4">
                                
                                <p class="fs-6">
                                    <strong>Total Alumno: </strong> 86.1
                                    <br>
                                    <strong>Total grupo: </strong> 86.1
                                </p>
                                <router-link class="btn btn-primary" to="/panel/calificaciones">ver más</router-link>
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
                    labels: ['Geografía', 'ESEM', 'Física', 'Cálculo', 'Prob. y Estadis', 'Administración', 'Sis. de Información', "Programación"],
                    color: "#fff",
                    datasets: [
                        {
                            label: 'Alumno',
                            backgroundColor: '#7fabd6',
                            borderColor: '#7fabd6',
                            data: [96, 93, 65, 90, 81, 93, 85]
                        },
                        {
                            label: 'Grupo',
                            backgroundColor: '#f87979',
                            borderColor: '#f87979',
                            data: [87.6, 89.7, 63.2, 62.6, 80.1, 76.3, 76.5]
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