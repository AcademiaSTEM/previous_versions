<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>Clase {{ number }}</h4>
        <h1>{{ title }}</h1>
      </header>

      <Divider />
      <h2>Presentación</h2>
      <vue-pdf-app v-if="pdfFile" style="height: 500px;" :pdf="pdfFile" />

      <Divider />
      <h2>Código</h2>
      <div v-if="mardkownContent" v-html="markdown.render(mardkownContent)" />

      <component v-if="extra" :is="comp" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import MarkdownIt from 'markdown-it';
import info from '../storage/info';
import highlight from '../utils/highlight';

export default {
  name: 'ClassView',
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data() {
    const classInfo = info[this.$route.params.id];
    return {
      ...classInfo,
      pdfFile: undefined,
      mardkownContent: undefined,
    };
  },
  async created() {
    const pdfFile = new URL(`../../public/classes/${this.$route.params.id}/${this.pdf}`, import.meta.url).href;
    const mardkownFile = new URL(`../../public/classes/${this.$route.params.id}/code.md`, import.meta.url).href;
    const mardkownContent = await fetch(mardkownFile).then((r) => r.text());
    this.mardkownContent = mardkownContent;
    this.pdfFile = pdfFile;
  },
  computed: {
    comp() {
      if (!this.extra) {
        return;
      }
      const file = new URL(`../../public/classes/${this.$route.params.id}/${this.extra}`, import.meta.url).href;
      // eslint-disable-next-line consistent-return
      return defineAsyncComponent(() => import(file /* @vite-ignore */));
    },
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
