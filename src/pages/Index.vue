<template>
  <q-page class="flex flex-center page-container column">

    <div class="q-pa-md">
      <q-avatar
        v-model="home"
        size="250px">
        <img src="~assets/bw.jpg">
      </q-avatar>
    </div>

    <div>
      <q-btn
        flat
        dense
        class="q-pa-xs"
        type="a"
        href="https://github.com/aaronchongth"
        target="__blank_github">
        <i class="fab fa-github-square fa-3x"></i>
      </q-btn>
      <q-btn
        flat
        dense
        class="q-pa-xs"
        type="a"
        href="https://www.linkedin.com/in/aaronchongth"
        target="__blank_linkedin">
        <i class="fab fa-linkedin fa-3x"></i>
      </q-btn>
      <q-btn
        flat
        dense
        class="q-pa-xs"
        type="a"
        href="https://scholar.google.com/citations?user=ueV22wEAAAAJ&hl=en&oi=ao"
        target="__blank_google_scholar">
        <i class="ai ai-google-scholar-square ai-3x"></i>
      </q-btn>
    </div>

    <div
      class="q-pa-md text-subtitle1 text-center">
      Hello there! My name is Aaron, and I am a software engineer at the <span><a href="https://www.openrobotics.org/">Open Source Robotics Foundation</a></span>.</br>
      I am very fond of topics in math, computer science, machine learning & vision, especially in the field of robotics.</br>
      In my free time, I like to build and learn new things, read books, or play volleyball.</br>
      Right now, I am having fun with the <span><a href="https://quasar.dev/">Quasar Framework</a></span>.
    </div>

    <div
      class="q-pa-md desktop-only">
      <q-btn-group push>
        <q-btn 
          push
          dense
          label="Home" 
          icon="home"
          class="q-px-md"
          :to="'/'"
        />
        <q-btn
          push
          dense
          label="Publications"
          icon="book"
          @click=""
          class="q-px-md"
          :to="'/publications'"
        />
      </q-btn-group>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      home: true,
      drawer: false
    }
  }
}
</script>
