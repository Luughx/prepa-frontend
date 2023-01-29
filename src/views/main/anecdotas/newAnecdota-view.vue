<template>
    <div class="container p-4">
        <div class="card col-md-6 mx-auto" v-bind:class="{'card-night': $store.getters.night}">
            <div class="card-header">
                <h3 class="text-center">crear anecdota</h3>
            </div>
            <div class="card-body">
                <form action="" v-on:submit.prevent="submit()">
                    <label class="form-label">Datos principales</label>
                    <BaseInput
                    v-bind:class="{'input-night': $store.getters.night}"
                    label="Titulo"
                    v-model="v$.anecdota.title.$model" 
                    :errors="v$.anecdota.title.$errors"
                    :isValidData="!v$.anecdota.title.$invalid"
                    />

                    <BaseInput
                    v-bind:class="{'input-night': $store.getters.night}"
                    label="Descripción"
                    type="textArea"
                    v-model="v$.anecdota.description.$model" 
                    :errors="v$.anecdota.description.$errors"
                    :isValidData="!v$.anecdota.description.$invalid"
                    />

                    <BaseInput
                    v-bind:class="{'input-night': $store.getters.night}"
                    label="Escribe tu anécdota"
                    type="textArea"
                    v-model="v$.anecdota.info.$model" 
                    :errors="v$.anecdota.info.$errors"
                    :isValidData="!v$.anecdota.info.$invalid"
                    />

                    <BaseInput
                    v-bind:class="{'input-night': $store.getters.night}"
                    label="Autor"
                    v-model="v$.anecdota.author.$model" 
                    />

                    <button class="btn btn-primary w-100" :disabled="v$.$invalid && !loading">Enviar anécdota</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from "vue-demi";
    import BaseInput from "@/components/form/BaseInput-component.vue";    
    import useVuelidate from "@vuelidate/core";
    import { Anecdota } from "@/Interfaces/Anecdota";
    import { required, maxLength, minLength, helpers } from "@vuelidate/validators";
    import { postSend } from "@/services/AnecdotasService";

    export default defineComponent({
        components: {
            BaseInput
        },
        setup() {
            return {
                v$: useVuelidate()
            }
        },
        data() {
            return {
                anecdota: {} as Anecdota,
                loading: false
            }
        },
        methods: {
            async submit() {

                if (!this.anecdota.author) this.anecdota.author = "Anónimo"
                
                this.loading = true
                await postSend(this.anecdota)
                this.$router.push("/anecdotas")
            }
        },
        validations() {
            return {
                anecdota: {
                    title: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required),
                        maxLength: helpers.withMessage("El titulo no puede ser mayor a 50 caracteres", maxLength(50))
                    },
                    description: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required),
                        maxLength: helpers.withMessage("El titulo no puede ser mayor a 200 caracteres", maxLength(200))
                    },
                    info: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required)
                    },
                    author: {

                    }
                }
            }
        }
    })
</script>