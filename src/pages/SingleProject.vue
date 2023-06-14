<template>
    <div>
        <Loader v-if="project === null" />
        <div v-if="project" class="container">
            <h1 class="display-1 text-center mb-4">{{ project.title }}</h1>
            <p class="fw-semibold">{{ project.description }}</p>
            <p v-if="project.type && project.type.name !== null" class="fw-semibold">{{ project.type.name }}</p>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
export default {
    name: 'SingleProject',
    components: {
        Loader,
    },
    data() {
        return {
            project: null,
            apiUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    this.project = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            }).catch((error) => {
                console.error(error);
                // Gestisci l'errore in modo appropriato, ad esempio mostrando un messaggio all'utente
            });
        }

    },

    mounted() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped></style>