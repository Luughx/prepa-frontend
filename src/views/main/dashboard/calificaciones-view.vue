<template>
    <main class="container">
        <br>
        <div class="row">
            <div class="col-md-2">
                <Sidebar />
            </div>
            <div class="col-md-10">
                <div class="col-md-10">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card borderless"
                            v-bind:class="{ 'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                            <div class="p-4">
                                <h5 class="card-title h5">Promedio de etapas</h5>
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
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4">
                        <div class="card borderless"
                            v-bind:class="{ 'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-borderless table-hover" v-bind:class="{'table-dark night-bg': $store.getters.night}">
                                        <thead>
                                            <tr>
                                                <th>Materia</th>
                                                <th>Etapa 1</th>
                                                <th>Etapa 2</th>
                                                <th>Etapa 3</th>
                                                <th>Etapa 4</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(subject, index) in subjects" :key="index">
                                                <td><span>{{subject[0]}} </span> </td>
                                                <td><span class="score-student">{{subject[1]}}</span> <span class="score-group">{{subject[2]}}</span></td>
                                                <td><span class="score-student">{{subject[3]}}</span> <span class="score-group">{{subject[4]}}</span></td>
                                                <td><span class="score-student">{{subject[5]}}</span> <span class="score-group">{{subject[6]}}</span></td>
                                                <td><span class="score-student">{{subject[7]}}</span> <span class="score-group">{{subject[8]}}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
    import axios from "axios";

    import { postDownloadScores } from "@/services/StudentService";
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
                subjects: [] as any,
                chartData: {
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
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted() {
            this.getStatus()
        },
        methods: {
            getStatus() {
                for (let i=0; i < 8; i++) {
                    const subjectsVuex = this.$store.getters.studentSubjects[i]
                    this.subjects.push(subjectsVuex)
                }
            },
            async download() {
                /* let formData = new FormData()
                formData.append("nombresss", "200223")
                formData.append("pass", "rl38y")
                formData.append("accion", "Buscar")

                const resAxios = await axios.post("http://67.225.220.160/~prepaco1/boletapdf/rep.php/", formData, { responseType: "blob", headers: {"Access-Control-Allow-Origin": "*"} })
                 */
                const resAxios = await postDownloadScores({"fees": "200223", "password": "rl38y"})
                console.log(resAxios.data)
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

    .score-student {
        color: #7fabd6;
    }

    .score-group {
        color: #f87979;
    }

</style>