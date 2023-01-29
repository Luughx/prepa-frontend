<template>
    <div class="container p-4">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card" v-bind:class="{'card-night': $store.getters.night}">
                    <div class="card-header">
                        <h3 class="text-center">
                            Iniciar sesión
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger alert-dismissible fade show" v-if="errorMessage">
                            Datos Inválidos
                        </div>
                        <form v-on:submit.prevent="login()">
                            <BaseInput
                            v-bind:class="{'input-night': $store.getters.night}"
                            label="Correo electrónico" 
                            type="email"
                            v-model="v$.user.email.$model" 
                            :errors="v$.user.email.$errors"
                            :isValidData="!v$.user.email.$invalid"
                            />

                            <BaseInput 
                            v-bind:class="{'input-night': $store.getters.night}"
                            label="Contraseña" 
                            type="password"
                            v-model="v$.user.password.$model" 
                            :errors="v$.user.password.$errors"
                            :isValidData="!v$.user.password.$invalid"
                            />

                            <div class="mb-3">
                                <button class="btn btn-primary w-100" :disabled="v$.$invalid">Iniciar sesión</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from "vue-demi";
    import BaseInput from "@/components/form/BaseInput-component.vue";

    import useVuelidate from '@vuelidate/core';
    import { required, minLength, email, helpers } from "@vuelidate/validators";
    import { postSignin } from "@/services/UsersService";
    import navbar from "@/components/Navbar-Component.vue";
    import { mapActions } from "vuex";
    import { UserComplete } from "@/Interfaces/UserComplete";


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
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            ...mapActions([
                "switchNightAction",
                "switchConnectedAction",
                "setConnectedAction",
                "setDisconnectedAction",
                "LoginAction"
            ]),
            async login() {
                const res = await postSignin(this.user)
                console.log(res.data)
                if (res.data.errorMessage) {
                    this.errorMessage = true
                } else {
                    let userData:UserComplete
                    userData = res.data.userFind
                    userData.owner = res.data.userOwn
                    this.LoginAction(userData)
                    this.$router.push("/perfil/"+res.data.userFind._id)
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
                    email: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required),
                        email: helpers.withMessage("Debe ser un correo valido", email)
                    },
                    password: {
                        required: helpers.withMessage("Este espacio no puede estar vacio", required),
                        minLength: helpers.withMessage("La contraseña tiene que tener más de 6 caracteres", minLength(6))
                    }
                }
            }
        }
    })

</script>