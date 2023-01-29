<template>
    <div class="container p-4" v-if="$store.getters.connected && $store.getters.isOwner">
        <div class="row">
            <div class="col-md-4">
                <div class="card" v-bind:class="{'card-night': $store.getters.night}">
                    <div class="card-body">
                        <form action="" v-on:submit.prevent="submit()" enctype="multipart/form-data">
                            <label class="form-label">Datos principales</label>
    
                            <div class="mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Titulo" v-model="aviso.title">
                            </div>
    
                            <div class="mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Descripción" v-model="aviso.description">
                            </div>
    
                            <div class="mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Link" v-model="aviso.link">
                            </div>
    
                            <div class="input-group mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="file" name="image" @change="handleFileUpload( $event )">
                            </div>
    
                            <div class="form-group mb-3">
                                
                                <button class="btn btn-primary w-100" type="submit" :disabled="!send">
                                    <div v-if="loading">
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span> Cargando...</span>
                                    </div>
                                    <div v-else>
                                        <span> Subir </span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <table class="table" v-bind:class="{'night-bg': $store.getters.night}">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Link</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="avisoR in avisos" :key="avisoR._id">
                            <td>{{avisoR.title}}</td>
                            <td>{{avisoR.description}}</td>
                            <td>{{avisoR.link}}</td>
                            <td>{{avisoR.type}}</td>
                            <td>
                                <router-link class="btn btn-sm btn-outline-primary" :to="'/dev/avisos-principales/editar/'+avisoR._id">
                                    <i class="fa-solid fa-pen-to-square"></i> Editar
                                </router-link>
                            
                                <a class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+avisoR._id"><i class="fa-solid fa-trash-can"></i> Eliminar</a>

                                <div class="modal fade" :id="'exampleModal'+avisoR._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content" v-bind:class="{'input-night': $store.getters.night}">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Eliminar anécdota</h5>
                                            <button type="button" class="btn-close" v-bind:class="{'btn-close-white': $store.getters.night}" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ¿Está seguro que quiere eliminar este aviso?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <form action="" v-on:submit.prevent="deleteAviso(avisoR._id.toString())" enctype="multipart/form-data">
                                                <input type="hidden" name="_method" value="delete">
                                                <button class="btn btn-danger" data-bs-dismiss="modal" type="submit">Eliminar</button>
                                            </form>
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { Aviso_Principal } from "@/Interfaces/Aviso-principal";
import { deleteAvisoPrincipal, getAvisosPrincipales, postAvisoPrincipal } from "@/services/AvisosPrincipalesService";

export default defineComponent({
    data() {
        return {
            aviso: {
                title: "",
                description: "",
                link: "",
                file: ""
            },
            avisos: [] as Aviso_Principal[],
            seleccionado: "",
            send: false,
            loading: false
        }
    },
    async mounted() {
        this.cargarAvisos()
    },
    methods: {
        async deleteAviso(id: string) {
            await deleteAvisoPrincipal(id)
            this.cargarAvisos()
        },
        async cargarAvisos() {
            const res = await getAvisosPrincipales()
            this.avisos = res.data
        },
        async submit() {
            let form = new FormData()
            form.append("title", this.aviso.title)
            form.append("description", this.aviso.description)
            form.append("link", this.aviso.link)
            form.append("image", this.aviso.file)
            this.loading = true
            this.send = false
            await postAvisoPrincipal(form)
            this.loading = false
            this.send = true
            this.cargarAvisos()
        },
        handleFileUpload(event:any){
            this.aviso.file = event.target.files[0]
            this.send = true
        }
    }
})
</script>