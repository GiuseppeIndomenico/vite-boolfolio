<template>
  <div>
    <div class="container">
      <h1 class="display-1 fw-bold text-center mb-4">{{ title }}</h1>
      <div class="row mb-4">
        <div class="col-4" v-for="(project, index) in projects">
          <div class="card mb-3 shadow">
            <div class="card-body">
              <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">{{ project.title }}</h4>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
              @click="getData(currentPage - 1)">Previous</button></li>
          <li class="page-item" v-for="n in lastPage"><button :class="{ 'page-link': true, 'active': currentPage === n }"
              @click="getData(n)">{{ n }}</button>
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
export default {
  'name': 'App',
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
        console.log(res);
      })

    }
  },
  mounted() {
    this.getData(1);
  }
}

</script>

<style lang="scss" scoped></style>