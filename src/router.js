import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.Vue';
import ProjectList from './pages/ProjectList.Vue';
import AboutUs from './pages/AboutUs.Vue';
import ContactUs from './pages/ContactUs.Vue';
import SingleProject from './pages/SingleProject.Vue';
import NotFound from './pages/NotFound.Vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs,
        },

        {
            path: '/contact',
            name: 'contact',
            component: ContactUs,
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject,
        },
        //pagina di 404 NotFound
        {
            path: '/:pathmatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },

    ]
});

export { router };
