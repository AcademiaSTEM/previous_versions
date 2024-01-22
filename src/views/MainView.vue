<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>STEM UC: Academia para escolares</h4>
        <h1>Primeros pasos en programación</h1>
      </header>

      <Divider />
      <h2>Donde programar</h2>
      <p>
        Como curso, queremos que puedas programar desde cualquier lugar,
        por lo que te invitamos a utilizar cualquiera de
        las alternativas de <span class="font-bold">"Python Online"</span>
        que se encuentran disponibles en la red.
      </p>
      <div class="inline-flex justify-content-center full-width px-0 sm:px-5 md:px-8">
        <a href="https://www.google.cl" class="p-button google">
          <img :src="googleIcon" />
          Python Online
        </a>
      </div>

      <Divider />
      <h2>Clases</h2>
      <div class="grid align-items-stretch gap-3 px-0 sm:px-5 md:px-8">
        <ClassCard
        v-for="info in classes"
        :info="info"
        :key="info.id"
        class="flex col-12 md:col-5" />
        <ProjectCard class="flex col-12 md:col-5" />
        <div
         v-if="((classes.length + 1) % 2) && (windowWidth >= 576)"
         class="flex col-0 md:col-5 flex-grow-1"
        />
      </div>

      <Divider />
      <h2>Resumen</h2>
      <vue-pdf-app v-if="pdfFile" style="height: 500px;" :pdf="pdfFile" />

      <Divider />
      <h2>Fotos</h2>
      <p>Fotos tomadas el día de la última clase 🐢💕.</p>
      <Carousel
        :value="photos"
        :numVisible="1"
        :numScroll="1"
        circular
        :autoplayInterval="3000"
        :orientation="windowWidth < 576 ? 'vertical' : 'horizontal'"
        verticalViewPortHeight="225px"
      >
        <template #item="slotProps">
          <div class="flex align-items-center justify-content-center">
            <img :src="slotProps.data" class="w-12 shadow-2" />
          </div>
        </template>
      </Carousel>

      <h2>Historias de un computador</h2>
      <p>
        Aprovecho de dejarles algunas fotos de lo que el
        proceso de reparar el computador que se cayó en clases.
        Cabres, tengan cuidado con los alargadores-zapatillas 🔌.
      </p>
      <Carousel
        :value="computer"
        :numVisible="1"
        :numScroll="1"
        circular
        :autoplayInterval="3000"
        :orientation="windowWidth < 576 ? 'vertical' : 'horizontal'"
        verticalViewPortHeight="225px"
      >
        <template #item="slotProps">
          <div class="flex align-items-center justify-content-center">
            <img :src="slotProps.data" class="w-12 shadow-2" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';
import ClassCard from '../components/ClassCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import info from '../storage/info';

export default {
  name: 'MainView',
  components: {
    ClassCard,
    ProjectCard,
  },
  data() {
    const { width } = useWindowSize();
    const googleIcon = new URL('../../public/googleIcon.png', import.meta.url).href;
    const pdfFile = new URL('../../public/Resumen Sintaxis.pdf', import.meta.url).href;
    const photos = Array(4).fill().map((__, i) => {
      const path = new URL(`../../public/images/grupo_${i + 1}.jpg`, import.meta.url).href;
      return path;
    });
    const computer = Array(3).fill().map((__, i) => {
      const path = new URL(`../../public/images/computer_${i + 1}.jpg`, import.meta.url).href;
      return path;
    });
    return {
      classes: info,
      googleIcon,
      pdfFile,
      photos,
      computer,
      windowWidth: width,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 0;
  }
}
.google {
  background: white;
  border-color: #FFFFFF00;
  border-radius: 50vh;
  color: black;
  display: flex;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  img {
    padding-right: 1rem;
  }
}
.full-width {
  width: 100%;
}
</style>
