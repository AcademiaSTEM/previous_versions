<template>
  <div>
    <MenuBar />
    <router-view class="element" />
    <FooterInfo />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import FooterInfo from './components/FooterInfo.vue';

export default {
  components: {
    MenuBar,
    FooterInfo,
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
