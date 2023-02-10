<template>
    <div class="container p-4" v-if="$store.getters.connected && $store.getters.isOwner">
        <div class="row">
            <div class="col-md-6">
                <div class="card borderless" v-bind:class="{'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                    <div class="card-body">
                        <form action="" v-on:submit.prevent="submit()" enctype="multipart/form-data">
                            <h1 class="h4 mb-3 fw-normal text-center">
                                Nuevo aviso principal
                            </h1>
    
                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Titulo" v-model="aviso.title" autocomplete="off" autofocus>
                                <label for="floatingInput">Titulo</label>
                            </div>
    
                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Descripción" v-model="aviso.description" autocomplete="off">
                                <label>Descripción</label>
                            </div>
    
                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Link" v-model="aviso.link" autocomplete="off">
                                <label>Link</label>
                            </div>
    
                            <div class="input-group mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="file" name="image" @change="handleFileUpload( $event )">
                            </div>
    
                            <div class="form-group mb-3">
                                
                                <button class="btn btn-primary w-100 px-4 me-sm-3" type="submit" :disabled="!send">
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
            <div class="col-md-6">
                <div class="card borderless" v-bind:class="{'card-night': $store.getters.night, 'bg-light': !$store.getters.night }">
                    <div class="card-body">
                        <form action="" v-on:submit.prevent="submit()" enctype="multipart/form-data">
                            <h1 class="h4 mb-3 fw-normal text-center">
                                Nuevo aviso
                            </h1>
    
                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Titulo" v-model="aviso.title" autocomplete="off" autofocus>
                                <label for="floatingInput">Titulo</label>
                            </div>
    
                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Titulo" v-model="aviso.title" autocomplete="off" autofocus>
                                <label for="floatingInput">URL</label>
                            </div>

                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Descripción" v-model="aviso.description" autocomplete="off">
                                <label>Descripción</label>
                            </div>
    
                            <div class="mb-3 form-floating">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="text" placeholder="Link" v-model="aviso.link" autocomplete="off">
                                <label>Link</label>
                            </div>

                            <label class="mb-2">Imagen</label>
                            <div class="input-group mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="file" name="image" @change="handleFileUpload( $event )">
                            </div>
    
                            <label class="mb-2">Archivo html</label>
                            <div class="input-group mb-3">
                                <input class="form-control" v-bind:class="{'input-night': $store.getters.night}" type="file" name="image" @change="handleFileUpload( $event )">
                            </div>
    
                            <div class="form-group mb-3">
                                
                                <button class="btn btn-primary w-100 px-4 me-sm-3" type="submit" :disabled="!send">
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
            <div class="col-md-12" >
                <br>
                <div class="table-responsive">
                    <table class="table table-hover" v-bind:class="{'table-dark night-bg': $store.getters.night}">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Descripción</th>
                                <th>Link</th>
                                <th>Tipo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="avisoR in avisos" :key="avisoR._id">
                                <td>{{avisoR.title}}</td>
                                <td>{{avisoR.description}}</td>
                                <td>{{avisoR.link}}</td>
                                <td>{{avisoR.type}}</td>
                                <td>
                                    <a @click="$router.push('/dev/avisos-principales/editar/'+avisoR._id)" class="btn btn-sm btn-outline-primary"><font-awesome-icon icon="fa-solid fa-pen" /> Editar</a>
                                    <a class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+avisoR._id"><font-awesome-icon icon="fa-solid fa-trash-can" /> Eliminar</a>
    
                                    <div class="modal fade" :id="'exampleModal'+avisoR._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content rounded-4 shadow" v-bind:class="{'input-night': $store.getters.night}">
                                            <div class="modal-header border-bottom-0">
                                                <h5 class="modal-title fs-5">Eliminar aviso</h5>
                                                <button type="button" class="btn-close" v-bind:class="{'btn-close-white': $store.getters.night}" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body py-0">
                                                ¿Está seguro que quiere eliminar este aviso?
                                            </div>
                                            <div class="modal-footer flex-column border-top-0">
                                                <button type="button" class="btn btn-secondary w-100 mx-0 mb-2" data-bs-dismiss="modal">Cerrar</button>
                                                <button class="btn btn-danger w-100 mx-0 mb-2" data-bs-dismiss="modal"  @click="deleteAviso(avisoR._id.toString())">Eliminar</button>
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
            this.aviso.title = ""
            this.aviso.description = ""
            this.aviso.link = ""
            this.aviso.file = ""

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
