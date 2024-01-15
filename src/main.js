/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */

import { createApp } from 'vue';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/layout.scss';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Menubar from "primevue/menubar";

import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });

app.component('Button', Button);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Menubar', Menubar);
app.component('VuePdfApp', VuePdfApp);

app.mount('#app');
