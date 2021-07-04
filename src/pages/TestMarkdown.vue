<template>
  <hero>
    <q-markdown :src="markdown" toc @data="onToc" />
    <q-markdown>
# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

---

This page created with [QMarkdown](https://quasarframework.github.io/quasar-ui-qmarkdown), another great Quasar App Extension.
    </q-markdown>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn
        fab
        icon="keyboard_arrow_up"
        :class="{ 'text-black bg-grey-4': $q.dark.isActive, 'text-white bg-primary': !$q.dark.isActive }"
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

