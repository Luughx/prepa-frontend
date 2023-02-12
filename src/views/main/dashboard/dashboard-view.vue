<template>
    <main class="container">
        <br>
        <div class="row">
            <div class="col-md-2">
                <Sidebar />
            </div>
            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-8">
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
                                    <strong>Total Alumno: </strong> {{$store.getters.chartDataTotalStudent}}
                                    <br>
                                    <strong>Total grupo: </strong> {{$store.getters.chartDataTotalGroup}}
                                </p>
                                <router-link class="btn btn-primary" to="/panel/calificaciones">ver más</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card borderless"
                            v-bind:class="{ 'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                            <div class="card-body p-4">
                                <h5 class="card-title h5">Estado de cuenta</h5>
                                <div class="table-responsive">
                                    <table class="table table-borderless table-hover" v-bind:class="{'table-dark night-bg': $store.getters.night}">
                                        <thead>
                                            <tr>
                                                <th>Cantidad</th>
                                                <th>Fecha</th>
                                                <th>Mes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(status, index) in dataStatus" :key="index">
                                                <td>{{status[0]}}</td>
                                                <td>{{status[4]}}</td>
                                                <td>{{status[2]}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <router-link class="btn btn-primary" to="/panel/estado-cuenta">ver más</router-link>
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
        data() {
            return {
                subjects: {} as any,
                labelsChart: [] as string[],
                dataStatus: [] as any
            }
        },
        mounted() {
            this.getStatus()
        },
        methods: {
            getStatus() {
                for (let i=0; i < 5; i++) {
                    const status = this.$store.getters.studentStatus[i]
                    this.dataStatus.push(status)
                }
            }
        },
        computed: {
            chartData() {
                return {
                    labels: this.$store.state.chartDataScores.titles,
                    color: "#fff",
                    datasets: [
                        {
                            label: 'Alumno',
                            backgroundColor: '#7fabd6',
                            borderColor: '#7fabd6',
                            data: this.$store.getters.chartDataScoreStudent
                        },
                        {
                            label: 'Grupo',
                            backgroundColor: '#f87979',
                            borderColor: '#f87979',
                            data: this.$store.getters.chartDataScoreGroup
                        }
                    ]
                }
            },
            chartOptions() {
                return {
                    responsive: true,
                    maintainAspectRatio: false
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