<template>
  <Menubar :model="items" />
</template>

<script>
import router from "../router";

export default {
  name: "MenuBar",
  data() {
    return {
      items: [
        {
          icon: "pi pi-home",
          label: "Inicio",
          command: () => router.push({ path: "/" }),
        },
      ],
    };
  },
};
</script>

<style scoped>
.p-menubar {
  background-color: var(--surface-card);
  z-index: 99999;
}
</style>
