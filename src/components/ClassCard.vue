<template>
  <Card :pt="style_option">
    <template #header>
        <img :src="imageUrl" />
    </template>
    <template #title>Clase {{ number }}</template>
    <template #subtitle>{{ title }}</template>
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
import router from "../router";

export default {
  name: 'RoleCard',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data(props) {
    const imageUrl = new URL(`../../public/classes/${props.info.link}/banner.jpg`, import.meta.url).href;
    return {
      ...props.info,
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
        name: "Class",
        params: { id: this.link },
      });
    }
  }
};
</script>
