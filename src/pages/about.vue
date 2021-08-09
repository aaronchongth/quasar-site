<template>
  <q-page class="container">
    <div class="row gt-sm">
      <q-markdown
        class="q-ma-xl col"
        :src="markdown"
        toc
        @data="onToc"
      />
   
      <div class="q-ma-xl auto">
        <q-avatar
          v-model="home"
          size="250px">
          <img src="https://raw.githubusercontent.com/aaronchongth/quasar-site/assets/drinks.jpg">
        </q-avatar>
      </div>
    </div>
  </q-page>
</template>

<script>
import markdown from '../markdown/about.md'
export default {
  name: 'about',
  data () {
    return {
      markdown: markdown,
    }
  },
}
</script>
