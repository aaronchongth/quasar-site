<template>
  <hero>
    <q-markdown :src="markdown" toc @data="onToc" />
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn
        fab
        icon="keyboard_arrow_up"
      />
    </q-page-scroller>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
// import markdownVue from '../markdown/markdown.vmd'
import markdown from '../markdown/markdown.md'
export default {
  name: 'PageIndex',
  components: {
    Hero
  },
  data () {
    return {
      markdown: markdown,
    }
  },
}
</script>

