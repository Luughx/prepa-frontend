<template>
    <div class="container p-4">
        <div class="col-md-8">
            
            <h2>{{anecdota.title}}</h2>
            <p class="fs-5">
                {{anecdota.info}}
            </p>
            <hr>
            
            <p class="fs-6 hijo-centrar">
                {{anecdota.author}}
            </p>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Anecdota } from "@/Interfaces/Anecdota";
import { getAnecdota, getAnecdotas } from "@/services/AnecdotasService";

export default defineComponent({
    data() {
        return {
            anecdota: {} as Anecdota
        }
    }, 
    async mounted() {
        const res = await getAnecdota(this.$route.params.id)
        this.anecdota = res.data
    }
})
</script>