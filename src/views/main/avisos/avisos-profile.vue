<template lang="">
    <main class="container p-4">
        <div v-html="content"></div>
    </main>
</template>

<script lang="ts">
import { getAvisohtml } from "@/services/Avisoshtml";
import { defineComponent } from "vue-demi";

export default defineComponent({
    data() {
        return {
            content: ""
        }
    },
    mounted() {
        this.getAviso()
    },
    methods: {
        async getAviso() {
            const res = await getAvisohtml(this.$route.params.id.toString())

            if (res.data) {
                this.content = res.data.content
            } else {
                this.$router.push("/error")
            }
        }
    }
})

</script>