<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div>

                    <a class="navbar-brand " href="#">Project International</a>

                </div>

                <ul class="navbar-nav">
                    <li class="nav-item pt-3" v-for="(link, index) in menu">
                        <router-link :to="{ name: link.routeName }" class="nav-link">
                            <p class="fw-semibold">
                                {{ link.label }}
                            </p>
                        </router-link>
                    </li>
                </ul>

            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderApp',
    data() {
        return {
            menu: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Projects',
                    routeName: 'projects'
                },
                {
                    label: 'About-Us',
                    routeName: 'about'
                },
                {
                    label: 'Contact-Us',
                    routeName: 'contact'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>