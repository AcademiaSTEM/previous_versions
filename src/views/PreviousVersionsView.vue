<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>STEM UC: Academia para escolares</h4>
        <h1>Primeros pasos en programación</h1>
      </header>

      <Divider />
      <h2>Versiones anteriores</h2>
      <div class="grid align-items-stretch gap-3 px-0 sm:px-5 md:px-8">
        <VersionCard
          v-for="info in versions"
          :info="info"
          :key="info.id"
          class="flex col-12 md:col-5" />
        <div
         v-if="(versions.length % 2) && (windowWidth >= 576)"
         class="flex col-0 md:col-5 flex-grow-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';
import VersionCard from '../components/VersionCard.vue';

export default {
  name: 'PreviousVersionsView',
  components: {
    VersionCard,
  },
  data() {
    const { width } = useWindowSize();
    return {
      versions: [
        { year: 2025, version_id: 1, version: 'Actual' },
        { year: 2024, version_id: 2, version: 'Segunda semana' },
        { year: 2024, version_id: 1, version: 'Primera semana' },
      ],
      windowWidth: width,
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
