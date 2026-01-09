<template>
    <Card :pt="style_option">
      <template #header>
          <img :src="imagePath" />
      </template>
      <template #title>{{ year }}</template>
      <template #subtitle>{{ version }}</template>
      <template #footer>
        <a :href="versionUrl">
          <Button
            type="button"
            label="Ver versión"
            icon="pi pi-book"
            outlined
          />
        </a>
      </template>
    </Card>
</template>

<script>
export default {
  name: 'VersionCard',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data(props) {
    const version = props.info.version_id === 0 ? `${props.info.year}` : `${props.info.year}_s${props.info.version_id}`;
    const imagePath = new URL(`../assets/images/${version}.jpg`, import.meta.url).href;
    let versionUrl = 'https://academiastem.github.io/';
    if (!props.info.version.toLowerCase().includes('actual')) {
      versionUrl += `${version}`;
    }
    return {
      ...props.info,
      imagePath,
      versionUrl,
      style_option: {
        root: { class: 'flex flex-grow-1' },
        body: { class: 'flex flex-column', style: 'width: 100%' },
        content: { class: 'flex-grow-1' },
        footer: { class: 'inline-flex justify-content-center' },
      },
    };
  },
};
</script>
