<template>
    <div class="container p-4">
        <div class="col-md-8">

            <div v-for="anecdota in anecdotas" :key="anecdota._id">
                <div class="fs-5">
                <hr>
                <h4>{{anecdota.title}}</h4>
                <div>
                    {{anecdota.description}}
                </div>
                <div class="fs-6">
                    - {{anecdota.author}}
                </div>
                <a @click="$router.push(`/anecdota/${anecdota._id}`)" class="btn btn-outline-primary btn-sm" >Ver más</a>
                </div>
            </div>

            <nav class="">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <span class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="reload(prevPage, false)">Anterior</span>
                    </li>

                    <li v-if="listVal.one" class="page-item">
                        <a class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="reload(listNum.oneN, false)">{{listNum.oneN}}</a>
                    </li>
                    <li v-if="listVal.two" class="page-item">
                        <a class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="reload(listNum.twoN, false)">{{listNum.twoN}}</a>
                    </li>
                    <li v-if="listVal.three" class="page-item active">
                        <a class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="reload(listNum.threeN, false)">{{listNum.threeN}}</a>
                    </li>
                    <li v-if="listVal.four" class="page-item">
                        <a class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="reload(listNum.fourN, false)">{{listNum.fourN}}</a>
                    </li>
                    <li v-if="listVal.five" class="page-item">
                        <a class="page-link"  v-bind:class="{'pagination-night': $store.getters.night}" @click="reload(listNum.fiveN, false)">{{listNum.fiveN}}</a>
                    </li>

                    <li class="page-item" :class="{'disabled':listVal.isEnd && !$store.getters.night}">
                        <a class="page-link" v-bind:class="{'pagination-night-disabled': $store.getters.night && listVal.isEnd, 'pagination-night': $store.getters.night && !listVal.isEnd}" @click="reload(nextPage, true)">Siguiente</a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Anecdota } from "@/Interfaces/Anecdota";
import { getAnecdotas, getAnecdotasList } from "@/services/AnecdotasService";

interface ListVal {
    isFirst: boolean, 
    isEnd: boolean, 
    one: boolean, 
    two: boolean, 
    three: boolean, 
    four: boolean, 
    five: boolean
}

export default defineComponent({
    data() {
        return {
            anecdotas: [] as Anecdota[],
            listVal: {} as ListVal,
            listNum: [],
            nextPage: 0, 
            prevPage: 0
        }
        
    }, 
    mounted() {
        this.CargarAnecdotas()
    },
    methods: {
        async reload(page: any, next: any) {
            if (next) {
                if (!this.listVal.isEnd) {
                    await this.$router.push('/anecdotas/'+page)
                    this.CargarAnecdotas()
                }
            } else {
                await this.$router.push('/anecdotas/'+page)
                this.CargarAnecdotas()
            }
        },
        async CargarAnecdotas() {
            const res = await getAnecdotasList(this.$route.params)
            //console.log(res.data)
            if (this.$route.params.id == "1") {
                this.$router.push("/anecdotas")
            } 
            this.listVal = res.data.listVal
            this.listNum = res.data.listNum
            this.anecdotas = res.data.docs

            this.nextPage = res.data.nextPage
            this.prevPage = res.data.prevPage
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