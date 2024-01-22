<template>
  <Card :pt="style_option">
    <template #header>
        <img :src="imageUrl" />
    </template>
    <template #title>Feria de conocimientos</template>
    <template #subtitle>Proyectos finales</template>
    <template #footer>
      <Button
        type="button"
        label="Ver clase"
        icon="pi pi-book"
        @click="selectClass"
        outlined
      />
    </template>
  </Card>
</template>

<script>
import router from '../router';

export default {
  name: 'ProjectCard',
  data() {
    const imageUrl = new URL('../../public/classes/6/banner.jpg', import.meta.url).href;
    return {
      imageUrl,
      style_option: {
        root: { class: 'flex flex-grow-1' },
        body: { class: 'flex flex-column', style: 'width: 100%' },
        content: { class: 'flex-grow-1' },
        footer: { class: 'inline-flex justify-content-center' },
      },
    };
  },
  methods: {
    selectClass() {
      router.push({
        name: 'Project',
      });
    },
  },
};
</script>
