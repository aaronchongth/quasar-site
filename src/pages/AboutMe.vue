<template>
  <q-page class="flex page-container column col-12">

    <drawer
      active="about-me"
    />

    <div
      class="q-pa-xl text-h4 text-center">
      About Me
    </div>

    <div
      class="q-pa-md text-subtitle1 text-center">
      Hello there! My name is Aaron, and I am a software engineer at the <span><a href="https://www.openrobotics.org/">Open Source Robotics Foundation</a></span>.</br>
      I am very fond of topics in math, computer science, machine learning & vision, especially in the field of robotics.</br>
      In my free time, I like to build and learn new things, read books, or play volleyball.</br>
      Right now, I am having fun with the <span><a href="https://quasar.dev/">Quasar Framework</a></span>.
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      variable_stiffness_expanded: false,
      stiffness_modulator_expanded: false,
      analytical_design_expanded: false
    }
  },
  components: {
    'drawer': require('components/Drawer.vue').default
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>
