<template>
    <div class="col-4">
        <div class="card mb-3 shadow">
            <div class="card-body">
                <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">{{ project.title }}</h4>
                <p>{{ project.description }}</p>
            </div>
            <div class="card-footer">
                <RouterLink class="btn btn-danger" :to="{ name: 'single-project', params: { slug: project.slug } }">
                    Mostrami dettagli
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProject',
    props: [
        'project'
    ],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped></style>