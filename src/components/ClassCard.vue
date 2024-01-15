<template>
  <Card :pt="style_option">
    <template #header>
        <img :src="image" />
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
    return {
      ...props.info,
      style_option: {
        root: { class: 'flex flex-grow-1' },
        body: { class: 'flex flex-column', style: 'width: 100%' },
        // content: { class: 'flex-grow-1' },
        footer: { class: 'inline-flex justify-content-center' },
      },
    };
  },
  methods: {
    selectClass() {
      router.push({
        name: "Class",
        params: { id: this.number },
      });
    }
  }
};
</script>
