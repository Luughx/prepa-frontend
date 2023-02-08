<template>
    <div class="container p-4">
        <div class="col-md-8">
            <div class="fs-5" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night }">
                <div class="container-fluid py-5">
                    <h1>Anecdotas y recuerdos</h1>
                    <p>
                        En esta sección podrás encontrar la narración de recuerdos y vivencias interesantes, educativas, sorprendentes o simplemente graciosas, ocurridas en torno a la prepa; narradas por exalumnos, alumnos y personal.
                    </p>
                    <p>
                        Si tienes alguna historia que contar compartela con nosotros y toda la comunidad de tu prepa 20-30
                    </p>
                    <button class="btn btn-primary" @click="$router.push('/crear/anecdota')">Crear anecdota</button>
                </div>
            </div>

            <div v-if="!loading">
                <div v-for="anecdota in anecdotas" :key="anecdota._id">
                    <div class="fs-5">
                        <hr v-bind:class="{'hr-night': $store.getters.night}">
                        <h4>{{anecdota.title}}</h4>
                        <div>
                            {{anecdota.description}}
                        </div>
                        <div class="fs-6">
                            - {{anecdota.author}}
                        </div>
                        <div class="mt-2">
                            <a @click="$router.push(`/anecdota/${anecdota._id}`)" class="btn btn-outline-primary btn-sm" >Ver más</a>
                            <a v-if="$store.getters.connected && $store.getters.isOwner" class="btn btn-sm btn-outline-danger ms-2" data-bs-toggle="modal" :data-bs-target="`#exampleModal${anecdota._id}`"><font-awesome-icon icon="fa-solid fa-trash-can" /> Eliminar</a>
        
                            <div v-if="$store.getters.connected && $store.getters.isOwner" class="modal fade" :id="`exampleModal${anecdota._id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content" v-bind:class="{'night-bg': $store.getters.night}">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Eliminar anécdota</h5>
                                            <button type="button" class="btn-close" v-bind:class="{'btn-close-white': $store.getters.night}" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ¿Está seguro que quiere eliminar esta anécdota?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button class="btn btn-danger" data-bs-dismiss="modal" @click="deleteAnecdota(anecdota._id)">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="placeholder-glow" v-else>
                <div class="fs-5">
                    <hr>
                    <div>
                        <h4>
                            <span class="placeholder col-4"></span>
                        </h4>
                        <div>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-7"></span>
                        </div>
                        <div class="fs-6">
                            <span class="placeholder col-2"></span>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4>
                            <span class="placeholder col-4"></span>
                        </h4>
                        <div>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-7"></span>
                        </div>
                        <div class="fs-6">
                            <span class="placeholder col-2"></span>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4>
                            <span class="placeholder col-4"></span>
                        </h4>
                        <div>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-7"></span>
                        </div>
                        <div class="fs-6">
                            <span class="placeholder col-2"></span>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4>
                            <span class="placeholder col-4"></span>
                        </h4>
                        <div>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-7"></span>
                        </div>
                        <div class="fs-6">
                            <span class="placeholder col-2"></span>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4>
                            <span class="placeholder col-4"></span>
                        </h4>
                        <div>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-7"></span>
                        </div>
                        <div class="fs-6">
                            <span class="placeholder col-2"></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" v-bind:class="{'pagination-night-disabled': $store.getters.night}">Anterior</a>
                    </li>

                    <li class="page-item active">
                        <a class="page-link" v-bind:class="{'pagination-night': $store.getters.night}" href="#">1</a>
                    </li>
                    <li v-if="listVal.two" class="page-item">
                        <a class="page-link" v-bind:class="{'pagination-night': $store.getters.night}" @click="$router.push('/anecdotas/2')">2</a>
                    </li>
                    <li v-if="listVal.three" class="page-item">
                        <a class="page-link" v-bind:class="{'pagination-night': $store.getters.night}" @click="$router.push('/anecdotas/3')">3</a>
                    </li>
                    <li v-if="listVal.four" class="page-item">
                        <a class="page-link" v-bind:class="{'pagination-night': $store.getters.night}" @click="$router.push('/anecdotas/4')">4</a>
                    </li>
                    <li v-if="listVal.five" class="page-item">
                        <a class="page-link" v-bind:class="{'pagination-night': $store.getters.night}" @click="$router.push('/anecdotas/5')">5</a>
                    </li>

                    <li class="page-item">
                        <a class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="$router.push('/anecdotas/2')" :disabled="listVal.two">Siguiente</a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Anecdota } from "@/Interfaces/Anecdota";
import { getAnecdotas, deleteAnecdota } from "@/services/AnecdotasService";

export default defineComponent({
    data() {
        return {
            anecdotas: [] as Anecdota[],
            listVal: [],
            listNum: [],
            loading: true
        }
    }, 
    mounted() {
        this.CargarAnecdotas()
    },
    methods: {
        async CargarAnecdotas() {
            this.loading = true
            const res = await getAnecdotas()
            this.listVal = res.data.listVal
            this.listNum = res.data.listNum
            this.anecdotas = res.data.docs
            this.loading = false;
        },
        async deleteAnecdota(anecdota:any) {
            await deleteAnecdota(anecdota)
            this.CargarAnecdotas()
        }
    }
})
</script>

<style>
    .pagination {
        cursor: pointer;
    }

    .disabled {
        cursor: default;
    }
</style>