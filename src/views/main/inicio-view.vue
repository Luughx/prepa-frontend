<template >
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators" >
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions"  v-for="button in buttons" :key="button.num" :data-bs-slide-to="button.num" :aria-label="'Slide'+ button.num">
            </button>
        </div>

        <div class="carousel-inner" v-if="exist">
            <div class="carousel-item active">
                <div v-if="avisoPrincipal.link">
                    <a :href="avisoPrincipal.link.toString()" target="_blank" rel="noopener noreferrer">
                        <img :src="avisoPrincipal.imageURL" 
                        class="d-block img-slideshow">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>{{avisoPrincipal.title}}</h4> 
                            <p class="fs-5">{{avisoPrincipal.description}}</p>
                        </div>
                    </a>
                </div>
                <div v-else>
                    <img :src="avisoPrincipal.imageURL" 
                    class="d-block img-slideshow">
                    <div class="carousel-caption d-none d-md-block">
                        <h4>{{avisoPrincipal.title}}</h4> 
                        <p class="fs-5">{{avisoPrincipal.description}}</p>
                    </div>
                </div>
            </div>
        
            <div class="carousel-item" v-for="aviso in avisosSecundarios" :key="aviso._id">
                <div v-if="aviso.link.toString().length > 0">
                    <a :href="aviso.link.toString()" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" :src="aviso.imageURL" 
                        class="d-block img-slideshow" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>{{aviso.title}}</h4> 
                            <p class="fs-5">{{aviso.description}}</p>
                        </div>
                    </a>
                </div>
                <div v-else>
                    <img loading="lazy" :src="aviso.imageURL" 
                    class="d-block img-slideshow" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h4>{{aviso.title}}</h4> 
                        <p class="fs-5">{{aviso.description}}</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="carousel-inner" v-else>
            <div class="carousel-item active">
                <div>
                    <img src="https://res.cloudinary.com/lughx/image/upload/v1655419666/Estaticos/Index/sin_avisos_gwdz6y.png" 
                    class="d-block img-slideshow">
                </div>
            </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container p-4" style="max-width: 680px; padding: 0 15px;">
        <div class="text-center">
            <p class="lead">
            La Preparatoria Federal por Cooperación "Activo 20-30, Albert Einstein" es reconocida, a nivel nacional, como una de las escuelas del nivel medio superior con mayor nivel académico. La disciplina que se les inculca a los estudiantes sienta las bases para que logren su desarrollo profesional con respeto a las instituciones, a si mismos y a los demás.
            </p>
        </div>
    </div>

    <hr>

    <div class="container p-4 fs-5">
    <div class="row">
        <div class="col-lg-4 section">
        <div>
            <h3>Boletas</h3>
            
            <div class="section-div">
                <img loading="lazy" class="section-img d-block" src="https://res.cloudinary.com/lughx/image/upload/v1653239310/Estaticos/Index/pexels-cottonbro-3662630.jpg_eyvyj2.png" alt="">
            </div>

            <p>Consulta tus calificaciones</p>
            <p><a class="btn btn-outline-secondary" href="http://67.225.220.160/~prepaco1/boletapdf/index.php" target="_blank" rel="noopener noreferrer">Ver más</a></p>
        </div>
        </div>
        
        <div class="col-lg-4 section">
            <h3>Estado de cuenta</h3>
            <div class="section-div">
                <img loading="lazy" class="section-img d-block" src="https://res.cloudinary.com/lughx/image/upload/v1653242182/Estaticos/Index/pexels-te-lensfix-1083728_mfpwaj.jpg" alt="">
            </div>
            <p>
            Consulta tu estado de cuenta 
            </p>
            <p><a class="btn btn-outline-secondary" href="http://67.225.220.160/~prepaco1/cuotas/leer.html" target="_blank" rel="noopener noreferrer">Ver más</a></p>
        </div>

        <div class="col-lg-4 section">
            <h3>Calendario</h3>
            <div class="section-div">
                <img loading="lazy" class="section-img d-block" src="https://res.cloudinary.com/lughx/image/upload/v1653239311/Estaticos/Index/pexels-olya-kobruseva-5386754.jpg_d2os7e.png" alt="">
            </div>
            <p>
            Consulta el calendario 
            </p>
            <p><a class="btn btn-outline-secondary" href="https://www.prepa2030.com.mx/_files/ugd/65b189_0dbd23a60a4047f886466a5237618897.pdf" target="_blank" rel="noopener noreferrer">Ver más</a></p>
        </div>
        
    </div>

    <br>
    </div>

    <hr>
    
    <div class="container p-4" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night}">
        <div class="row">
            <div class="col-md-8">
            <div class="fs-5">
                <div class="container-fluid py-5">
                    <h3>Misión</h3>
                    <p>
                    La Prepa 20-30 ofrece una educación de excelencia con modelos educativos y tecnología avanzada, que permite a sus estudiantes desarrollarse en forma equilibrada, conscientes de su pasado histórico y con una constante disposición al servicio y al engrandecimiento de los valores sociales, éticos y culturales.
                    </p>
                </div>
            </div>
            </div>

            <div class="col-md-4">
            <div class="padre-flex">
                <div class="division-div">
                <img loading="lazy" class="division-img" src="https://res.cloudinary.com/lughx/image/upload/v1653242194/Estaticos/Index/pexels-pixabay-207691_cz8mab.jpg">
                </div>
            </div>
        </div>

    </div>
    </div>

    <div class="container p-4" v-bind:class="{'bg-dark': $store.getters.night, 'bg-light': !$store.getters.night}">
        <div class="row">
            <div class="col-md-4">
            <div class="padre-flex">
                <div class="division-div">
                <img loading="lazy" class="division-img" src="https://res.cloudinary.com/lughx/image/upload/v1653242197/Estaticos/Index/pexels-element-digital-1370296_arto5a.jpg">
                </div>
            </div>
            </div>
            <div class="col-md-8">
            <div class="fs-5">
                <div class="container-fluid py-5">
                    <h3>Visión</h3>
                    <p>
                    Ofrecer una educación con infraestructura, metodología y tecnología de vanguardia; contar con personal docente de nivel maestría, que de servicio a estudiantes de todo el estado, contribuyendo en la formación del profesionista que reclama el siglo XXI.
                    </p>
                </div>
            </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import { Aviso_Principal } from "@/Interfaces/Aviso-principal";
import { getAvisoPrincipalPrincipal, getAvisosPrincipalesSecundarios } from "@/services/AvisosPrincipalesService";
import { defineComponent } from "vue-demi";

interface Buttons {
    num: number
}

export default defineComponent({
    data() {
        return {
            avisoPrincipal: {} as Aviso_Principal,
            avisosSecundarios: [] as Aviso_Principal[],
            buttons: [] as Buttons[],
            exist: false
        }
    }, 
    async mounted() {
        this.getAvisoP()
        this.getAvisosS()
    },
    methods: {
        async getAvisoP() {
            const res = await getAvisoPrincipalPrincipal()
            //console.log(res.data)
            if (res.data) {
                this.avisoPrincipal = res.data
                this.exist = true
            }
            //console.log(this.avisoPrincipal.link.length)
        },
        async getAvisosS() {
            const res = await getAvisosPrincipalesSecundarios()
            this.avisosSecundarios = res.data
            for(let i=0;i<= this.avisosSecundarios.length-1; i++) {
                this.buttons.push({num: i+1})
            }
        }
    }
})
</script>