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
      class="q-pa-md text-center">
      <q-btn
        flat
        dense
        label="About Me"
        icon="face"
        class="q-px-sm"
        :to="'/about-me'"
      />
      <q-btn
        flat
        dense
        label="Projects"
        icon="book"
        class="q-px-sm"
        :to="'/projects'"
      />
      <!-- <q-btn
        flat
        dense
        type="a"
        href="https://drive.google.com/file/d/1GTmBF1GmQq3TjI7tkadAKFNRRj3TjRjV/view?usp=sharing"
        target="__blank_resume"
        label="Resume"
        icon="account_box"
      /> -->
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
