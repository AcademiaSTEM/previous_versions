<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>Primeros pasos en ingeniería</h4>
        <h1>Versiones anteriores</h1>
      </header>

      <Divider />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviousVersionsView',
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
