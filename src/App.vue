<template>
  <div>
    <MenuBar />
    <router-view class="element" />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  components: {
    MenuBar,
  },
};
</script>

<style lang="scss">
@import "./App.scss";

.p-menubar {
  position: fixed;
  z-index: 999;
  width: 100%;
}
.element {
  position: relative;
  top: var(--menuHeight);
}
</style>
