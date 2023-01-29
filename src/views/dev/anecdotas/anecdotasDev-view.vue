<template>
    <div class="container p-4" v-if="$store.getters.connected && $store.getters.isOwner">
        <div class="col-md-8">
            <h1>dev</h1>
            <table class="table" v-bind:class="{'night-bg': $store.getters.night}">
                <thead>
                    <th>Titulo</th>
                    <th>Descripción</th>
                </thead>
                <tbody v-for="anecdota in anecdotas" :key="anecdota._id">
                    <tr>
                        <td>
                            {{anecdota.title}}
                        </td>
                        <td>
                            {{anecdota.description}}
                        </td>
                        <td>
                            <a href="#" class="btn btn-sm btn-outline-primary" @click="aceptarAnecdotas(anecdota._id)">Aceptar</a>
                            <a class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" :data-bs-target="`#exampleModal${anecdota._id}`">Eliminar</a>
                            <router-link class="btn btn-sm btn-outline-secondary" :to="'/dev/anecdotas/'+anecdota._id">Ver</router-link>

                            <div class="modal fade"  :id="`exampleModal${anecdota._id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" >
                                    <div class="modal-content" v-bind:class="{'input-night': $store.getters.night}">
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";
    import { Anecdota } from "@/Interfaces/Anecdota";
    import { deleteAnecdota, getAnecdotasDev, putAcceptDev } from "@/services/AnecdotasService";
    
    export default defineComponent({
        data() {
            return {
                anecdotas: [] as Anecdota[]
            }
        },
        mounted() {
            this.getAnecdotas()
        },
        methods: {
            async aceptarAnecdotas(id: any) {

                let idObjetct = {
                    id
                }
                
                const res = await putAcceptDev(idObjetct)
                this.getAnecdotas()
            },
            async getAnecdotas() {
                const res = await getAnecdotasDev()
                //console.log(res.data)
                this.anecdotas = res.data
            },
            async deleteAnecdota(anecdota:any) {
                const res = await deleteAnecdota(anecdota)
                this.getAnecdotas()
            }
        }
    })
</script>