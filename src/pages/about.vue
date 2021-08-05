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
          <img src="~assets/drinks.jpg">
        </q-avatar>
      </div>
    </div>

    <div class="col sm">
      <div class="float-right q-ml-lg">
        <q-avatar
          v-model="home"
          size="150px">
          <img src="~assets/drinks.jpg">
        </q-avatar>
      </div>

      <q-markdown
        class="q-ma-lg"
        :src="markdown"
        toc
        @data="onToc"
      />
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
