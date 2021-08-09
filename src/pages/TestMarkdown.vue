<template>
  <q-page class="container">
    <div class="row gt-sm">
      <q-markdown
        class="q-ma-xl col"
        :src="markdown"
        toc
        @data="onToc"
      />
    </div>
  </q-page>
</template>

<script>
import markdown from '../markdown/analytical_design.md'
export default {
  name: 'test-markdown',
  data () {
    return {
      markdown: markdown,
    }
  },
}
</script>
