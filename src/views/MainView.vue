<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>STEM UC: Academia para escolares</h4>
        <h1>Primeros pasos en programación</h1>
      </header>

      <Divider />
      <h2>Donde programar</h2>
      <p>dandksa</p>

      <Divider />
      <h2>Clases</h2>
      <div class="grid align-items-stretch gap-3">
        <ClassCard
        v-for="info in classes"
        :info="info"
        :key="info.id"
        class="flex col-12 md:col-5" />
      </div>
    </div>
  </div>
</template>

<script>
import ClassCard from '../components/ClassCard.vue';
import info from '../storage/info.js';

export default {
  name: 'MainView',
  components: {
    ClassCard,
  },
  data() {
    return {
      classes: info,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  text-align: center;
  margin-bottom: 2.5rem;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 0;
  }
}
</style>
