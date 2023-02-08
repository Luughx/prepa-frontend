<template>
    <main class="container p-4">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card " v-bind:class="{'card-night': $store.getters.night}">
                    <div class="card-body">
                        <h1 class="h3 mb-3 fw-normal text-center">
                            Iniciar sesion como alumno
                        </h1>
                        <div class="alert alert-danger alert-dismissible fade show" v-if="errorMessage">
                            Datos Inválidos
                        </div>
                        <form v-on:submit.prevent="login()">
                            <BaseInput
                            class="input-number-hide"
                            v-bind:class="{'input-night': $store.getters.night}"
                            labelText="Matricula" 
                            type="number"
                            v-model="v$.user.fees.$model" 
                            :errors="v$.user.fees.$errors"
                            :isValidData="!v$.user.fees.$invalid"
                            idFloating="feesId"
                            floating
                            />


                            <BaseInput 
                            v-bind:class="{'input-night': $store.getters.night}"
                            labelText="Contraseña" 
                            type="password"
                            v-model="v$.user.password.$model" 
                            :errors="v$.user.password.$errors"
                            :isValidData="!v$.user.password.$invalid"
                            idFloating="passwordId"
                            floating
                            />

                            <div class="mb-3">
                                <button class="btn btn-primary w-100" :disabled="v$.$invalid">Consultar</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">

    import { defineComponent } from "vue-demi";
    import BaseInput from "@/components/form/BaseInput-component.vue";

    import useVuelidate from '@vuelidate/core';
    import { required, minLength, email, helpers } from "@vuelidate/validators";

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
                errorMessage: false,
                user: {
                    fees: "",
                    password: ""
                }
            }
        },
        methods: {
            async login() {
                if (this.user.fees == "123456" && this.user.password == "12345") {
                    this.$store.state.userStudent.connected = true
                    this.$store.state.userStudent.fees = this.user.fees

                    this.$router.push("/panel")
                    console.log("sending data")
                }
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