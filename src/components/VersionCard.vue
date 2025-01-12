<template>
    <Card :pt="style_option">
      <template #header>
          <img :src="imageUrl" />
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
    const imageUrl = new URL(`../assets/images/${props.info.year}_s${props.info.version_id}.jpg`, import.meta.url).href;
    let versionUrl = 'https://academiastem.github.io/';
    if (!props.info.version.toLowerCase().includes('actual')) {
      versionUrl += `${props.info.year}_s${props.info.version_id}`;
    }
    return {
      ...props.info,
      imageUrl,
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
