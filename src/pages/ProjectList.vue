<template>
    <div>
        <Loader v-if="projects.length === 0" />
        <div class="container">
            <h1 class="display-1 fw-bold text-center mb-4">{{ title }}</h1>
            <div class="row mb-4">
                <CardProject v-for="(project, index) in projects" :project="project" />
            </div>
            <nav :class="projects.length === 0 ? 'd-none' : ''" aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                            @click="getData(currentPage - 1)">Previous</button></li>
                    <li class="page-item" v-for="n in lastPage"><button
                            :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                    </li>

                    <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                            @click="getData(currentPage + 1)">Next</button></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
import CardProject from '../components/CardProject.vue';
export default {
    name: 'ProjectList',
    components: {
        CardProject,
        Loader,
    },
    data() {
        return {
            title: 'Project list',
            projects: [],
            apiUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
        }
    },

    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/projects`, {
                params: {
                    'page': numPage
                }
            }).then((res) => {
                this.projects = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
                console.log(res.data.results);
            })

        }
    },
    mounted() {
        this.getData(1);
    }
}

</script>
  
<style lang="scss" scoped></style>