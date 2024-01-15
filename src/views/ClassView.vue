<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>Clase {{ number }}</h4>
        <h1>{{ title }}</h1>
      </header>

      <Divider />
      <h2>Presentación</h2>
      <vue-pdf-app style="height: 500px;" :pdf="pdfFile" />

      <Divider />
      <h2>Código</h2>
      <div v-if="mardkownContent" v-html="markdown.render(mardkownContent)" />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import info from '../storage/info.js';

export default {
  name: 'ClassView',
  setup() {
    const markdown = new MarkdownIt();
    return { markdown };
  },
  data() {
    const classInfo = info[this.$route.params.id]
    return {
      ...classInfo,
      pdfFile: `../../public/classes/${this.$route.params.id}/${classInfo.pdf}`,
      mardkownContent: undefined,
    };
  },
  async created() {
    const mardkownFile = new URL(`../../public/classes/${this.$route.params.id}/code.md`, import.meta.url).href
    const mardkownContent = await fetch(mardkownFile).then((r) => r.text())
    this.mardkownContent = mardkownContent;
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
